document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch(`${API_BASE}/assignments`);
    const assignments = await res.json();

    const list = document.getElementById("assignments");
    list.innerHTML = "";

    assignments.forEach(item => {
      const li = document.createElement("li");
      li.className =
        "p-4 mb-3 bg-white shadow rounded-lg hover:shadow-xl transition";
      li.innerHTML = `
        <h3 class="text-lg font-bold text-purple-700">${item.title}</h3>
        <p class="text-gray-600 mt-1">${item.description}</p>
      `;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching assignments:", err);
  }
});
