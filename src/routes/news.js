// Nhập thư viện Express và tạo một router mới
const express = require("express");
const router = express.Router();

// Nhập NewsController để xử lý các yêu cầu liên quan đến tin tức
const newsController = require("../app/controllers/NewsController");
// Log thông báo để xác nhận việc vào file này

// Đặt tuyến đường cụ thể (slug) trước demo1
// Định nghĩa route cho /news/demo1
router.get("/demo1", newsController.demo1);

// Định nghĩa route cho /news/slug
router.get("/slug", newsController.show);

// Định nghĩa route cho /news/slug/xxx
router.get("/slug/xxx", newsController.demo2);

// Định nghĩa route cho /news/
router.get("/", newsController.index);

// Xuất router để có thể sử dụng trong các file khác
module.exports = router;
