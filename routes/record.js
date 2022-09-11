const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This API end point will help you get a list of all the about section data.
recordRoutes.route("/aboutdata").get(function (req, res) {
  let db_connect = dbo.getDb();

  db_connect
    .collection("about")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This API end point will help you get a list of all the work section data.
recordRoutes.route("/workdata").get(function (req, res) {
  let db_connect = dbo.getDb();

  db_connect
    .collection("work")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This API end point will help you get a list of all the skill section data.
recordRoutes.route("/skillsdata").get(function (req, res) {
  let db_connect = dbo.getDb();

  db_connect
    .collection("skills")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This API end point will help you get a list of all the experience section data.
recordRoutes.route("/experiences").get(function (req, res) {
  let db_connect = dbo.getDb();

  db_connect
    .collection("experiences")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This API end point will help you get a list of all the testimonial data.
recordRoutes.route("/testimonialsdata").get(function (req, res) {
  let db_connect = dbo.getDb();

  db_connect
    .collection("testimonials")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This API end point will help you insert the contact section's form data into db.
recordRoutes.route("/addContactData").post(function (req, res) {
  let db_connect = dbo.getDb();

  let myObj = {
    username: req.body.username,
    email: req.body.email,
    message: req.body.message,
  };
  db_connect.collection("contacts").insertOne(myObj, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});


// This API end point will help you get custom data from the database.
recordRoutes.route("/customdata").post(function (req, res) {
  let db_connect = dbo.getDb();
  console.log(db_connect)

  db_connect
  .collection("custom")
  .find({})
  .toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });

  console.log(res);
});

module.exports = recordRoutes;