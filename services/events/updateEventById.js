import eventData from '../../src/data/events.json' assert { type: "json" };
import NotFoundError from '../../errors/notFoundError.js';

const updateEventById = (id, createdBy, title, description, image, categoryIds, location, startTime, endTime) => {
  const event = eventData.events.find(event => event.id === id);

  if (!event) {
    throw new NotFoundError('Event', id);
  }

  event.createdBy = createdBy ?? event.createdBy; // The Nullish Coalescing Operator (??), if "title" is null or undefinced keep original user.title
  event.title = title ?? event.title;
  event.description = description ?? event.description;
  event.image = image ?? event.image;
  event.categoryIds = categoryIds ?? event.categoryIds;
  event.location = location ?? event.location;
  event.startTime = startTime ?? event.startTime;
  event.endTime = endTime ?? event.endTime;

  return event;
}

export default updateEventById;
