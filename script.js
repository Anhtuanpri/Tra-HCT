document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const answerBox = document.getElementById("answerBox");

  const qaMap = {
    "việt nam có bao nhiêu tỉnh": "Việt Nam có 63 tỉnh và thành phố.",
    "thủ đô của thái lan": "Bangkok",
    "asean là gì": "Hiệp hội các quốc gia Đông Nam Á.",
    "gdp là gì": "Tổng sản phẩm quốc nội.",
    "tổ chức who làm gì": "Giám sát và cải thiện sức khỏe cộng đồng toàn cầu.",
    "chiến tranh thế giới thứ 2 bắt đầu năm nào": "Năm 1939"
    // 👉 Dán thêm tại đây
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
