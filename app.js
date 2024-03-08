const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");


app.use(express.json())
app.use(express.urlencoded({extended:true}))


const adminRoute = require("./route/adminRouter")
const userRoute = require('./route/userRouter')


adminRoute.set("views", path.join(__dirname, "view/admin"));
adminRoute.set("view engine", "hbs");
adminRoute.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "adminLayout",
    layoutsDir: __dirname + "/view/Layout",
    partialsDir: __dirname + "/view/partials",
  })
);


userRoute.set("views", path.join(__dirname, "view/user"));
userRoute.set("view engine", "hbs");
userRoute.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "userLayout",
    layoutsDir: __dirname + "/view/Layout",
    partialsDir: __dirname + "/view/partials",
  })
);

adminRoute.use(express.static(path.join(__dirname, "public/admin")));
app.use(express.static(path.join(__dirname, "public/admin")));

userRoute.use(express.static(path.join(__dirname, "public/user")));
app.use(express.static(path.join(__dirname, "public/user")));


app.use('/admin', adminRoute)
app.use('/',userRoute)

mongoose.connect('mongodb://127.0.0.1:27017/salaryManagementSystem').then(()=>console.log('Database Connection Established')).catch((err)=>console.log(err.message))

app.listen(5000,()=>console.log('server listening on port'+5000));
