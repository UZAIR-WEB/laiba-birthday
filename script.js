const giftBtn = document.getElementById("giftBtn");
const birthdayPage = document.getElementById("birthdayPage");
const surpriseBtn = document.getElementById("surpriseBtn");
const finalPage = document.getElementById("finalPage");
const music = document.getElementById("music");

// Gift Click
giftBtn.addEventListener("click", () => {

    // Play music if available
    if (music) {
        music.play().catch(() => {});
    }

    // Confetti
    if (typeof confetti === "function") {
        confetti({
            particleCount: 300,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

    // Hide first page
    document.querySelector(".container").style.display = "none";

    // Show birthday page
    birthdayPage.style.display = "block";
});

// Final Surprise
surpriseBtn.addEventListener("click", () => {

    if (typeof confetti === "function") {

        const duration = 5000;
        const end = Date.now() + duration;

        const interval = setInterval(() => {

            confetti({
                particleCount: 15,
                spread: 120,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.2
                }
            });

            if (Date.now() > end) {
                clearInterval(interval);
            }

        }, 250);
    }

    birthdayPage.style.display = "none";
    finalPage.style.display = "flex";
});
