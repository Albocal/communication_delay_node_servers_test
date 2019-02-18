const express = require('express');
const bodyParser = require('body-parser');


const api = require('./api1');
const app = express();

// Port Number
const port = process.env.PORT1 || 8080;



// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api1', api);

app.listen(port, function(){
    console.log('Server started on port '+port);
});