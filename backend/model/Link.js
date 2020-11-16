const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    shortened_url:{
        type:String,
        required:true
    },
    original_url:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
})

mongoose.model('links', LinkSchema)

