import express from 'express';
import getEvents from '../services/events/getEvents.js';
import getEventById from '../services/events/getEventById.js';
import updateEventById from '../services/events/updateEventById.js';
import createEvent from '../services/events/createEvent.js';
import deleteEvent from '../services/events/deleteEvent.js';
import authMiddleware from '../middleware/auth.js';
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js';

const router = express.Router();

router.get('/', (req, res) => {
    try {
      const { title } = req.query
      const events = getEvents(title)
      res.status(200).json(events)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong while getting list of events!')
    }
  })

  router.get('/:id', (req, res) => {
    const { id } = req.params 
    const event = getEventById(id)
    res.status(200).json(event)
    }, notFoundErrorHandler);


  router.post('/', authMiddleware, (req, res) => {
    try {
      const { createdBy, title, description, image, categoryIds, location, startTime, endTime } = req.body // request body
      const newEvent = createEvent(createdBy, title, description, image, categoryIds, location, startTime, endTime)
      res.status(201).json(newEvent) 
      
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong while creating new event!')
    }
  })

  router.put('/:id', authMiddleware, (req, res) => {
    // try {
      const { id } = req.params
      const { createdBy, title, description, image, categoryIds, location, startTime, endTime } = req.body
      const updatedEvent = updateEventById(id, createdBy, title, description, image, categoryIds, location, startTime, endTime)
      res.status(200).json({
        message: `The following event was updated ${updatedEvent}`})
}, notFoundErrorHandler);

router.delete('/:id', authMiddleware, (req, res) => {
    const { id } = req.params;
    const deletedEventId = deleteEvent(id);
      res.status(200).json({
        message: `Event with id ${deletedEventId} was deleted!`,
      });
    }, notFoundErrorHandler);

  export default router;
