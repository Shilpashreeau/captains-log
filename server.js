require("dotenv").config();

const express=require("express");
const connectToDB=require("./config/database");
const Log=require("./models/logs");
const mongoose=require('mongoose');
const app=express();
const PORT=3000;

//*  setting the views
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* body parser
app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });
  app.use(express.urlencoded({ extended: false }));





/**
 * /create route
 */
  /**
 * Index Route (return a list of logs)
 */
  app.get("/logs", (req, res) => {

    Log.find({},(error,allLogs)=>{
    res.render('Index',{logs:allLogs})//{} empty objects retrieves all the data from db
    })
  });

app.post("/logs",(req,res)=>{
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
      } else {
        req.body.shipIsBroken = false;
      }
    // res.send(req.body);
    Log.create(req.body, (error,createdLog)=>{
      // res.send(createdFruit);
    
      res.redirect('/logs');//allows the user to navigate to new end point here its /fruits
    
    })
})

  /**
   * New route logs/new
   */

  app.get("/logs/new",(req,res)=>{

    res.render('New');
    })

app.listen(PORT,()=>{

console.log("Server is running");
connectToDB();
})