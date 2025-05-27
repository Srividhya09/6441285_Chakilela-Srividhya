document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Form submission started.");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const event = document.getElementById("event").value;

  console.log("Captured Inputs:", { name, email, event });

  const responseMsg = document.getElementById("responseMsg");
  responseMsg.textContent = "Registering...";
  responseMsg.className = "message";

  if (!name || !email || !event) {
    console.error("Validation failed: missing fields");
    responseMsg.textContent = "All fields are required.";
    responseMsg.classList.add("error");
    return;
  }

  const data = { name, email, event };

  console.log("Prepared payload for POST:", data);

  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        console.log("Fetch response status:", res.status);
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((result) => {
        console.log("Success response data:", result);
        responseMsg.textContent = "Registration successful!";
        responseMsg.classList.add("success");
        document.getElementById("registrationForm").reset();
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
        responseMsg.textContent = "Registration failed. Please try again.";
        responseMsg.classList.add("error");
      });
  }, 1000);
});
