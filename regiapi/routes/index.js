var express = require("express");
var router = express.Router();
const indexController = require("../controllers/IndexController");
const masterlistController = require("../controllers/MasterlistController");
const CourseController = require("../controllers/CourseController");

//get masterlist excel file
router.get("/excel-masterlist", indexController.excel);

//get the masterlist
router.get("/masterlist", masterlistController.index);
//add to masterlist and save uploaded documents
router.post("/add-document", masterlistController.store);
//show one record
//    TODO: implement show one record, to be skipped for now

//update one record in the masterlist
router.put("/masterlist/:id", masterlistController.update);

//delete one record in the masterlist
router.delete("/masterlist/:id", masterlistController.delete);

//courses routes

//get all courses
router.get("/courses", CourseController.index);

module.exports = router;
