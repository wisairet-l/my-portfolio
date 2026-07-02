window.addEventListener("load", () => {

    /* =========================
       🌸 INTRO SYSTEM (SAFE FADE)
    ========================= */

    const intro = document.getElementById("intro");
    const app = document.getElementById("app");

    if (intro) {
        setTimeout(() => {
            intro.style.opacity = "0";

            setTimeout(() => {
                intro.remove();

                if (app) {
                    app.style.opacity = "1";
                }

            }, 900);

        }, 3000);
    }

    /* =========================
       🌸 CARD ANIMATION SYSTEM
    ========================= */

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";

        setTimeout(() => {

            card.style.transition = "0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 70);

    });

});

/* =========================
   🌸 MUSIC SYSTEM (NO ERROR)
========================= */

const music = document.getElementById("music");
const btn = document.getElementById("music-btn");

let isPlaying = false;

if (music && btn) {

    btn.addEventListener("click", () => {

        if (!isPlaying) {

            music.volume = 0.4;

            music.play().catch(() => {
                // prevents autoplay crash
            });

            btn.innerText = "⏸ Pause";
            isPlaying = true;

        } else {

            music.pause();
            btn.innerText = "🎵 Music";
            isPlaying = false;

        }

    });

}

/* =========================
   🌸 EXTRA SAFETY (OPTIONAL UX)
========================= */

// Prevent broken links weird behavior
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        // smooth UX hook (future upgrade)
    });
});