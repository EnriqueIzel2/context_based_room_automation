const express = require('express');
const router = express.Router();

const ProfessorController = require('./controllers/Professor');
const CalendarController = require('./controllers/Calendar');

router.get('/calendar/:id-:date', ProfessorController.calendar);
router.post('/calendar/cancel/:calendarId', CalendarController.cancelClass);

module.exports = router;