import pool from "../configs/connectDB";

let getALLUser = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json({
      message: "missing required params",
    });
  }
  await pool.execute(
    "INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.status(200).json({
    message: "ok",
  });
};

let editUser = async (req, res) => {
  let { userID, firstName, lastName, email, address } = req.body;
  if (!userID || !firstName || !lastName || !email || !address) {
    return res.status(200).json({
      message: "missing required params",
    });
  }
  await pool.execute(
    "UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE userID = ?",
    [firstName, lastName, email, address, userID]
  );
  return res.status(200).json({
    message: "ok",
  });
};

let deleteUser = async (req, res) => {
  let userID = req.params.userID;
  if (!userID) {
    return res.status(200).json({
      message: "missing required params",
    });
  }
  await pool.execute("DELETE FROM users WHERE userID = ?", [userID]);
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = { getALLUser, createNewUser, editUser, deleteUser };
