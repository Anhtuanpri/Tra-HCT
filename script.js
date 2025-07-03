document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const answerBox = document.getElementById("answerBox");

  // 📌 Tại đây bạn dán danh sách câu hỏi/đáp án theo định dạng: "câu hỏi": "đáp án"
  const qaMap = {
    "việt nam có bao nhiêu tỉnh?": "Việt Nam có 63 tỉnh và thành phố.",
    "ai là mẹ của đường tam": "A Ngân",
    "gdp là gì": "Tổng sản phẩm quốc nội",
    // 👉 Dán thêm ở đây...
  };

  searchBox.addEventListener("input", function () {
    const query = searchBox.value.trim().toLowerCase();

    // Tìm gần đúng
    const matched = Object.keys(qaMap).find(q => q.includes(query));

    if (matched) {
      answerBox.innerHTML = `<strong>✅ Trả lời:</strong> ${qaMap[matched]}`;
      answerBox.classList.remove("hidden");
    } else {
      answerBox.innerHTML = "❌ Không tìm thấy câu trả lời.";
      answerBox.classList.remove("hidden");
    }
  });
});
