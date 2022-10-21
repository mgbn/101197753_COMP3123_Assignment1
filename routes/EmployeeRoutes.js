const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//Read ALL
app.get('/api/emp/employees', async (req, res) => {
  const employees = await employeeModel.find({});


  try {
    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Create New Record
/*
    //Sample Input as JSON
    //application/json as Body
    {
      
      "first_name": "Mustafa",
      "last_name": "izci",
      "email": "mmmm@hotmail.com",
      "gender":"male",
      "salary":"34400"
    }
*/
app.post('/api/emp/employees', async (req, res) => {
  const employee = new employeeModel(req.body);

  try {
    await employee.save();
    res.status(201).send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Get employee by id
app.get('/api/emp/employees/:id', async (req, res) => {
  const idfind = req.params.id
  console.log(idfind)

  const employees = await employeeModel.findById(idfind);

  try {
    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Update Record
app.put('/api/emp/employees/:id', async (req, res) => {
  try {
    await employeeModel.findByIdAndUpdate(req.params.id, req.body)
    await employeeModel.save()
    res.status(200).send(employee)
  } catch (err) {
    res.status(500).send(err)
  }
})




//Delete Record
//localhost:8081/employee/5d1f6c3e4b0b88fb1d257237
app.delete('/api/emp/employees/:id', async (req, res) => {
  try {
    const employee = await employeeModel.findByIdAndDelete(req.params.id)

    if (!employee) res.status(404).send("No item found")
    res.status(204).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app