
    const observers = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = entry.target.getAttribute("style")?.split("animation-delay:")[1] || "0s";
          entry.target.classList.add('animate');
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.2 });
    observers.forEach(el => observer.observe(el));

      
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
