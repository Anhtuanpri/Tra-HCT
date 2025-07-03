document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const answerBox = document.getElementById("answerBox");

  const qaMap = {
    "ai là mẹ của đường tam": "A Ngân",
    "gdp là gì": "Tổng sản phẩm quốc nội.",
    "bạch tiểu thuần là ai": "Nhân vật chính trong Nhất Niệm Vĩnh Hằng",
    "tiêu viêm sử dụng vũ khí gì": "Huyền Trọng Xích",
    "ai là người đứng đầu vũ hồn điện": "Bỉ Bỉ Đông"
    // 👉 Dán thêm nhiều câu khác theo mẫu "câu hỏi": "đáp án",
  };

  searchBox.addEventListener("input", function () {
    const query = searchBox.value.trim().toLowerCase();

    const matched = Object.keys(qaMap).find(q =>
      q.includes(query) || query.includes(q)
    );

    if (matched) {
      answerBox.innerHTML = `<strong>✅ Trả lời:</strong> ${qaMap[matched]}`;
      answerBox.classList.remove("hidden");
    } else {
      answerBox.innerHTML = "❌ Không tìm thấy câu trả lời.";
      answerBox.classList.remove("hidden");
    }
  });
});
