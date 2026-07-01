const items = document.querySelectorAll(".reveal");

function show() {
  items.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", show);
window.addEventListener("load", show);