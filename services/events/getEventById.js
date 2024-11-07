import eventData from '../../src/data/events.json' assert { type: "json" };
import NotFoundError from '../../errors/notFoundError.js';

const getEventById = (id) => {

  const event = eventData.events.find(event => event.id === id);
  if (!event) {
    throw new NotFoundError('Event', id);
  }
  return event
}

export default getEventById;