var express = require('express');
var app = express();

var tracker = require('pivotaltracker');
var user = '***********';
var password = '******';
var a = "";

var client = tracker.Client();

tracker.getToken(user, password, function(error, token) {
  console.log(token, error);
  a= token;
  client.useToken(a);
});

app.get('/token', function (req, res) {
   res.send( a);
});

app.get('/', function (req, res) {
  client.accounts.all(function(error, accounts) {
    if (error) {
      console.log(error);
    }
    else {

      res.send(accounts);
    }
  });
});

app.get('/epics', function (req, res) {
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
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});