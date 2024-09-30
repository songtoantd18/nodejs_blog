// Nhập router cho các route liên quan đến tin tức và trang chính
const newsRouter = require("./news");
const coursesRouter = require("./courses");
const demo1Router = require("./demo1");

const siteRouter = require("./site");
const meRouter = require("./me");

// Hàm route để định nghĩa các route cho ứng dụng
function route(app) {
  // Log thông báo để xác nhận việc vào file này

  // Sử dụng router cho các yêu cầu đến đường dẫn /news
  app.use("/news", newsRouter);
  app.use("/me", meRouter);

  // Sử dụng router cho các yêu cầu đến đường dẫn chính /
  app.use("/courses", coursesRouter);
  app.use("/demo1", demo1Router);

  app.use("/", siteRouter);
}

// Xuất hàm route để có thể sử dụng trong các file khác
module.exports = route;
