const express = require('express');
const router = express.Router();

const employee_controller = require('../controllers/employee.controller');

router.get('/test', employee_controller.test);
router.get('/', employee_controller.employee_all);
router.get('/:id', employee_controller.employee_details);

router.post('/', employee_controller.employee_add);
router.delete('/:id', employee_controller.employee_delete);
router.put('/:id', employee_controller.employee_update);
module.exports = router;