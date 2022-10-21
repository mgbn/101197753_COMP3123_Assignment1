const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
const userRouter = require('./routes/UserRoutes.js');

var cors = require('cors')

const DB_PORT = 8082


const app = express();
app.use(express.json()); // Make sure it comes back as json
app.use(cors())

//TODO - Replace you Connection String here

mongoose.connect('mongodb+srv://Mustafa:m1g2b3n4@cluster0.zf9udrk.mongodb.net/db_full?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
// mongoose.connect('mongodb://localhost:27017/myapp');


app.use(employeeRouter);

app.use(userRouter);



app.listen(DB_PORT, () =>
{ console.log('Server is running http://localhost:8082/') })