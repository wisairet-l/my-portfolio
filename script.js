window.addEventListener("load", () => {

  const intro = document.getElementById("intro");
  const site = document.getElementById("site");

  // 🌸 بعد از 3 ثانیه intro محو میشه
  setTimeout(() => {

    intro.style.opacity = "0";

    // بعد از کامل fade شدن
    setTimeout(() => {
      intro.style.display = "none";

      // سایت رو نشون بده
      site.style.display = "block";

      // ورود نرم
      setTimeout(() => {
        site.style.opacity = "1";
      }, 50);

    }, 1000);

  }, 3000);

});


// 🌸 Explore button animation
function explore() {
  const hero = document.querySelector(".hero");

  hero.style.transform = "scale(0.96)";
  hero.style.transition = "0.25s";

  setTimeout(() => {
    hero.style.transform = "scale(1)";
  }, 250);
}