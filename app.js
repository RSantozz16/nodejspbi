const express = require('express');
const bodyParser = require('body-parser');

const employee = require('./routes/employee.route');
const app = express();

app.use('/employees', employee);

let port = 2020;

app.listen(port, () => {
    console.log('Server is up and running on localhost:' + port);
});