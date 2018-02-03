var models = require('../models');

module.exports = {
  myplaces: {
    get: function (req, res) {
      models.myplaces.get((err, results) => {
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

  create: {
    post: function (req, res) {
      var data = [];
      data.push(sess);
      for (const key in req.body) {
        data.push( req.body[key]);
      }
      models.create.post(data ,(err, results) => res.redirect('/'));
    }
  }
};
