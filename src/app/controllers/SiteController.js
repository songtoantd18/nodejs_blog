// Nhập model Course để tương tác với cơ sở dữ liệu
const Course = require("../models/Course");

class SiteController {
  // [GET] / - Phương thức xử lý yêu cầu GET cho đường dẫn chính
  async index(req, res) {
    try {
      // Tìm tất cả các khóa học trong cơ sở dữ liệu
      const courses = await Course.find({}); // Gọi model Course để lấy tất cả bản ghi

      // Log ra console để kiểm tra dữ liệu lấy được
      console.log(
        "🚀111111111111111111111111111 ~ SiteController ~ index ~ courses:",
        courses
      );

      // Trả về dữ liệu dưới dạng JSON cho client
      res.json(courses);
    } catch (err) {
      // Log lỗi nếu có
      console.log("🚀 ~ SiteController ~ index ~ err:", err);

      // Nếu có lỗi, trả về mã lỗi 500 và thông báo lỗi
      res.status(500).json({ error: "Lỗi khi lấy khóa học" });
    }
  }

  // [GET] /search - Phương thức xử lý yêu cầu GET cho trang tìm kiếm
  search(req, res) {
    // Render trang tìm kiếm
    res.render("search");
  }
}

// Xuất controller để có thể sử dụng trong các file khác
module.exports = new SiteController();
