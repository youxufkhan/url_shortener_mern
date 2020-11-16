const mongoose = require('mongoose');
const randomstring = require('randomstring')
require('../model/Link');
const Link = mongoose.model('links');

module.exports = {
    createLink: async (req, res) => {
        if(!req.query.url){
            res.send('url is required')
        }
        var newLink = new Link({ original_url: req.query.url, shortened_url: randomstring.generate(5) })
        await newLink.save()
        res.send(newLink)
    },
    getLink: async (req, res) => {
        var link = await Link.findOne({shortened_url:req.query.url})
        if(link){
            res.send(link)
        }else{
            res.status('404').send('Invalid URL')
        }
    }
}