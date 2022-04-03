import { app } from '../index.js';

app.post('/register', (req, res) => {
    console.log(req.body);

    res.status(200).send({ body: 'received' });
})