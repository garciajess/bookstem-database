var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_hawkinma',
  password        : '677820',
  database        : 'cs340_hawkinma'
});

module.exports.pool = pool;
