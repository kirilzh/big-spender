import https from 'https';
import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';

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
    dbClient.send(new ListTablesCommand({}))
        .then((tables) => {
            console.log(tables);
        })
        .catch((e) => {
            console.log(e);
        });

    res.send('Express');
});

app.post('/register', (req, res) => {
    console.log(req.body);

    res.status(200).send({ body: 'received' });
})

function corsMiddleWare(req, res, next) {
    const origin = req.get('origin');

    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
}