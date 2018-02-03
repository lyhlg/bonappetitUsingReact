var db = require('../db');

module.exports = {

  myplaces: {
    get: function (session, callback) {
      if (session) {
        let myPlacesGetQuery = `select B.id, A.userId, A.userName, A.gmailAccount, A.thumbnail, B.title, B.menu, B.price, B.comment, B.heartCount from users as A inner join place_info as B on A.userId = B.userId where A.userId = '${session}' order by id desc`;
        db.query(myPlacesGetQuery, (err, results) => {
          if (err) throw err;
          callback(err, results);
        });
      } else {
        // axios Redirect 구현 필요
        callback();
      }
    }
  },
  allplaces: {
    get: function (callback) {
        let allPlacesGetQuery = `select B.id, A.userId, A.userName, A.gmailAccount, A.thumbnail, B.title, B.menu, B.price, B.comment, B.heartCount from users as A inner join place_info as B on A.userId = B.userId order by id desc`;
        db.query(allPlacesGetQuery, (err, results) => {
          if (err) throw err;
          callback(err, results);
        });
    }
  },
  create: {
    post: function (data, callback) {
      var query = `insert into place_info (userId, title, menu, price, comment, heartCount) values (?,?,?,?,?,0)`;
      db.query(query, data, (err, results) => {
        if (err) throw err;
        callback(err, results);
      });
    }
  },
};
