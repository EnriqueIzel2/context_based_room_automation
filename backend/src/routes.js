const express = require('express');
const router = express.Router();

const ProfessorController = require('./controllers/Professor');
const CalendarController = require('./controllers/Calendar');
const LocationController = require('./controllers/Location');

router.get('/calendar/:id-:date', ProfessorController.calendar);
router.post('/calendar/cancel/:calendarId', CalendarController.cancelClass);
router.get('/location/:lat-:long', LocationController.inEST);

module.exports = router;