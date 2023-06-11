import express from "express";
import homeController from "../controller/homeController";
import { validateToken } from "../controller/JWTController";
import {
  validateFiles,
  uploadSingleFile,
} from "../controller/uploadFilesController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/detail/user/:userID", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/get-edit-user/:userID", homeController.getEditUser);
  router.post("/post-edit-user", homeController.postEditUser);
  router.get("/upload-file", homeController.getUploadFilePage);
  router.get("/login", homeController.getLoginPage);
  router.get("/register", homeController.getRegisterPage);
  router.get("/profile", validateToken, homeController.getProfile);
  router.post("/register", homeController.registerUser);
  router.post("/login", homeController.loginUser);
  router.get("/logout", homeController.logoutUser);
  router.post(
    "/upload-single-file",
    uploadSingleFile,
    homeController.handleUploadSingleFile
  );
  router.post(
    "/upload-multiple-files",
    validateFiles,
    homeController.handleUploadMultipleFiles
  );

  router.get("/about", (req, res) => {
    res.send("huen5");
  });

  return app.use("/", router);
};

export default initWebRoute;
