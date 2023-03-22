const masterlist = require("../models/masterlist");
const upload = require("../middlewares/upload");
const httpErr = require("http-errors");
const path = require("path");
const { unlink } = require("fs/promises");

class MasterlistController {
  static async index(req, res) {
    try {
      res.send(await masterlist.all());
    } catch (err) {
      res.send(httpErr(500, "Error on getting the masterlist"));
    }
  }

  static async store(req, res) {
    try {
      await upload(req, res);

      if (req.files.length <= 0) {
        return res.send(httpErr(400, "You must upload atleast 1 file"));
      }

      let documents = [];
      let year = req.body.year;
      let course_id = req.body.course_id;
      let files = req.files;

      files.forEach((file) => {
        let fullname = path.parse(file.originalname).name;
        documents.push([fullname, year, course_id]);
      });

      if (!(await masterlist.isDocsUnique(documents))) {
        return res.status(422).send({ message: "Duplicate name detected" });
      }
      console.log("why");
      let msg = await masterlist.addMany(documents);
      return res.send("Files have been uploaded");
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }

  static async show(req, res) {
    try {
      //TODO: RETURN ONE RECORD IN THE MASTERLIST
    } catch (error) {
      res.send(error);
    }
  }

  static async update(req, res) {
    try {
      var record = {
        id: req.params.id,
        fullname: req.body.fullname,
        course_id: req.body.course_id,
        year: req.body.year,
      };

      let id = await masterlist.update(record);
      //let record = await masterlist.findOne(id)

      res.send(record);
    } catch (error) {
      res.send(error);
    }
  }

  static async delete(req, res) {
    try {
      console.log(req.params.id);
      let record = await masterlist.findOne(req.params.id);
      console.log(record);
      if (record === undefined) {
        return res.status(404).send("Record not found");
      }
      await unlink(
        path.join(
          `${__dirname}/../../digitized/${record.year}`,
          `${record.year}-${record.shortname}-${record.fullname}.pdf`
        )
      );
      await masterlist.delete(req.params.id);
      res.send("Successfully deleted");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = MasterlistController;
