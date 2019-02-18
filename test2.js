/**
 * Created by albertobozal on 4/4/17.
 */
const express = require('express');
const server1API = express.Router();
const http= require('http');

server1API.get('/sendhelloworld', function(req, res, next){

    sendpostData();

});

function sendpostData() {

    let options = {
        hostname: 'localhost',
        port: 8080,
        path: '/api1/helloworld2',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    let request = http.request(options, function(res) {
        console.log('Status: ' + res.statusCode);
        console.log('Headers: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (body) {
            res.json({success: true, msg: 'helloworld1.'});
            console.log('Body: ' + body);
        });
    });

    request.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

// write data to request body
    let body = JSON.stringify({
        string: "Hello, World",
        hola: "1234"
    });
    request.write(body);
    request.end();


}
module.exports = server1API;