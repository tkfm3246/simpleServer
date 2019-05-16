'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8123;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);
});
app.listen(parseInt(PORT, 10));
