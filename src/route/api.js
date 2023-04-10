import express from "express";
import apiController from "../controller/apiController";

let router = express.Router();

const initAPIRouter = (app) => {
  router.get("/users", apiController.getALLUser);
  router.post("/create-new-user", apiController.createNewUser);
  router.put("/edit-user", apiController.editUser);
  router.delete("/delete-user/:userID", apiController.deleteUser);
  return app.use("/api/v1", router);
};

export default initAPIRouter;
