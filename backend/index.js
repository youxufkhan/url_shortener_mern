const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()
const port = 4552

require('./config/db')

// bodyparser middleware
app.use(bodyParser.urlencoded({ limit:'50mb', extended: false }));
app.use(bodyParser.json({limit: '50mb', extended: false}));

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


require('./route/routes')(app);