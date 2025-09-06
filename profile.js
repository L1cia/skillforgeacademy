
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userAvatar = document.getElementById("userAvatar");

fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    const user = data.results[0];
    userName.textContent = `${user.name.first} ${user.name.last}`;
    userEmail.textContent = user.email;
    userAvatar.src = user.picture.large;
  })
  .catch(err => {
    userName.textContent = "Failed to load user";
    console.error("Profile API Error:", err);
  });
