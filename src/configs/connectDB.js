// get the client
import mysql from "mysql2";
import mysqlPromise from "mysql2/promise";

// create the connection to database
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "testdb",
// });

// create the connection to database (pool)
const pool = mysqlPromise.createPool({
  host: "localhost",
  user: "root",
  database: "crud",
  password: "hungpro9x",
});

// export default connection;
export default pool;
