var db = require('../db');

module.exports = {

  myplaces: {
    get: function (token, callback) {
      let myPlacesGetQuery = `select B.id, A.userId, A.userName, A.gmailAccount, A.thumbnail, B.title, B.menu, B.price, B.comment from users_new as A inner join place_info_new as B on A.userId = B.userId where A.userId = '${token}' order by id desc`;
        db.query(myPlacesGetQuery, (err, results) => {
          if (err) throw err;
          callback(err, results);
        });
    }
  },

  allplaces: {
    get: function (callback) {
        let allPlacesGetQuery = `select B.id, A.userId, A.userName, A.gmailAccount, A.thumbnail, B.title, B.menu, B.price, B.comment from users_new as A inner join place_info_new as B on A.userId = B.userId order by id desc`;
        db.query(allPlacesGetQuery, (err, results) => {
          if (err) throw err;
          console.log( "allplacesGET", results);
          callback(err, results);
        });
    }
  },

  usercreate: {
    post: function(data, callback) {
      let dupUserChkQuery = `SELECT * FROM users_new WHERE userId='${data[0]}'`;
      let userCreateQuery =`insert into users_new(userId, userName, gmailAccount, thumbnail) values (?,?,?,?)`;
      db.query (dupUserChkQuery, [data[0]], (err,results) =>{
        if ( err ) throw err;
        if ( results.length ) {
          callback(err, results);
        } else{
          db.query (userCreateQuery, data, (err, results) =>{
            if(err) throw err;
            callback(err, results);
          });
        }
      });
    }
  },

  create: {
    post: function (data, callback) {
      var query = `insert into place_info_new (userId, title, menu, price, comment) values (?,?,?,?,?)`;
      db.query(query, data, (err, results) => {
        if (err) throw err;
        callback(err, results);
      });
    }
  }
};
