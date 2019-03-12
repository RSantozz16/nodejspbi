const express = require('express');
const router = express.Router();

const employee_controller = require('../controllers/employee.controller');

router.get('/test', employee_controller.test);
module.exports = router;