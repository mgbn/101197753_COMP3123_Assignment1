const express = require('express');
const User = require('../models/User');
const userModel = require('../models/User');
const app = express();


//Create New user
/*
    //Sample Input as JSON
    //application/json as Body
    {
      "username": "Mustafa",
      "email": "xyz@xyzmail.com",
      "password":"123"
    }
*/

app.post('/api/user/signup', async (req, res) => {
 
  //res.send({message: "Hello world"})

  try {
    const newUser = new userModel(req.body);
    const user = await newUser.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err);
  }


});


//
app.post('/api/user/login', async (req, res) => {
 const username = req.body.username;
 const password = req.body.password;

 User.findOne({username: username, password: password}, function(err, user){
  if(err){
    return res.status(500).send(user);
  }
  if(!user){
    return res.status(404).send();
  }
  return res.status(200).send(user);
 })
 
});



module.exports = app
