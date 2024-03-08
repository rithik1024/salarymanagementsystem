const express = require("express");
const route = express();
const adminController = require("../controllers/adminController");

route.get("/", adminController.loadDashboard);

route.get("/addEmploye", adminController.loadAddEmployee);

route.get("/employeeDetails", adminController.loadEmployeeDetails);

route.get("/addDepartment", adminController.loadAddDepartment);

route.get("/about", adminController.loadAbout);


// post 

route.post('/addEmployee',adminController.addEmployee,adminController.loadAddEmployee)

module.exports = route;