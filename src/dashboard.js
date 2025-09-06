
fetch("https://skillforge-api-4tme.onrender.com/courses")
  .then(res => res.json())
  .then(data => {
    document.getElementById("courseCount").textContent = data.length;
  })
  .catch(err => console.error("Courses API Error:", err));

// Fetch Assignments Count (JSONPlaceholder)
fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  .then(res => res.json())
  .then(data => {
    document.getElementById("assignmentCount").textContent = data.length;
  })
  .catch(err => console.error("Assignments API Error:", err));

  
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');

    menuBtn?.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  


fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    const user = data.results[0];
    document.getElementById("userName").textContent =
      `${user.name.first} ${user.name.last}`;
  })
  .catch(err => console.error("Profile API Error:", err));
