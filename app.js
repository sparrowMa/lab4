// for lab 4

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


// ****Add controllers for project pages: 

// below is the controller import, import the exact .js file in the directory
var index = require('./routes/index');
var hello = require('./routes/hello');

// newly added controller by myself:
var project = require('./routes/project');

// load all controllers in ./routes/project.js
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// **** Route the URL to the controller

// Add routes here
app.get('/', index.view);
app.get('/hello/:userName', hello.view);

// Example route
// app.get('/users', user.list);

// app.get('/project', project.viewProject);
// 1st para: register the URL: localhost:3000/project/(a name)
// 2nd para: call the project.viewProject() function when that URL is requested, in the project.js file [var project = require('./routes/project');]
// =>>> show the project title in the URL
// whatever after "/project/" in the URL, becomes a variable named 'name'.  => ":name"
// and "route/project.js" receives the 'name' variable
app.get("/project/:name", project.viewProject);





http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
