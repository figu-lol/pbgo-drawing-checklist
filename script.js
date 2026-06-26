let currentCountry = "";

// Load saved data
let completed = JSON.parse(localStorage.getItem("completedCountries")) || [];

// Elements
const spinButton = document.getElementById("spinButton");
const completeButton = document.getElementById("completeButton");
const countryText = document.getElementById("country");
const list = document.getElementById("list");
const progress = document.getElementById("progress");

// Progress bar (we will add it in HTML)
const progressBar = document.getElementById("bar");

// Get remaining countries
function getRemainingCountries() {
    return countries.filter(c => !completed.includes(c));
}

// Update UI
function updateUI() {
    list.innerHTML = "";

    completed.forEach(country => {
        const li = document.createElement("li");
        li.textContent = "✔ " + country;
        list.appendChild(li);
    });

    const percent = Math.round((completed.length / countries.length) * 100);

    progress.textContent = `${completed.length} / ${countries.length} completed`;

    if (progressBar) {
        progressBar.style.width = percent + "%";
    }

    // ALL DONE SCREEN
    if (completed.length === countries.length) {
        countryText.textContent = "🏁 ALL COUNTRIES COMPLETED!";
    }
}

// Spin (NO REPEATS)
spinButton.addEventListener("click", () => {
    const remaining = getRemainingCountries();

    if (remaining.length === 0) {
        countryText.textContent = "🏁 Everything completed!";
        return;
    }

    const index = Math.floor(Math.random() * remaining.length);
    currentCountry = remaining[index];

    countryText.textContent = currentCountry;
});

// Complete
completeButton.addEventListener("click", () => {
    if (!currentCountry) return;

    if (!completed.includes(currentCountry)) {
        completed.push(currentCountry);
        localStorage.setItem("completedCountries", JSON.stringify(completed));
    }

    updateUI();
});

// Start
updateUI();
