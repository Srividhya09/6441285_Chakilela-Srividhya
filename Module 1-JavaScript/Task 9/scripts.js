const container = document.getElementById("eventContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchBox = document.getElementById("searchBox");
const spinner = document.getElementById("spinner");

let events = [];

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
    applyFilters(); // update UI
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

function fetchWithThen() {
  spinner.style.display = "block";
  fetch("https://mocki.io/v1/5f30f8d4-3ed1-456a-b6e6-32d81609be3b") // mock JSON endpoint
    .then(response => response.json())
    .then(data => {
      events = data;
      spinner.style.display = "none";
      applyFilters();
    })
    .catch(error => {
      spinner.innerText = "Failed to load events.";
      console.error("Error fetching events:", error);
    });
}

async function fetchEvents() {
  try {
    spinner.style.display = "block";
    const response = await fetch("https://mocki.io/v1/5f30f8d4-3ed1-456a-b6e6-32d81609be3b"); // same mock
    if (!response.ok) throw new Error("Network error");
    const data = await response.json();
    events = data;
    spinner.style.display = "none";
    applyFilters();
  } catch (error) {
    spinner.innerText = "Error loading data.";
    console.error(error);
  }
}

fetchEvents();
