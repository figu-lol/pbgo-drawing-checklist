let currentCountry = "";

// Load saved completed countries (or empty list)
let completed = JSON.parse(localStorage.getItem("completedCountries")) || [];

// Elements
const spinButton = document.getElementById("spinButton");
const countryText = document.getElementById("country");
const completeButton = document.getElementById("completeButton");

// Spin button
spinButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    currentCountry = countries[randomIndex];

    countryText.textContent = currentCountry;

    // show if already done
    if (completed.includes(currentCountry)) {
        countryText.textContent += " ✔ (already completed)";
    }
});

// Complete button
completeButton.addEventListener("click", () => {
    if (!currentCountry) return;

    if (!completed.includes(currentCountry)) {
        completed.push(currentCountry);
        localStorage.setItem("completedCountries", JSON.stringify(completed));
    }

    alert(currentCountry + " saved as completed!");
});
