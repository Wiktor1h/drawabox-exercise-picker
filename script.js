// Example exercise pool
const exercises = [
  { name: "Lines", lesson: 1, image: "images/lines.png" },
  { name: "Ellipses", lesson: 1, image: "images/ellipses.png" },
  { name: "Boxes", lesson: 2, image: "images/boxes.png" },
  { name: "Organic Forms", lesson: 3, image: "images/organic-forms.png" },
  { name: "Texture Analysis", lesson: 4, image: "images/texture-analysis.png" },
  { name: "Form Intersections", lesson: 5, image: "images/form-intersections.png" },
  { name: "Object Construction", lesson: 6, image: "images/object-construction.png" },
  { name: "Invented Forms", lesson: 7, image: "images/invented-forms.png" }
];

// Display a random exercise from enabled lessons
function pickRandomExercise() {
  const lessonLevel = parseInt(document.getElementById("lessonInput").value);

  const pool = exercises.filter(ex => ex.lesson <= lessonLevel);
  if (pool.length === 0) {
    displayExercise({ name: "No exercises available", image: "" });
    return;
  }

  const randomExercise = pool[Math.floor(Math.random() * pool.length)];
  displayExercise(randomExercise);
}

// Show exercise details in the DOM
function displayExercise(ex) {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <div class="exercise-name">${ex.name}</div>
    ${ex.image ? `<img src="${ex.image}" alt="${ex.name}">` : ""}
    <button onclick="pickRandomExercise()">Pick Another</button>
  `;
}

// Event listener for lesson input change
document.getElementById("lessonInput").addEventListener("change", pickRandomExercise);

// Initialize with a random exercise from lesson 1
pickRandomExercise();
