window.addEventListener("load", () => {

  const intro = document.getElementById("intro");
  const site = document.getElementById("site");

  // 🌸 بعد از 3 ثانیه Intro محو میشه
  setTimeout(() => {
    intro.style.opacity = "0";

    // بعد از محو شدن کامل
    setTimeout(() => {
      intro.style.display = "none";
      site.style.display = "block";

      // ورود نرم سایت
      site.style.opacity = "0";
      site.style.transition = "opacity 1s ease";
      
      setTimeout(() => {
        site.style.opacity = "1";
      }, 50);

    }, 1000);

  }, 3000);

});

// 🌸 Explore button animation
function explore() {
  const hero = document.querySelector(".hero");

  hero.style.transform = "scale(0.95)";
  hero.style.transition = "0.3s";

  setTimeout(() => {
    hero.style.transform = "scale(1)";
  }, 300);
}