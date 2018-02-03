const express = require('express');
const router = require('./routes/routes.js');

const app = express();
const port = 8080;


app.use('/',router);

app.listen(port, () => console.log('running at localhost: ' + port));


module.exports=app;
