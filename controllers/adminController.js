const Employee = require("../models/Employee");

const loadDashboard = async (req, res) => {
  res.render("dashboard");
};

const loadAddEmployee = async (req, res) => {
  res.render("addEmployee");
};

const loadEmployeeDetails = async (req, res) => {
  res.render("employeeDetails");
};

const loadAddDepartment = async (req, res) => {
  res.render("addDepartment");
};

const loadAbout = async (req, res) => {
  res.render("about");
};

// const addEmployee = (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       address,
//       salary,
//       mobile,
//       pin,
//       state,
//       country,
//       birthday,
//       organization,
//       tag,
//     } = req.body;

//     const newEmployee = new Employee({
//       name,
//       email,
//       address,
//       salary,
//       mobile,
//       pin,
//       state,
//       country,
//       birthday,
//       organization,
//       tag,
//     //   image:req.file.filename
//     });

//     newEmployee.save().then((employee)=>console.log(employee)).catch((err)=>console.log(err))
//     res.redirect(`/viewEmployeeDetails?${newEmployee._id}`)



//   } catch (error) {}
// };

const addEmployee = async (req,res,next) => {
  try {
    // const images = req.files
    console.log(req.body.name);    

    const employee = new Employee({
      name:req.body.name,
      salary: req.body.salary,
      email: req.body.email,
      mobile: req.body.mobile,
      address: req.body.address,
      pin:req.body.pin,
      state:req.body.state,
      country:req.body.country,
      birthday:req.body.birthday,
      organization:req.body.organization,      
      tag:req.body.tag,
    });

    await employee.save().then(() => console.log("Employee Saved"));

    next()
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  loadDashboard,
  loadAddEmployee,
  loadEmployeeDetails,
  loadAddDepartment,
  loadAbout,
  addEmployee
};
