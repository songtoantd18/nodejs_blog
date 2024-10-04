// Nhập thư viện Express và tạo một router mới
const express = require("express");
const router = express.Router();

// Nhập NewsController để xử lý các yêu cầu liên quan đến tin tức
const courseController = require("../app/controllers/CourseController");
router.get("/create", courseController.create);
router.post("/store", courseController.store);

router.get("/:id  /edit", courseController.edit);
router.put("/:id", courseController.update);

router.patch("/:id/restore", courseController.restore);

router.get(
  "/:slug",

  courseController.show
);
router.delete("/:id", courseController.deleteCourse);
router.delete("/:id/force", courseController.forceDestroy);

// Xuất router để có thể sử dụng trong các file khác
module.exports = router;
