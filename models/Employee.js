const mongoose = require('mongoose');

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};


const EmployeeSchema = new mongoose.Schema({

  first_name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  salary: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
  }


});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;