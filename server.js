require("dotenv").config();

const express=require("express");
const connectToDB=require("./config/database");


const app=express();
const PORT=3000;

//*  setting the middleware
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
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
 * GET /logs
 */

// app.get("/logs",(req,res)=>{

// })

app.listen(PORT,()=>{

console.log("Server is running");
connectToDB();
})