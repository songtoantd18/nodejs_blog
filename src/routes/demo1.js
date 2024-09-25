// Nhập thư viện Express và tạo một router mới
const express = require("express");
const router = express.Router();

// Nhập NewsController để xử lý các yêu cầu liên quan đến tin tức
const demo1Controller = require("../app/controllers/DemoController");

router.get("/:slug", demo1Controller.show);

// Xuất router để có thể sử dụng trong các file khác
module.exports = router;
