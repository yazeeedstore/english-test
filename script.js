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
    redirectUrl =
      "https://yazeeed-store.com/PdbZbZB/?utm_source=aff&utm_campaign=UbeUI"; // A1 level
    message = "مبتدئ A1 مستواك";
    instructionsMessage =
      "سيتم تحويلك الى كتاب الانجليزية للمبتدئين لتطوير لغتك";
  } else if (percentage >= 40 && percentage < 60) {
    redirectUrl =
      "https://yazeeed-store.com/PdbZbZB/?utm_source=aff&utm_campaign=UbeUI"; // A2 level
    message = "مبتدئ متقدم A2 مستواك";
    instructionsMessage =
      "سيتم تحويلك الى كتاب الانجليزية للمبتدئين لتطوير لغتك";
  } else if (percentage >= 60 && percentage < 70) {
    redirectUrl =
      "https://yazeeed-store.com/vXbgBrO/?utm_source=aff&utm_campaign=UbeUI"; // B1 level
    message = "متوسط B1 مستواك";
    instructionsMessage =
      "سيتم تحويلك الى كتاب الانجليزية للمتوسطين لتطوير لغتك";
  } else if (percentage >= 70 && percentage < 85) {
    redirectUrl =
      "https://yazeeed-store.com/vXbgBrO/?utm_source=aff&utm_campaign=UbeUI"; // B2 level
    message = "متوسط متقدم B2 مستواك";
    instructionsMessage =
      "سيتم تحويلك الى كتاب الانجليزية للمتوسطين لتطوير لغتك";
  } else {
    redirectUrl = "https://yazeeed-store.com"; // C1 level
    message = "متقدم C1 مستواك";
  }

  // Display the message
  document.getElementById("result").textContent += ` ${message}`;

  // Display instructions message
  document.getElementById("instructions").textContent = instructionsMessage;

  // Redirect after 10 seconds
  setTimeout(function () {
    window.location.href = redirectUrl;
  }, 5000);
}

// Attach the function to the submit button event
document.getElementById("submitBtn").addEventListener("click", calculateScore);