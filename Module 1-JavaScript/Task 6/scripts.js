class Event {
  constructor(name, date, location, category, seats) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.category = category;
    this.seats = seats;
  }

  checkAvailability() {
    return this.seats > 0;
  }
}

const events = [
  new Event("Yoga Workshop", "2025-06-05", "Community Hall A", "Health", 10),
  new Event("Art Exhibition", "2025-06-12", "Gallery 3", "Art", 0),
  new Event("Clean-up Drive", "2025-06-20", "City Park", "Environment", 5),
];

function addEvent(name, date, location, category, seats) {
  const newEvent = new Event(name, date, location, category, seats);
  events.push(newEvent);
}

addEvent("Live Jazz Night", "2025-07-15", "Downtown Club", "Music", 30);
addEvent("Rock Concert", "2025-07-20", "Open Grounds", "Music", 50);


const musicEvents = events.filter(event => event.category === "Music");


const displayCards = musicEvents.map(event => `${event.name} on ${event.date}`);

console.log("All Events:");
events.forEach(ev => console.log(`${ev.name} - ${ev.category}`));

console.log("\nMusic Events:");
console.log(musicEvents);

console.log("\nFormatted Display Cards for Music Events:");
displayCards.forEach(card => console.log(card));
