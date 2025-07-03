document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const answerBox = document.getElementById("answerBox");

  let qaMap = {};

  fetch("question-answer.txt")
    .then((response) => response.text())
    .then((text) => {
      const lines = text.split("\n");
      lines.forEach((line) => {
        const parts = line.split(":");
        if (parts.length === 2) {
          const question = parts[0].trim().toLowerCase();
          const answer = parts[1].trim();
          qaMap[question] = answer;
        }
      });
    });

  searchBox.addEventListener("input", function () {
    const query = searchBox.value.trim().toLowerCase();
    if (qaMap[query]) {
      answerBox.innerHTML = `<strong>✅ Trả lời:</strong> ${qaMap[query]}`;
      answerBox.classList.remove("hidden");
    } else {
      answerBox.innerHTML = "❌ Không tìm thấy câu trả lời.";
      answerBox.classList.remove("hidden");
    }
  });
});
