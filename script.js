const lessons = [
  {
    name: "Lesson 1: Lines & Ellipses",
    enabled: true,
    exercises: [
      {
        name: "Superimposed Lines",
        image: "images/superimposed_lines.jpg",
        description: "Draw straight lines confidently from one point to another."
      },
      {
        name: "Ghosted Lines",
        image: "images/ghosted_lines.jpg",
        description: "Practice ghosting lines and executing them confidently."
      }
    ]
  },
  {
    name: "Lesson 2: Boxes",
    enabled: false,
    exercises: [
      {
        name: "Rough Perspective",
        image: "images/rough_perspective.jpg",
        description: "Draw boxes in rough perspective aligned to a vanishing point."
      },
      {
        name: "Rotated Boxes",
        image: "images/rotated_boxes.jpg",
        description: "Practice rotating boxes while keeping edges aligned."
      }
    ]
  }
  // Add more lessons here...
];

function pickRandomExercise() {
  const enabledLessons = lessons.filter(lesson => lesson.enabled);
  if (enabledLessons.length === 0) {
    alert("Please enable at least one lesson.");
    return;
  }

  const lesson = enabledLessons[Math.floor(Math.random() * enabledLessons.length)];
  const exercise = lesson.exercises[Math.floor(Math.random() * lesson.exercises.length)];

  document.getElementById("exerciseName").textContent = exercise.name;
  document.getElementById("exerciseDescription").textContent = exercise.description;
  const image = document.getElementById("exerciseImage");
  image.src = exercise.image;
  image.alt = exercise.name;
  image.classList.remove("hidden");
}

// Settings menu logic
document.getElementById("settingsButton").addEventListener("click", () => {
  const settingsList = document.getElementById("exerciseSettingsList");
  settingsList.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${lesson.name}</strong><br>
      <label>
        <input type="checkbox" ${lesson.enabled ? "checked" : ""} 
               onchange="toggleLesson(${index})">
        Enabled
      </label>
    `;
    settingsList.appendChild(li);
  });

  document.getElementById("settingsMenu").classList.toggle("hidden");
});

function toggleLesson(index) {
  lessons[index].enabled = !lessons[index].enabled;
}
