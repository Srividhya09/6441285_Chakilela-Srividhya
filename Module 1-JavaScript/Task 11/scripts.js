document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const event = form.elements["event"].value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("eventError").textContent = "";

    let hasError = false;
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      hasError = true;
    }
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      hasError = true;
    }

    if (event === "") {
      document.getElementById("eventError").textContent = "Please select an event.";
      hasError = true;
    }

    if (!hasError) {
      alert(`Registration successful!\n\nName: ${name}\nEmail: ${email}\nEvent: ${event}`);
      form.reset();
    }
  });
});
