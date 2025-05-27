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

events.forEach((event, index) => {
  console.log(`Event ${index + 1}:`);
  for (const [key, value] of Object.entries(event)) {
    console.log(`${key}: ${value}`);
  }
  console.log('Seats Available:', event.checkAvailability() ? 'Yes' : 'No');
  console.log('----------------------------');
});
