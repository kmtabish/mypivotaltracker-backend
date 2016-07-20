var tracker = require('pivotaltracker');

module.exports = {
  login: function (req, res) {
    if (req.body.username && req.body.password) {
      tracker.getToken(req.body.username, req.body.password, function (error, token) {
        if(error)
          res.status(404).send('No user found');
        else
          if(token){
           res.send({token : token});
          }
      });
    }else{
      res.send({statusCode: "500"})
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