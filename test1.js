/**
 * Created by albertobozal on 4/4/17.
 */
const express = require('express');
const server1API = express.Router();

server1API.post('/helloworld1', function(req, res, next){
    let data = req.body;
    console.log(data);
    res.json({success: true, msg: 'helloworld2.'});

});
server1API.post('/helloworld2', function(req, res, next){
    let data = req.body;
    console.log(data);
    res.json({success: true, msg: 'helloworld2.'});
});
server1API.get('/helloworld1', function(req, res, next){
    let data = req.body;
    console.log("Received1 ",new Date().getTime());
    res.json({success: true, msg: 'helloworld1.'});
});
module.exports = server1API;