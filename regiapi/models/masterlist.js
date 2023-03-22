const pool = require("../database/connection");
const httpErr = require("http-errors");

function createErr(err) {
  return httpErr(500, err);
}

class Masterlist {
  constructor() {}

  static all() {
    return new Promise((resolve, reject) => {
      let sql =
        "SELECT masterlist.*, courses.name AS course, courses.shortname AS acronym FROM masterlist " +
        "JOIN courses ON masterlist.course_id = courses.id";
      pool.query(sql, (err, result) => {
        if (err) return reject(createErr(err));
        console.log("Getting ditized masterlist...");
        resolve(result);
      });
    });
  }

  static findOne(id) {
    return new Promise((resolve, reject) => {
      let sql =
        "SELECT masterlist.*, courses.name AS course, courses.shortname " +
        "FROM masterlist " +
        "JOIN courses ON masterlist.course_id = courses.id " +
        "WHERE masterlist.id=?";
      pool.query(sql, [id], (err, result) => {
        if (err) return reject(createErr(err));
        console.log("finding one document");
        console.log(result[0]);
        return resolve(result[0]);
      });
    });
  }

  static isDocsUnique(documents) {
    let names = documents.map((document) => document[0]);
    console.log(names);
    return new Promise((resolve, reject) => {
      let sql = "SELECT id FROM masterlist WHERE fullname IN (?)";
      pool.query(sql, [names], (err, result) => {
        if (err) return reject(createErr(err));
        console.log("Checking if names are unique");
        console.log(`Is unique: ${!(result.length > 0)}`);
        resolve(!(result.length > 0));
      });
    });
  }

  static addMany(documents) {
    return new Promise((resolve, reject) => {
      let sql = "INSERT INTO masterlist(fullname, year, course_id) VALUES ?";
      pool.query(sql, [documents], (err, result) => {
        if (err) return reject(createErr(err));
        console.log("Adding documents...");
        return resolve(`Added ${result.affectedRows} records`);
      });
    });
  }

  static update(record) {
    return new Promise((resolve, reject) => {
      let sql =
        "UPDATE masterlist" +
        "SET fullname=?, course_id=?, year=?" +
        "WHERE id=?";
      pool.query(
        sql,
        [record.fullname, record.course_id, record.year, record.id],
        (err, result) => {
          if (err) reject(createErr(err));
          console.log("Updating the document...");
          return resolve(record.id);
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      let sql = "DELETE FROM masterlist WHERE id=?";
      pool.query(sql, [id], (err, result) => {
        if (err) reject(createErr(err));
        console.log("Deleted one record");
        return resolve("");
      });
    });
  }

  static isUnique(fullname) {
    return new Promise((resolve, reject) => {
      let sql = "SELECT COUNT(id) WHERE fullname=?";
      pool.query(sql, [fullname], (err, result) => {
        if (err) reject(createErr(err));
        console.log("checking if record is unique...");
        return resolve(result.length === 0);
      });
    });
  }
}

module.exports = Masterlist;
