import express from "express";
import homeController from "../controller/homeController";
import multer from "multer";
import path from "path";
import appRoot from "app-root-path";
import { validateToken } from "../controller/JWTController";
// var appRoot = require("app-root-path");

let router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/src/public/images/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|webp)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    console.log("sai dinh dang");
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });
let uploadMultipleFiles = multer({
  storage: storage,
  fileFilter: imageFilter,
}).array("multiple-files-input", 5);

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/detail/user/:userID", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/get-edit-user/:userID", homeController.getEditUser);
  router.post("/post-edit-user", homeController.postEditUser);
  router.get("/upload-file", homeController.getUploadFilePage);
  router.get("/login", homeController.getLoginPage);
  router.get("/profile", validateToken, homeController.getProfile);
  router.post("/register", homeController.registerUser);
  router.post("/login", homeController.loginUser);
  router.post(
    "/upload-single-file",
    upload.single("single-file-input"),
    homeController.handleUploadSingleFile
  );
  router.post(
    "/upload-multiple-files",
    (req, res, next) => {
      uploadMultipleFiles(req, res, (err) => {
        if (
          err instanceof multer.MulterError &&
          err.code === "LIMIT_UNEXPECTED_FILE"
        ) {
          res.send("LIMIT_UNEXPECTED_FILE");
          // res.send(err.message);
        } else if (err) {
          res.send(err.message);
        } else {
          next();
        }
      });
    },
    homeController.handleUploadMultipleFiles
  );

  router.get("/about", (req, res) => {
    res.send("hungdeptrai");
  });

  return app.use("/", router);
};

export default initWebRoute;
