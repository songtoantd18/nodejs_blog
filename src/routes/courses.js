// Nhập thư viện Express và tạo một router mới
const express = require("express");
const router = express.Router();

// Nhập NewsController để xử lý các yêu cầu liên quan đến tin tức
const courseController = require("../app/controllers/CourseController");
router.get("/create", courseController.create);
router.post("/store", courseController.store);

router.get("/:slug", courseController.show);

// Xuất router để có thể sử dụng trong các file khác
module.exports = router;
