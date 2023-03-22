import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
  // simple query

  // let data = [];
  // connection.query("SELECT * FROM `users`", function (err, results, fields) {
  //   data = results.map((row) => row);

  //   return res.render("index.ejs", {
  //     dataUser: data,
  //   });
  // });

  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.render("index.ejs", {
    dataUser: rows,
  });
};

let getDetailPage = async (req, res) => {
  let userID = req.params.userID;
  let [rows, fields] = await pool.execute(
    "SELECT * FROM users WHERE userID = ?",
    [userID]
  );
  return res.send(JSON.stringify(rows));
};

module.exports = {
  getHomepage,
  getDetailPage,
};
