const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /course/:slug - Phương thức xử lý yêu cầu GET cho trang chi tiết khóa học
  async show(req, res, next) {
    console.log("🚀 ~ CourseController ~ show ~ next:", next);
    try {
      // Tìm khóa học bằng slug
      const course = await Course.findOne({ slug: req.params.slug });
      console.log("🚀 ~ CourseController ~ show ~ course:", course);

      // Nếu tìm thấy khóa học, render trang detail và truyền dữ liệu khóa học
      if (course) {
        res.render("courses/details", { course: mongooseToObject(course) });
      } else {
        // Nếu không tìm thấy khóa học, trả về trang lỗi hoặc thông báo
        res.status(404).send("Khóa học không tồn tại");
      }
    } catch (error) {
      // Xử lý lỗi
      next(error);
    }
  }

  async create(req, res, next) {
    console.log("số 1 -------------------------");
    res.render("courses/create");
  }
  async store(req, res, next) {
    const formData = req.body;
    console.log("🚀 ~ CourseController ~ store ~ formData:", formData);
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`; // Đảm bảo sử dụng dấu ` để chèn giá trị videoId
    const course = new Course(formData); // Tạo thể hiện mới từ Course

    try {
      await course.save(); // Lưu course vào cơ sở dữ liệu
      res.send("Course saved successfully");
    } catch (error) {
      next(error); // Gọi hàm next để xử lý lỗi
    }
  }
}

module.exports = new CourseController();
