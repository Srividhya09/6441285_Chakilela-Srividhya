const eventName = "Clean-up Drive";
const eventDate = "2025-06-20";

let availableSeats = 30;

const eventDetailsDiv = document.getElementById("event-details");
const messagePara = document.getElementById("message");
const registerBtn = document.getElementById("register-btn");

function showEventInfo() {
  eventDetailsDiv.innerHTML = `
    <h2>${eventName}</h2>
    <p>Date: ${eventDate}</p>
    <p>Available Seats: <span id="seats-count">${availableSeats}</span></p>
  `;
}

function registerUser() {
  if (availableSeats > 0) {
    availableSeats--; // decrement seat count on registration
    document.getElementById("seats-count").textContent = availableSeats;
    messagePara.textContent = "Registration successful!";
  } else {
    messagePara.textContent = "Sorry, no seats available.";
  }
}

showEventInfo();

// Register button click event
registerBtn.addEventListener("click", registerUser);
