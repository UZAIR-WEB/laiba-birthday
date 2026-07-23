document.addEventListener("DOMContentLoaded", () => {

    const giftBtn = document.getElementById("giftBtn");
    const container = document.querySelector(".container");
    const birthdayPage = document.getElementById("birthdayPage");
    const surpriseBtn = document.getElementById("surpriseBtn");
    const finalPage = document.getElementById("finalPage");

    if (!giftBtn) {
        alert("Gift button not found!");
        return;
    }

    giftBtn.addEventListener("click", function () {

        if (typeof confetti === "function") {
            confetti({
                particleCount: 250,
                spread: 180
            });
        }

        if (container) container.style.display = "none";
        if (birthdayPage) birthdayPage.style.display = "block";
    });

    if (surpriseBtn) {
        surpriseBtn.addEventListener("click", function () {

            if (birthdayPage) birthdayPage.style.display = "none";

            if (finalPage) {
                finalPage.style.display = "flex";
            }
        });
    }

});
