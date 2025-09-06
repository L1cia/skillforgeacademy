
const assignmentsList = document.getElementById("assignmentsList");
git
fetch("https://skillforge-api-4tme.onrender.com/assignments")
  .then(res => res.json())
  .then(data => {
    assignmentsList.innerHTML = data
      .map(task => `
        <li class="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <span class="${task.completed ? "line-through text-gray-500" : ""}">
            ${task.title}
          </span>
          <span class="px-3 py-1 rounded-full text-xs ${
            task.completed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
          }">
            ${task.completed ? "Completed" : "Pending"}
          </span>
        </li>
      `)
      .join("");
  })
  .catch(err => {
    assignmentsList.innerHTML = `<p class="text-red-500">Failed to load assignments.</p>`;
    console.error("Assignments API Error:", err);
  });
