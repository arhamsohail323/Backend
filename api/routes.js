const express = require('express');
const appointmentController = require('../controller/appointment.controller');

const router = express.Router()

router.get('/getAppointment', appointmentController.getAppointmentById)
router.post('/setAppointment', appointmentController.createAppointment)
router.get('/getAllAppointment', appointmentController.getAllAppointment)


module.exports = router