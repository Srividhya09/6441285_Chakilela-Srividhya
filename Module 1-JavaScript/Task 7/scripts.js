const events = [
  { name: "Yoga Session", date: "2025-06-10", location: "Hall A", seats: 3 },
  { name: "Music Fest", date: "2025-06-15", location: "Main Ground", seats: 0 },
  { name: "Coding Bootcamp", date: "2025-06-20", location: "Room 301", seats: 5 },
];

const container = document.querySelector('#eventContainer');

function renderEvents() {
  container.innerHTML = ''; // Clear existing
  events.forEach((event, index) => {
    const card = document.createElement('div');
    card.className = 'event-card';

    const title = document.createElement('h3');
    title.textContent = event.name;

    const date = document.createElement('p');
    date.textContent = `Date: ${event.date}`;

    const location = document.createElement('p');
    location.textContent = `Location: ${event.location}`;

    const seats = document.createElement('p');
    seats.textContent = `Available Seats: ${event.seats}`;

    const registerBtn = document.createElement('button');
    registerBtn.textContent = 'Register';
    registerBtn.disabled = event.seats === 0;

    registerBtn.addEventListener('click', () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents();
      }
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel');

    cancelBtn.addEventListener('click', () => {
      event.seats++;
      renderEvents();
    });

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(location);
    card.appendChild(seats);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);

    container.appendChild(card);
  });
}

renderEvents();
