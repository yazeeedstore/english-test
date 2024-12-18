// JavaScript for calculating the score and redirecting
function calculateScore() {
  // Get the form and form data
  const form = document.getElementById("cefr-test");
  const answers = new FormData(form);
  let score = 0;

  // Hiding Submit button after Submit
  document.querySelector(".submit-btn").style.display = "none";

  // Scoring based on the answers (you can adjust the point values here as needed)
  const pointValues = {
    q1: 1,
    q2: 1,
    q3: 1,
    q4: 1,
    q5: 1,
    q6: 1,
    q7: 1,
    q8: 1,
    q9: 1,
    q10: 1,
    q11: 1,
    q12: 1,
    q13: 1,
    q14: 1,
    q15: 1
  };

  // Iterate over the answers and calculate the score
  for (let [question, value] of answers.entries()) {
    if (value == "1") {
      score += pointValues[question];
    }
  }

  // Calculate the points
  const points = score; // Use the score directly as points

  // Redirect based on the points
  let redirectUrl;
  let message;
  let instructionsMessage;

  if (points >= 0 && points <= 3) {
    redirectUrl =
      "https://yazeeed-store.com/PdbZbZB/?utm_source=aff&utm_campaign=UbeUI"; // A1 level
    message = "A1 مستواك";
    instructionsMessage = "سيتم تحويلك الى كتاب الانجليزية للمبتدئين";
  } else if (points >= 4 && points <= 6) {
    redirectUrl =
      "https://yazeeed-store.com/PdbZbZB/?utm_source=aff&utm_campaign=UbeUI"; // A2 level
    message = "A2 مستواك";
    instructionsMessage = "سيتم تحويلك الى كتاب الانجليزية للمبتدئين";
  } else if (points >= 7 && points <= 9) {
    redirectUrl =
      "https://yazeeed-store.com/vXbgBrO/?utm_source=aff&utm_campaign=UbeUI"; // B1 level
    message = "B1 مستواك";
    instructionsMessage = "سيتم تحويلك الى كتاب الانجليزية للمتوسطين";
  } else if (points >= 10 && points <= 12) {
    redirectUrl =
      "https://yazeeed-store.com/vXbgBrO/?utm_source=aff&utm_campaign=UbeUI"; // B2 level
    message = "B2 مستواك";
    instructionsMessage = "سيتم تحويلك الى كتاب الانجليزية للمتوسطين";
  } else if (points >= 13 && points <= 15) {
    redirectUrl = "https://yazeeed-store.com"; // C1 level
    message = "C1 مستواك";
  }

  // Display the message
  document.getElementById("result").textContent += ` ${message}`;

  // Display instructions message
  document.getElementById(
    "instructions-message"
  ).textContent = instructionsMessage;

  // Redirect after 10 seconds
  setTimeout(function () {
    window.location.href = redirectUrl;
  }, 4000);
}

// Timer
document.addEventListener("DOMContentLoaded", function () {
  let timeLeft = 15 * 60; // Starting time in seconds (5 minutes)
  const timeDisplay = document.getElementById("time");
  const fixedTimer = document.getElementById("fixed-timer"); // Get fixed-timer element

  // Start the timer
  let timer = setInterval(function () {
    timeLeft -= 1;

    // Check if timeLeft is less than 60 seconds
    if (timeLeft >= 60) {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timeDisplay.textContent = `${minutes}m ${seconds}s`;
    } else {
      timeDisplay.textContent = `${timeLeft}s`;
    }

    if (timeLeft <= 0) {
      clearInterval(timer); // Stops the timer
      fixedTimer.textContent = "Time's up!"; // Display time's up message

      // Scroll the page to the bottom smoothly
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });

      calculateScore(); // Automatically trigger the calculateScore function when time is up
    }
  }, 1000); // Updates every 1000 milliseconds (1 second)

  // Attach the function to the submit button event
  document.querySelector(".submit-btn").addEventListener("click", function () {
    clearInterval(timer); // Stop the timer when submit button is clicked
    // edit before the dollar to type to stopped timer
    fixedTimer.textContent = ` ${timeLeft}s`; // Show time left at submission
  });
});
