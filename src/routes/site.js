// Nhập thư viện Express và tạo một router mới
const express = require("express");
const router = express.Router();

// Nhập SiteController để xử lý các yêu cầu liên quan đến trang chính
const siteController = require("../app/controllers/SiteController");
console.log("3. đây là routes/site.js"); // Log thông báo để xác nhận việc vào file này

// Định nghĩa route cho tìm kiếm
router.get("/search", siteController.search);

// Định nghĩa route cho trang chính
router.get("/", siteController.index);

// Xuất router để có thể sử dụng trong các file khác
module.exports = router;
