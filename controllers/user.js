var tracker = require('pivotaltracker');

module.exports = {
  login: function (req, res) {
    console.log("Body Response--user", req.body);
    if (req.body.username && req.body.password) {
      tracker.getToken(req.body.username, req.body.password, function (error, token) {
        //    console.log
      });
    }else{
      res.send({statusCode: "500"})
    }
  },
  get: function () {

  }
};