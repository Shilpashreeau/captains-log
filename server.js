require("dotenv").config();

const express=require("express");
const connectToDB=require("./config/database");


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
   * New route /new
   */

app.get("/new",(req,res)=>{

res.render('New');
})
/**
 * /create route
 */

app.post("/logs",(req,res)=>{
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
      } else {
        req.body.shipIsBroken = false;
      }
    res.send(req.body);
})

app.listen(PORT,()=>{

console.log("Server is running");
connectToDB();
})