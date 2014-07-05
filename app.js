/**
 * Created by harsha on 7/4/14.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);

//app.configure('development',function() {
    app.use('/public', express.static(__dirname + '/public'));
//    app.use('/node_modules', express.static(__dirname + '/node_modules'));
//    app.use(express.errorHandler());
//    app.use(express.bodyParser()); 							// pull information from html in POST
//    app.use(express.methodOverride()); 						// simulate DELETE and PUT
//});

app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
});

server.listen(process.env.PORT || 2222, function(){
    console.log("Application is running at port 2222");
});