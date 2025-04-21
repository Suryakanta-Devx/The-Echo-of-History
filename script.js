// Quiz Section Functionality
function checkAnswer(questionNumber) {
  const answers = {
      1: "Bhubaneswar",
      2: "Rath Yatra",
      3: "Odia",
      4: "Jayee Rajguru",
      5: "Odissi",
      6: "Mahanadi",
      7: "Konark Sun Temple",
      8: "Emperor Ashoka",
      9: "Rasagola",
      10: "Chilika Lake"
  };

  const userAnswer = prompt(`Question ${questionNumber}:`);
  
  if (userAnswer) {
      const result = document.getElementById(`quiz-result-${questionNumber}`);
      if (userAnswer.trim().toLowerCase() === answers[questionNumber].toLowerCase()) {
          result.textContent = `Correct! The answer is ${answers[questionNumber]}.`;
          result.style.color = "green";
      } else {
          result.textContent = `Incorrect! The correct answer is ${answers[questionNumber]}.`;
          result.style.color = "red";
      }
  }
}

// Image Upload Functionality
document.getElementById('upload-pic').addEventListener('change', function(event) {
  const uploadedFile = event.target.files[0];
  if (uploadedFile) {
      alert('Image uploaded successfully!');
  }
});

// Review Submission
function submitReview() {
  alert('Thank you for your review!');
}

// ===== CERTIFICATE DOWNLOAD BUTTON FUNCTIONALITY =====
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'certificate.jpg'; // Make sure this path is correct
    link.download = 'Odia_Aitihya_Certificate.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("🏆 Your certificate is now downloading. Preserve it with pride!");
  });

}
