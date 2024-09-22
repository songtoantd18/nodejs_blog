// Nhập router cho các route liên quan đến tin tức và trang chính
const newsRouter = require("./news");
const siteRouter = require("./site");

// Hàm route để định nghĩa các route cho ứng dụng
function route(app) {
  console.log("3. đây là routes/index.js"); // Log thông báo để xác nhận việc vào file này

  // Sử dụng router cho các yêu cầu đến đường dẫn /news
  app.use("/news", newsRouter);

  // Sử dụng router cho các yêu cầu đến đường dẫn chính /
  app.use("/", siteRouter);
}

// Xuất hàm route để có thể sử dụng trong các file khác
module.exports = route;
