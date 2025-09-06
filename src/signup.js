document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("https://skillforge-api-4tme.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    if (res.ok) {
      alert("Account created successfully! Please login.");
      window.location.href = "login.html"; 
    } else {
      alert("Signup failed. Try again.");
    }
  } catch (err) {
    console.error(err);
    alert("Server error.");
  }
});
