document.getElementById("toggleSchedule").addEventListener("click", function() {
  const schedule = document.getElementById("schedule");
  schedule.classList.toggle("hidden");

  if (schedule.classList.contains("hidden")) {
    this.textContent = "View Schedule";
  } else {
    this.textContent = "Hide Schedule";
  }
});

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Registration Successful! Thank you for joining GDG Tech Conference 2025.");
  this.reset();
});
