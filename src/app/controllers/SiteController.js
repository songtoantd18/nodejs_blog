const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] / - Phương thức xử lý yêu cầu GET cho đường dẫn chính
  async index(req, res, next) {
    try {
      // Tìm tất cả các khóa học trong cơ sở dữ liệu
      let courses = await Course.find({});
      // Đổi từ const thành let để có thể gán lại

      // Chuyển đổi các đối tượng Mongoose thành đối tượng thuần
      courses = mutipleMongooseToObject(courses);

      // Render trang home với dữ liệu courses
      res.render("home", { courses });
    } catch (err) {
      // Log lỗi nếu có

      // Nếu có lỗi, trả về mã lỗi 500 và thông báo lỗi
      res.status(500).json({ error: "Lỗi khi lấy khóa học" });
    }
  }

  // [GET] /search - Phương thức xử lý yêu cầu GET cho trang tìm kiếm
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
