const express = require('express');
const router = express.Router();

const ProfessorController = require('./controllers/Professor');

router.get('/calendar/:id-:date', ProfessorController.calendar);

module.exports = router;