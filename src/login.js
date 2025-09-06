document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const res = await fetch(`${API_BASE}/users`);
    if (!res.ok) throw new Error("API not reachable");

    const users = await res.json();

  
    if (!Array.isArray(users)) {
      alert("Unexpected API response. Check db.json format.");
      return;
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("authToken", "dummy-token-123");
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "dashboard.html"; 
    } else {
      alert("Invalid email or password.");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Server error. Please try again later.");
  }
});
