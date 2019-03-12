const Employee = require('../models/employee.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.employee_details = function (req, res){
    Employee.findById(req.param.id, function(err, employee){
        if(err) return next(err);
        res.send(employee);
    })
};

exports.employee_all = function (req, res){
    Employee.find( function(err, employee){
        if(err) return next(err);
        res.status(200).json(employee);
    })
};

exports.employee_add = function(req, res){
    let employee = new Employee()
}