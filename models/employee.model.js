const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    name: {type: String, required: true, max: 50},
    address: {type: String, required: true, max: 200},
    phone: {type: Number, required: true},
});

module.exports = mongoose.model('Employee', EmployeeSchema);