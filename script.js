// JavaScript for calculating the score and redirecting
function calculateScore() {
  // Get the form and form data
  const form = document.getElementById("cefr-test");
  const answers = new FormData(form);
  let score = 0;

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

  // Calculate the percentage
  const percentage = (score / 15) * 100;

  // Display the result
  const resultMessage = `Your score: ${score}/15 (${percentage.toFixed(2)}%)`;
  document.getElementById("result").textContent = resultMessage;

  // Redirect based on the score
  let redirectUrl;
  let message;
  if (percentage < 40) {
    redirectUrl = "https://yazeeed-store.com/PdbZbZB"; // A1 level
    message = "!A1 مستواك هو";
  } else if (percentage >= 40 && percentage < 60) {
    redirectUrl = "https://yazeeed-store.com/PdbZbZB"; // A2 level
    message =
      "!A2 مستواك هو";
  } else if (percentage >= 60 && percentage < 70) {
    redirectUrl = "https://yazeeed-store.com/PdbZbZB"; // B1 level
    message =
      "!B1 مستواك هو";
  } else if (percentage >= 70 && percentage < 85) {
    redirectUrl = "https://yazeeed-store.com/PdbZbZB"; // B2 level
    message =
      "!B2 مستواك هو";
  } else {
    redirectUrl = "https://yazeeed-store.com/PdbZbZB"; // C1 level
    message =
      "!C1-C2 مستواك هو";
  }

  // Display the message
  document.getElementById("result").textContent += ` ${message}`;

  // Redirect after 10 seconds
  setTimeout(function () {
    window.location.href = redirectUrl;
  }, 7000);
}

// Attach the function to the submit button event
document.getElementById("submitBtn").addEventListener("click", calculateScore);