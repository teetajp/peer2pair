var mysql = require("mysql2");

var useLocalDB = process.env.DB_CONNECTION === "local";
var db = mysql.createConnection({
  host: useLocalDB ? process.env.LOCAL_DB_HOST : process.env.CLOUD_DB_HOST,
  user: useLocalDB ? process.env.LOCAL_DB_USER : process.env.CLOUD_DB_USER,
  password: useLocalDB
    ? process.env.LOCAL_DB_PASSWORD
    : process.env.CLOUD_DB_PASSWORD,
  database: useLocalDB ? process.env.LOCAL_DB_NAME : process.env.CLOUD_DB_NAME,
});
db.connect;

module.exports = db;
