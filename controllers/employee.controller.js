const Employee = require('../models/employee.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.employee_details = function (req, res) {
    Employee.findById(req.params.id, function (err, employee) {
      if (err) return next(err);
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
    let employee = new Employee(
        {
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone
        }
    );

    employee.save(function(err){
        if(err){
            return next(err);
        }
        res.status(200).json(employee);
    })
};

exports.employee_delete = function (req, res) {
    Employee.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.status(200).json({});
    })
};

exports.employee_update = function (req, res) {
    Employee.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, employee) {
      if (err) return next(err);
      res.status(200).json(employee);
    });
};