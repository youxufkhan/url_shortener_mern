const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 8080

require('./config/db')

// bodyparser middleware
app.use(bodyParser.urlencoded({ limit:'50mb', extended: false }));
app.use(bodyParser.json({limit: '50mb', extended: false}));

app.use(cors());

// app.get('/', (req, res) => res.send('Hello World!'))

require('./route/routes')(app);
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('./client/build'))
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

