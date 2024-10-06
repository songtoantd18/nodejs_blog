const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class DemoController {
  // [GET] /course/:slug - Phương thức xử lý yêu cầu GET cho trang chi tiết khóa học
  async show(req, res, next) {
    try {
      // Tìm khóa học bằng slug
      const course = await Course.findOne({ slug: req.params.slug });

      // Nếu tìm thấy khóa học, render trang detail và truyền dữ liệu khóa học
      if (course) {
        res.render("demo2/demo", { course: mongooseToObject(course) });
      } else {
        // Nếu không tìm thấy khóa học, trả về trang lỗi hoặc thông báo
        res.status(404).send("Khóa học không tồn tại");
      }
    } catch (error) {
      // Xử lý lỗi
      next(error);
    }
  }
}

module.exports = new DemoController();
