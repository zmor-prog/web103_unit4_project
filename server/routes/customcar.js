import express from 'express'
// Import data from DB
import customcarController from '../controllers/customcarController.js'

const EventRouter= express.Router();
// Get all events
EventRouter.get('/', customcarController.getCustomCar);
// Get specific event by ID
EventRouter.get('/:carID',customcarController.getCustomCarById);
// Create new event
EventRouter.post('/', customcarController.createCustomCar);
// Edit (update) an event by ID
EventRouter.put('/:carID', customcarController.updateCustomCar);
//Delete an event by ID
EventRouter.put('/:carID', customcarController.deleteCustomCar);
console.log('Router exported')
export default EventRouter;