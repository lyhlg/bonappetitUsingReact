var mysql = require('mysql');

var con = mysql.createConnection({
        host: '162.243.137.152',
        user: 'root',
        password: 'admin',
        database: 'bonappetit'
});

con.connect((err) => {
        if (err) {
                console.error('error conneting GGabis...');
                return;
        };
        console.log('connected !!!!!!!! GOOD JOB ');
});

module.exports = con;
