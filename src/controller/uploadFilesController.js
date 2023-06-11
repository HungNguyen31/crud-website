import multer from "multer";
import appRoot from "app-root-path";
import path from "path";

//store files
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

//validate files
const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|webp)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    console.log("sai dinh dang");
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

//update single file
let upload = multer({ storage: storage, fileFilter: imageFilter });

let uploadSingleFile = upload.single("single-file-input");

//update multi files
let uploadMultipleFiles = multer({
  storage: storage,
  fileFilter: imageFilter,
}).array("multiple-files-input", 5);

let validateFiles = (req, res, next) => {
  uploadMultipleFiles(req, res, (err) => {
    if (
      err instanceof multer.MulterError &&
      err.code === "LIMIT_UNEXPECTED_FILE"
    ) {
      res.send("Limit unexpected file!");
      // res.send(err.message);
    } else if (err) {
      res.send(err.message);
    } else {
      next();
    }
  });
};

module.exports = { validateFiles, uploadSingleFile };
