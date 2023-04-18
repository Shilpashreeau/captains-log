require("dotenv").config();

const express = require("express");
const connectToDB = require("./config/database");
const Log = require("./models/logs");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//*  setting the views
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* body parser
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

/**
 * /create route
 */
/**
 * Index Route (return a list of logs)
 */
app.get("/logs", (req, res) => {
  Log.find({}, (error, allLogs) => {
    //  res.send("index");
    res.render("Index", { logs: allLogs }); //{} empty objects retrieves all the data from db
  });
});

app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  // res.send(req.body);
  Log.create(req.body, (error, createdLog) => {
    // res.send(createdFruit);

    res.redirect("/logs"); 
  });
});

/**
 * New route logs/new
 */

app.get("/logs/new", (req, res) => {
  res.render("New");
});
// Return the edit form
app.get("/logs/:id/edit", (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    if (!error) {
      res.render("Edit", { logs: foundLog });
    } else {
      res.send({ msg: error.message });
    }
  });
});

//====Handle the edit form data=====
app.put("/logs/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error) => {
      // res.send(updatedLog);
      res.redirect(`/logs/${req.params.id}`);
    }
  );
});

//*Seed Route
app.get("/logs/seed", (req, res) => {
  Log.create(
    [
      {
        title: "Caribbean",
        entry: "Runs weekly once",
        shipIsBroken: true,
      },
      {
        title: "Pirate",
        entry: "Never runs",
        shipIsBroken: false,
      },
    ],
    (err, data) => {
      res.redirect("/logs");
    }
  );
});
/**
 * Show Route:(returns a single log)
 */
app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (error, foundLogs) => {
    //  res.send("Show");
    res.render("Show", { logs: foundLogs });
  });
});
// DELETE log
app.delete("/logs/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (error, deletedLog) => {
    res.redirect("/logs");
  });
});

app.listen(PORT, () => {
  console.log("Server is running");
  connectToDB();
});
