var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var routes = require('./routes');
var chatServer =require('./chatServer')(server);

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/icons', express.static(__dirname + '/icons'));
app.use(app.router);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 9000);

app.get('/', routes.index);

server.listen(process.env.PORT || 9000, process.env.IP || undefined, function() {
  console.log('Express server listening on IP/hostname: "' + '" and port: "' + process.env.PORT + '"');
});
