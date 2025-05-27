const events = [
  { name: "Yoga for Beginners", category: "Yoga", date: "2025-06-10", seats: 5 },
  { name: "Live Music Night", category: "Music", date: "2025-06-12", seats: 2 },
  { name: "JavaScript Bootcamp", category: "Coding", date: "2025-06-15", seats: 0 },
  { name: "Meditation Workshop", category: "Yoga", date: "2025-06-20", seats: 4 },
];

const container = document.getElementById("eventContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchBox = document.getElementById("searchBox");

function renderEvents(filteredEvents) {
  container.innerHTML = "";
  filteredEvents.forEach((event, index) => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Date: ${event.date}</p>
      <p>Seats Available: ${event.seats}</p>
      <button onclick="register(${index})" ${event.seats === 0 ? "disabled" : ""}>Register</button>
    `;

    container.appendChild(card);
  });
}

function register(index) {
  if (events[index].seats > 0) {
    events[index].seats--;
    applyFilters(); // re-render
  }
}

function applyFilters() {
  const selectedCategory = categoryFilter.value;
  const searchTerm = searchBox.value.toLowerCase();

  const filtered = events.filter(event => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  renderEvents(filtered);
}

categoryFilter.onchange = () => applyFilters();

searchBox.addEventListener("keydown", () => applyFilters());

renderEvents(events);
