let exercises = [
  {
    name: "Push-ups",
    description: "A basic upper body exercise.",
    details: "Do 3 sets of 15 reps.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Push_up.gif",
    enabled: true,
    weight: 1
  },
  {
    name: "Plank",
    description: "Core strengthening exercise.",
    details: "Hold for 60 seconds.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Plank_%28exercise%29.gif",
    enabled: true,
    weight: 1
  },
  {
    name: "Jumping Jacks",
    description: "Full-body cardio exercise.",
    details: "Do 3 sets of 30 reps.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Jumping_Jacks.gif",
    enabled: true,
    weight: 1
  }
];

// Pick a random exercise based on weights
function pickWeightedRandomExercise() {
  const pool = exercises
    .filter(ex => ex.enabled)
    .flatMap(ex => Array(ex.weight).fill(ex));

  if (pool.length === 0) {
    alert("No exercises enabled!");
    return null;
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

// Event: Pick button
document.getElementById("pickButton").addEventListener("click", () => {
  const exercise = pickWeightedRandomExercise();
  if (!exercise) return;

  document.getElementById("exerciseName").textContent = exercise.name;
  document.getElementById("exerciseDescription").textContent = exercise.description;
  document.getElementById("exerciseDetails").textContent = exercise.details;
  document.getElementById("exerciseImage").src = exercise.image;
  document.getElementById("exerciseImage").alt = exercise.name;

  document.getElementById("exerciseDisplay").classList.remove("hidden");
});

// Event: Settings toggle button
document.getElementById("settingsButton").addEventListener("click", () => {
  const menu = document.getElementById("settingsMenu");

  // Toggle visibility
  if (menu.classList.contains("hidden")) {
    buildSettingsMenu();
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

// Build the settings menu dynamically
function buildSettingsMenu() {
  const settingsList = document.getElementById("exerciseSettingsList");
  settingsList.innerHTML = "";

  exercises.forEach((ex, index) => {
    const li = document.createElement("li");

    const name = document.createElement("strong");
    name.textContent = ex.name;
    li.appendChild(name);
    li.appendChild(document.createElement("br"));

    // Enabled checkbox
    const checkboxLabel = document.createElement("label");
    checkboxLabel.textContent = " Enabled: ";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = ex.enabled;
    checkbox.addEventListener("change", () => {
      exercises[index].enabled = checkbox.checked;
    });

    checkboxLabel.prepend(checkbox);
    li.appendChild(checkboxLabel);
    li.appendChild(document.createElement("br"));

    // Rarity slider
    const sliderLabel = document.createElement("label");
    sliderLabel.textContent = " Rarity: ";

    const range = document.createElement("input");
    range.type = "range";
    range.min = 1;
    range.max = 5;
    range.value = ex.weight;

    const weightText = document.createElement("span");
    weightText.textContent = ` (${ex.weight})`;

    range.addEventListener("input", () => {
      exercises[index].weight = parseInt(range.value);
      weightText.textContent = ` (${range.value})`;
    });

    sliderLabel.appendChild(range);
    sliderLabel.appendChild(weightText);
    li.appendChild(sliderLabel);

    settingsList.appendChild(li);
  });
}
