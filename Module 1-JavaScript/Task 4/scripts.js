const events = [
  { name: "Yoga Workshop", date: "2025-06-05", seats: 5, location: "Community Hall A", category: "Health" },
  { name: "Art Exhibition", date: "2025-06-12", seats: 10, location: "Gallery 3", category: "Art" },
  { name: "Clean-up Drive", date: "2025-06-20", seats: 30, location: "City Park", category: "Environment" },
  { name: "Photography Contest", date: "2025-07-01", seats: 15, location: "Community Center", category: "Art" }
];
function registrationTracker() {
  const registrations = {};

  return {
    increment: (category) => {
      registrations[category] = (registrations[category] || 0) + 1;
    },
    getTotal: (category) => registrations[category] || 0,
    getAll: () => ({ ...registrations })
  };
}

const tracker = registrationTracker();

function isUpcoming(eventDate) {
  return new Date(eventDate) >= new Date();
}

function addEvent(event) {
  // Validate event has all required fields
  if (!event.name || !event.date || event.seats == null || !event.location || !event.category) {
    throw new Error("Invalid event object");
  }
  events.push(event);
}

function registerUser(index) {
  const event = events[index];
  if (!event) throw new Error("Event not found");
  if (event.seats <= 0) throw new Error("No seats available");

  event.seats--;
  tracker.increment(event.category);
  return `Registered for ${event.name}. Total registrations in ${event.category}: ${tracker.getTotal(event.category)}`;
}

function filterEventsByCategory(filterCallback) {
  return events.filter(event => isUpcoming(event.date) && filterCallback(event));
}

function filterByCategoryName(categoryName) {
  return filterEventsByCategory(event => event.category === categoryName);
}

function displayEvents(filteredEvents) {
  console.clear();
  filteredEvents.forEach((event, index) => {
    console.log(`${index + 1}. ${event.name} (${event.category}) - ${event.date}, Seats: ${event.seats}`);
  });
}

try {
  addEvent({ name: "Music Festival", date: "2025-07-10", seats: 50, location: "Town Square", category: "Music" });
} catch (err) {
  console.error(err.message);
}

const artEvents = filterByCategoryName("Art");
displayEvents(artEvents);

try {
  const msg = registerUser(events.indexOf(artEvents[0]));
  console.log(msg);
} catch (err) {
  console.error(err.message);
}
console.log("Registrations per category:", tracker.getAll());
