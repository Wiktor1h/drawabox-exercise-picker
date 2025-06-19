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
function pickWeightedRandomExercise() {
  const pool = exercises
    .filter(ex => ex.enabled)
    .flatMap(ex => Array(ex.weight).fill(ex));

  if (pool.length === 0) {
    alert("No exercises enabled!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

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
document.getElementById("settingsButton").addEventListener("click", () => {
  const settingsList = document.getElementById("exerciseSettingsList");
  settingsList.innerHTML = ""; // Clear list

  exercises.forEach((ex, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${ex.name}</strong><br>
      <label>
        <input type="checkbox" ${ex.enabled ? "checked" : ""} 
               onchange="toggleExercise(${index})">
        Enabled
      </label>
      <br>
      <label>
        Rarity: 
        <input type="range" min="1" max="5" value="${ex.weight}" 
               onchange="changeWeight(${index}, this.value)">
        (${ex.weight})
      </label>
    `;

    settingsList.appendChild(li);
  });

  document.getElementById("settingsMenu").classList.remove("hidden");
});

function closeSettings() {
  document.getElementById("settingsMenu").classList.add("hidden");
}

function toggleExercise(index) {
  exercises[index].enabled = !exercises[index].enabled;
}

function changeWeight(index, newWeight) {
  exercises[index].weight = parseInt(newWeight);
}
