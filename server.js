var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/graceful-wren', function(request, response){
    response.send('yippee');
});

app.listen(process.env.PORT || 4000);