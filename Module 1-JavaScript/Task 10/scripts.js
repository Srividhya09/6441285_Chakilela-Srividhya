const container = document.getElementById("eventContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchBox = document.getElementById("searchBox");
const spinner = document.getElementById("spinner");

let events = [];
const renderEvents = (filteredEvents = []) => {
  container.innerHTML = "";
  filteredEvents.forEach(({ name, category, date, seats }, index) => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <h3>${name}</h3>
      <p>Category: ${category}</p>
      <p>Date: ${date}</p>
      <p>Seats Available: ${seats}</p>
      <button onclick="register(${index})" ${seats === 0 ? "disabled" : ""}>Register</button>
    `;
    container.appendChild(card);
  });
};

const register = (index) => {
  let { seats } = events[index];
  if (seats > 0) {
    events[index].seats -= 1;
    applyFilters();
  }
};

const applyFilters = () => {
  const selectedCategory = categoryFilter.value;
  const searchTerm = searchBox.value.toLowerCase();

  const clonedEvents = [...events]; // avoid mutating original

  const filtered = clonedEvents.filter(({ category, name }) => {
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;
    const matchesSearch = name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  renderEvents(filtered);
};

categoryFilter.onchange = applyFilters;
searchBox.addEventListener("keydown", applyFilters);

const fetchEvents = async () => {
  try {
    spinner.style.display = "block";
    const response = await fetch("https://mocki.io/v1/5f30f8d4-3ed1-456a-b6e6-32d81609be3b");
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    events = data;
    spinner.style.display = "none";
    applyFilters();
  } catch (err) {
    spinner.innerText = "Error loading events.";
    console.error(err);
  }
};

fetchEvents();
