const qaList = [
  { question: "ai là mẹ của đường tam", answer: "A Ngân" },
  { question: "bạch tiểu thuần là ai", answer: "Nhân vật chính trong Nhất Niệm Vĩnh Hằng" },
  { question: "vũ hồn của tiểu vũ là gì", answer: "Nhu Cốt Thỏ" },
  { question: "pháp bảo của tiêu viêm", answer: "Huyền Trọng Xích" }
  // ← Bạn dán thêm ở đây
];

document.getElementById("searchButton").addEventListener("click", () => {
  const query = document.getElementById("searchBox").value.trim().toLowerCase();
  const resultBox = document.getElementById("answerBox");

  if (!query) {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = "❗ Bạn chưa nhập từ khóa.";
    return;
  }

  const match = qaList.find(item =>
    item.question.toLowerCase().includes(query)
  );

  if (match) {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `<p><strong>Câu hỏi:</strong> ${match.question}</p><p><strong>Đáp án:</strong> ${match.answer}</p>`;
  } else {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `❌ Không tìm thấy kết quả cho: "<strong>${query}</strong>"`;
  }
});
