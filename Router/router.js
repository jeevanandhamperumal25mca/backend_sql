const express = require('express');
const router = express.Router();

const studentController = require('../Controller/controller');
const logger = require('../Middleware/middleware');

router.get('/students', logger, studentController.getStudents);
router.post('/students', logger, studentController.addStudent);

module.exports = router;
