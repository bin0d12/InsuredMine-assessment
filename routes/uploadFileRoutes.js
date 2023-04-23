const multer = require("multer");
const express = require("express");
const router = require("express").Router();
const app = express();
const storage = multer;
const path = require("path");
const bodyParser = require("body-parser");
const fileUploadController = require("../controller/uploadController");

app.use(bodyParser.urlencoded({ extended: true }));

// this is for destination
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./demoFile");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
//   destination end

// this is for storing the file in folder
const upload = multer({ storage: fileStorage });
// this is end for storing the file in folder

// this is creating for controller
router.post(
  "/single",
  upload.single("upload"),
  fileUploadController.uploadFileFun
);

module.exports = router;
