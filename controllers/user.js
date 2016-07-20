var tracker = require('pivotaltracker');

module.exports = {
  login: function (req, res) {
    console.log("Body Response--user", req.body);
    if (req.body.username && req.body.password) {
      tracker.getToken(req.body.username, req.body.password, function (error, token) {
        if(error)
          res.status(404).send('No user found');
        else
          if(token){
            res.status(200).res.send({token : token});
          }
      });
    }else{
      res.status(500).send('Internal server error');
    }
  },
  get: function () {

  }
};