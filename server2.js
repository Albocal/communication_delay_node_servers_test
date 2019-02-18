const express = require('express');
const bodyParser = require('body-parser');

const api = require('./api2');

const app = express();

// Port Number
const port = process.env.PORT2 || 8081;


// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use('/api', api);

app.listen(port, function(){
    console.log('Server started on port '+port);
});