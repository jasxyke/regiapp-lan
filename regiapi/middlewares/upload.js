const util = require("util");
const path = require("path");
const multer = require("multer");
const courseModel = require("../models/courses");
var courses = null;

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //console.log(req)
    callback(null, path.join(`${__dirname}/../../digitized/${req.body.year}`));
  },
  filename: async (req, file, callback) => {
    const match = ["image/png", "image/jpeg", "application/pdf"];
    if (courses === null) {
      courses = await courseModel.all();
    }

    if (match.indexOf(file.mimetype) === -1) {
      var message = "Invalid file type";
      return callback(message, null);
    }

    let course = courses.find((course) => {
      return course.id == req.body.course_id;
    });
    var filename = `${req.body.year}-${course.shortname}-${file.originalname}`;
    callback(null, filename);
  },
});

var uploadFiles = multer({ storage: storage }).array("documents", 10);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
