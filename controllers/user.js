var tracker = require('pivotaltracker');

module.exports = {
  login: function (req, res) {
    if (req.body.username && req.body.password) {
      tracker.getToken(req.body.username, req.body.password, function (error, token) {
        res.send({userToken: token})
      });
    }else{
      res.status(500).send('internal server error');
    }
  },
  verifyToken: function (req, res) {
    if(req.body.userToken){
      var client = tracker.Client();
      client.useToken(req.body.userToken);
      client.projects.all(function(error, projects) {
        if(error){
          res.status(500).send('Invalid User Token');
        }else{
          res.status(200).send('Valid User Token');
        }
      });

    }else{
      res.status(500).send('internal server error');

    }
  }
};