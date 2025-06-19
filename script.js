const exercises = [
  {
    name: "Push-ups",
    description: "A basic upper body exercise to strengthen chest and triceps.",
    details: "Do 3 sets of 15 reps."
  },
  {
    name: "Plank",
    description: "Core strengthening exercise.",
    details: "Hold for 60 seconds."
  },
  {
    name: "Jumping Jacks",
    description: "Full-body cardio exercise.",
    details: "Do 3 sets of 30 reps."
  },
  // Add more exercises here
];

document.getElementById("pickButton").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * exercises.length);
  const exercise = exercises[randomIndex];

  document.getElementById("exerciseName").textContent = exercise.name;
  document.getElementById("exerciseDescription").textContent = exercise.description;
  document.getElementById("exerciseDetails").textContent = exercise.details;

  document.getElementById("exerciseDisplay").classList.remove("hidden");
});
