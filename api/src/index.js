import https from 'https';
import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import {
    DynamoDBClient,
    PutItemCommand,
    ScanCommand,
} from '@aws-sdk/client-dynamodb';

const __dirname = new URL('.', import.meta.url).pathname;

const key = fs.readFileSync(path.join(__dirname, '../server.key'));
const cert = fs.readFileSync(path.join(__dirname, '../server.crt'));

const dbClient = new DynamoDBClient({
    credentials: {
        accessKeyId: 'xxx',
        secretAccessKey: 'xxx'
    },
    region: 'local',
    endpoint: 'http://database:8000'
});

const jsonParser = bodyParser.json();
export const app = express();
const port = 3001;

app.use(jsonParser);
app.use(corsMiddleWare);

https.createServer({ key, cert }, app).listen(port);

app.get('/', (req, res) => {
    dbClient.send(new ScanCommand({ TableName: 'Users' }))
        .then(({ Items }) => {
            Items.forEach((item) => {
                console.log(JSON.stringify(item));
            })
        })
        .catch((e) => {
            console.log(e);
        });

    res.send('Express');
});

app.post('/register', (req, res) => {
    console.log(req.body);
    dbClient.send(new PutItemCommand({
        TableName: 'Users',
        Item: {
            Username: {
                S: req.body.username
            },
            Password: {
                S: req.body.password
            }
        },
        ReturnConsumedCapacity: 'TOTAL'
    }))
        .then((data) => {
            console.log('data', data);
            res.status(200).send({ body: 'received' });
        })
        .catch((e) => {
            console.log('error', e);
        })

})

function corsMiddleWare(req, res, next) {
    // const origin = req.get('origin');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
}