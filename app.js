var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(bodyParser());

var projectController = require('./controllers/project');
var epicController = require('./controllers/epic');
var userController = require('./controllers/user');

app.post('/login',userController.login);

/*app.get('/epics', function (req, res) {
  client.projects.all(function(error, projects) {

    client.project(projects[0].id).epics.all(function(error, stories) {

     res.send(stories)
    });
  });
});

app.get('/project', function (req, res) {
  client.projects.all(function(error, projects) {
    res.send(projects)
  });
});*/

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});