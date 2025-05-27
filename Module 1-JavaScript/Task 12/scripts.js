document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const event = document.getElementById("event").value;

  const responseMsg = document.getElementById("responseMsg");
  responseMsg.textContent = "Registering...";
  responseMsg.className = "message";

  const data = {
    name,
    email,
    event
  };

  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((result) => {
      responseMsg.textContent = "Registration successful!";
      responseMsg.classList.add("success");
      document.getElementById("registrationForm").reset();
    })
    .catch((error) => {
      responseMsg.textContent = "Registration failed. Please try again.";
      responseMsg.classList.add("error");
    });
  }, 2000); 
});
