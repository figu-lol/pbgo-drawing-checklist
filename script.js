let currentCountry = "";

// Load saved data
let completed = JSON.parse(localStorage.getItem("completedCountries")) || [];

// Elements
const spinButton = document.getElementById("spinButton");
const completeButton = document.getElementById("completeButton");
const countryText = document.getElementById("country");
const list = document.getElementById("list");
const progress = document.getElementById("progress");

// Update UI
function updateUI() {
    list.innerHTML = "";

    completed.forEach(country => {
        const li = document.createElement("li");
        li.textContent = "✔ " + country;
        list.appendChild(li);
    });

    progress.textContent = `${completed.length} / ${countries.length} completed`;
}

// Spin random country
spinButton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * countries.length);
    currentCountry = countries[index];

    countryText.textContent = currentCountry;

    if (completed.includes(currentCountry)) {
        countryText.textContent += " ✔ already done";
    }
});

// Mark as completed
completeButton.addEventListener("click", () => {
    if (!currentCountry) return;

    if (!completed.includes(currentCountry)) {
        completed.push(currentCountry);
        localStorage.setItem("completedCountries", JSON.stringify(completed));
    }

    updateUI();
});

// First load
updateUI();
