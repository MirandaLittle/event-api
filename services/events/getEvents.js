import eventData from '../../src/data/events.json' assert { type: "json" };

const getEvents = (title) => {
  let events = eventData.events;

  if (title) {
    events = events.filter(event => event.title === title);
  }
  return events;
}

export default getEvents;