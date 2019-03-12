const express = require('express');
const bodyParser = require('body-parser');

const employee = require('./routes/employee.route');
const app = express();

const mongoose = require('mongoose');
let databaseUrl = 'mongodb://localhost:27017/employee';
const mongoDB = process.env.MONGODB_URI || databaseUrl;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/employees', employee);

let port = 2020;

app.listen(port, () => {
    console.log('Server is up and running on localhost:' + port);
});