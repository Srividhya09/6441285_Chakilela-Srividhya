const events = [
  { name: "Yoga Workshop", date: "2025-06-05", seats: 0, location: "Community Hall A" },
  { name: "Art Exhibition", date: "2025-06-12", seats: 10, location: "Gallery 3" },
  { name: "Clean-up Drive", date: "2025-06-20", seats: 30, location: "City Park" },
  { name: "Past Event", date: "2024-05-01", seats: 15, location: "Old Hall" }
];

function isUpcoming(eventDate) {
  const today = new Date();
  const eventD = new Date(eventDate);
  return eventD >= today;
}

const eventsContainer = document.getElementById("events-container");

function displayValidEvents() {
  eventsContainer.innerHTML = ""; // Clear container

  // Filter events: upcoming and seats > 0
  const validEvents = events.filter(event => isUpcoming(event.date) && event.seats > 0);

  if (validEvents.length === 0) {
    eventsContainer.innerHTML = "<p>No upcoming events with available seats.</p>";
    return;
  }

  validEvents.forEach((event, index) => {
    // Create elements
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h2>${event.name}</h2>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p><strong>Seats Available:</strong> <span id="seats-${index}">${event.seats}</span></p>
      <button class="register-btn" id="register-${index}">Register</button>
      <p class="message" id="msg-${index}"></p>
    `;

    eventsContainer.appendChild(card);

    // Add event listener to Register button
    document.getElementById(`register-${index}`).addEventListener("click", () => {
      try {
        registerUser(index);
      } catch (error) {
        document.getElementById(`msg-${index}`).textContent = "Error: " + error.message;
      }
    });
  });
}

function registerUser(index) {
  const event = events[index];
  const seatsSpan = document.getElementById(`seats-${index}`);
  const messagePara = document.getElementById(`msg-${index}`);

  if (!event) throw new Error("Event not found.");

  if (event.seats <= 0) {
    messagePara.textContent = "Sorry, no seats available.";
    return;
  }

  // Decrement seats
  event.seats--;
  seatsSpan.textContent = event.seats;

  messagePara.textContent = "Registration successful!";
}

displayValidEvents();
