import eventData from '../../src/data/events.json' assert { type: "json" };
import NotFoundError from '../../errors/notFoundError.js';

const deleteEvent = (id) => {
  const index = eventData.events.findIndex((event) => event.id === id);

  if (index === -1) { // findIndex function returns -1 if index is not found
    throw new NotFoundError('Event', id);
  }

  eventData.events.splice(index, 1); // 1 = delete count, 1 item
  return id;
};

export default deleteEvent;
