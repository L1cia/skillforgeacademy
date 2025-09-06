document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch(`${API_BASE}/courses`);
    const data = await res.json();

    const courseList = document.getElementById("coursesGrid");
    courseList.innerHTML = "";

    data.forEach(course => {
      const card = document.createElement("div");
      card.className = "p-6 bg-white shadow rounded-lg hover:shadow-xl transition";
      card.innerHTML = `
        <img src="${course.image}" alt="${course.title}" class="w-full h-40 object-cover rounded-md mb-4">
        <h3 class="text-xl font-semibold text-purple-700">${course.title}</h3>
        <p class="text-gray-600 mt-2">${course.description}</p>
      `;
      courseList.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching courses:", err);
  }
});
