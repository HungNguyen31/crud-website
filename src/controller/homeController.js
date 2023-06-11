import bodyParser from "body-parser";
import connection from "../configs/connectDB";
import pool from "../configs/connectDB";
import multer from "multer";
import bcryct from "bcrypt";
import { createTokens } from "./JWTController";
import { render } from "ejs";

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
    dataUserSelected: {},
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

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  await pool.execute("ALTER TABLE users AUTO_INCREMENT = 1");
  await pool.execute(
    "INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let userID = req.body.userID;
  await pool.execute("DELETE FROM users WHERE userID = ?", [userID]);
  return res.redirect("/");
};

let getEditUser = async (req, res) => {
  let userID = req.params.userID;
  let [userInformation] = await pool.execute(
    "SELECT * FROM users WHERE userID = ?",
    [userID]
  );

  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.render("editUser.ejs", {
    dataUser: rows,
    dataUserSelected: userInformation[0],
  });
};

let postEditUser = async (req, res) => {
  let { userID, firstName, lastName, email, address } = req.body;
  await pool.execute(
    "UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE userID = ?",
    [firstName, lastName, email, address, userID]
  );
  return res.redirect("/");
};

let getUploadFilePage = (req, res) => {
  return res.render("uploadFile.ejs");
};

//upload single file
const uploadSingleFile = multer().single("single-file-input");

let handleUploadSingleFile = async (req, res) => {
  uploadSingleFile(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err.message);
    }
    res.send(
      `<h1 style="text-align:center">You have uploaded this image:</h1> <hr/><img src="/images/${req.file.filename}" width="300"><hr/><a href="/upload-file">Upload another image</a>`
    );
  });
};

//upload multiple file
const uploadMultipleFiles = multer().single("multiple-files-input");

let handleUploadMultipleFiles = async (req, res) => {
  uploadMultipleFiles(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (Object.keys(req.files).length === 0) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err.message);
    }

    let result = `<h1 style="text-align:center">You have uploaded these images:</h1> <hr />`;
    const files = req.files;
    let index, len;

    for (index = 0, len = files.length; index < len; ++index) {
      result += `<img src="/images/${files[index].filename}" width="300" style="margin-right: 20px;">`;
    }
    result += '<hr/><a href="/upload-file">Upload more images</a>';
    res.send(result);
  });
};

let getLoginPage = async (req, res) => {
  return res.render("login.ejs", { messages: req.flash() });
};
let getRegisterPage = async (req, res) => {
  return res.render("register.ejs", { messages: req.flash() });
};

let registerUser = async (req, res) => {
  const { userName, password } = req.body;
  if (userName && password) {
    var datetime =
      new Date().toISOString().slice(0, 10) +
      " " +
      new Date().toLocaleTimeString("en-GB");

    await pool.execute("ALTER TABLE users_acc AUTO_INCREMENT = 1");

    await bcryct.hash(password, 10).then((hash) => {
      // pool.users_acc
      //   .create({
      //     userName: userName,
      //     password: hash,
      //   })

      pool
        .execute(
          "INSERT INTO users_acc (userName, password, createdAt, updatedAt) VALUES (?, ?, ?, ?)",
          [userName, hash, datetime, datetime]
          // "ALTER TABLE users_acc AUTO_INCREMENT = 1"
        )
        .then(() => {
          // res.json("USER REGISTERED");
          res.redirect("/login");
        })
        .catch((err) => {
          if (err) {
            if (err.code === "ER_DUP_ENTRY" && err.errno === 1062) {
              req.flash("error", "User already exists!");
              res.redirect("/register");
            } else {
              req.flash("error", err.message);
              res.redirect("/register");
            }
          }
          // res.status(400).json({ error: err });
        });
    });
  } else {
    res.redirect("/register");
  }
};
let loginUser = async (req, res) => {
  const { userName, password } = req.body;
  if (userName && password) {
    const user = await pool.execute(
      "SELECT * FROM users_acc WHERE userName = ?",
      [userName]
    );

    // console.log(user[0][0].password);

    if (Object.keys(user[0]).length === 0) {
      // res.status(400).json({ error: "User Doesn't Exist" });
      req.flash("error", "User doesn't exist!");
      res.redirect("/login");
    } else {
      const dbPassword = user[0][0].password;

      bcryct.compare(password, dbPassword).then((match) => {
        if (!match) {
          req.flash("error", "Wrong username and password combination!");
          res.redirect("/login");
          // res
          //   .status(400)
          //   .json({ error: "Wrong Username and Password Combination!" });
        } else {
          const accessToken = createTokens(user);
          res.cookie("access-token", accessToken, {
            maxAge: 60 * 60 * 24 * 30 * 1000,
            httpOnly: true,
          });

          // res.json("Logged In");
          res.redirect("/");
        }
      });
    }
  } else {
    res.redirect("/login");
  }
};

let logoutUser = (req, res) => {
  res.cookie("access-token", "", {
    maxAge: 1,
  });
  res.redirect("/");
};

let getProfile = (req, res) => {
  res.json("Only after logging in will I see this line");
};

module.exports = {
  getHomepage,
  getDetailPage,
  createNewUser,
  deleteUser,
  getEditUser,
  postEditUser,
  getUploadFilePage,
  handleUploadSingleFile,
  handleUploadMultipleFiles,
  getLoginPage,
  getRegisterPage,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
};
