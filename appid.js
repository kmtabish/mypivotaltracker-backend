var express = require('express');
var app = express();

var tracker = require('pivotaltracker');

var client = tracker.Client();

app.get('/token/:appid', function (req, res) {
   res.send( req.params.appid);
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


app.get('/project/:appid', function (req, res) {
  client.useToken( req.params.appid)
  client.projects.all(function(error, projects) {
    res.json({project:projects, id: req.params.appid})
  });
});


app.get('/epics/:appid/:projectId', function (req, res) {
  client.useToken( req.params.appid)
  //client.projects.all(function(error, projects) {

    client.project(req.params.projectId).epics.all(function(error, epics) {

     res.json(epics)
   // });
  });
});

app.get('/epics/:appid/:projectId', function (req, res) {
  client.useToken( req.params.appid)
  //client.projects.all(function(error, projects) {

  client.project(req.params.projectId).epics.all(function(error, epics) {

    res.send(epics)
    // });
  });
});

app.get('/epic/:appid/:projectId/:epicId', function (req, res) {
  client.useToken( req.params.appid)
  if (req.params.epicId) {

    client.project(req.params.projectId).epic(req.params.epicId).get(function(error, epic) {

      res.send(epic)
    });
  }
});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});