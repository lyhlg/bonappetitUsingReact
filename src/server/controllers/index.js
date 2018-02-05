var models = require('../models');

module.exports = {
  myplaces: {
    get: function (req, res) {
      models.myplaces.get(req.query.token, (err, results) => {
        res.json(results);
      });
    }
  },

  allplaces: {
    get: function (req, res) {
      models.allplaces.get((err, results) => {
        res.json(results);
      });
    }
  },

  usercreate: {
    post: function (req, res) {
      models.usercreate.post(Object.values(req.body), (err, result ) => {
        res.json(200);
      });
    }
  },

  create: {
    post: function (req, res) {
      console.log("req.body:", req.body );
      models.create.post(Object.values(req.body), (err, results) => res.redirect('http://localhost:3000/myplaces'));
    }
  }
};
