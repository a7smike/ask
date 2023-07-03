function askQuestion() {
    var question = document.getElementById("questionInput").value;
    var answer = document.getElementById("answer");
  
    // Generate a random number (0 or 1)
    var random = Math.floor(Math.random() * 2);
  
    if (random === 0) {
      answer.textContent = "Yes!";
    } else {
      answer.textContent = "No!";
    }
  }
  