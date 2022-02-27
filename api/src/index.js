import express from 'express';
import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';

const dbClient = new DynamoDBClient({
    credentials: {
        accessKeyId: 'xxx',
        secretAccessKey: 'xxx'
    },
    region: 'local',
    endpoint: 'http://database:8000'
});

const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`API running on port: ${port}`);
});

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