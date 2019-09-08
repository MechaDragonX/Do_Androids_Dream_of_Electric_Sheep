const express = require('express')
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.json());

let stored = {
    name: "Electric Sheep",
    count: "999"
};
const thisthing = false;

app.get('/', (req, res) => {
    console.log('GET request received!')
    res.send(`There are ${stored.count} ${stored.name}!`)
});

app.put('/', (req,res) => {
    console.log('PUT Request received, body')
    console.log(req.body)
    if(!req.body) {
        res.status(400).send('No body present')
        return;
    }
    stored = Object.assign(stored, req.body)
    res.status(201).json(stored)
});

app.listen(port, () => console.log(`server running on port ${port}`));