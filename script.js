const exercises = [
  {
    name: "Push-ups",
    description: "A basic upper body exercise to strengthen chest and triceps.",
    details: "Do 3 sets of 15 reps.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Push_up.gif"
  },
  {
    name: "Plank",
    description: "Core strengthening exercise.",
    details: "Hold for 60 seconds.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Plank_%28exercise%29.gif"
  },
  {
    name: "Jumping Jacks",
    description: "Full-body cardio exercise.",
    details: "Do 3 sets of 30 reps.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Jumping_Jacks.gif"
  }
  // Add more with appropriate images
];

document.getElementById("pickButton").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * exercises.length);
  const exercise = exercises[randomIndex];

  document.getElementById("exerciseName").textContent = exercise.name;
  document.getElementById("exerciseDescription").textContent = exercise.description;
  document.getElementById("exerciseDetails").textContent = exercise.details;
  document.getElementById("exerciseImage").src = exercise.image;
  document.getElementById("exerciseImage").alt = exercise.name;

  document.getElementById("exerciseDisplay").classList.remove("hidden");
});
