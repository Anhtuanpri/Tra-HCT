document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const answerBox = document.getElementById("answerBox");

  const qaMap = {
    "ai là mẹ của đường tam": "A Ngân",
    "việt nam có bao nhiêu tỉnh": "Việt Nam có 63 tỉnh và thành phố.",
    "ai là người đứng đầu vũ hồn điện": "Bỉ Bỉ Đông",
    "gdp là gì": "Tổng sản phẩm quốc nội.",
    "bạch tiểu thuần là ai": "Nhân vật chính trong Nhất Niệm Vĩnh Hằng"
    // 👉 Dán thêm câu hỏi-đáp án theo mẫu "câu hỏi": "đáp án"
  };

  searchBox.addEventListener("input", function () {
    const query = searchBox.value.trim().toLowerCase();
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
