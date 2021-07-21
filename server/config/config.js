import mysql from 'mysql';

//local mysql db connection
export const dbConn = mysql.createConnection({
  host     : 'sql6.freemysqlhosting.net',
  user     : 'sql6426831',
  password : 'MSzmseBmFh',
  database : 'sql6426831'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
