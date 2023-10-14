import express from 'express'
// Import data from DB
import customcarController from '../controllers/customcarController.js'

const EventRouter= express.Router();
// Get all events
EventRouter.get('/', customcarController.getEvents);
// Get specific event by ID
EventRouter.get('/:carID',customcarController.getEventsById);
// Create new event
EventRouter.post('/', customcarController.createEvent);
// Edit (update) an event by ID
EventRouter.put('/:carID', customcarController.updateEvent);
//Delete an event by ID
EventRouter.put('/:carID', customcarController.deleteEvent);
console.log('Router exported')
export default EventRouter;