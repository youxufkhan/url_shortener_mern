const mongoose = require('mongoose')
const Constants = require('./constant');

//Connect to Mongoose
mongoose.connect(Constants.DB.local, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected....'))
    .catch((err) => { console.log(err) });

//map  global promise to get rid of warning
mongoose.Promise = global.Promise;