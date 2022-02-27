import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';

const dbClient = new DynamoDBClient({
    region: 'local',
    endpoint: 'http://172.25.0.1:8000'
});

dbClient.send(new ListTablesCommand())
    .then((tables) => {
        console.log(tables);
    })
    .catch((e) => {
        console.log(e);
    });