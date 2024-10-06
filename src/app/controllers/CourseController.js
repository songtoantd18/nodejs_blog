const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /course/:slug - Phương thức xử lý yêu cầu GET cho trang chi tiết khóa học
  async show(req, res, next) {
    try {
      // Tìm khóa học bằng slug
      const course = await Course.findOne({ slug: req.params.slug });

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
  } // get /courses/:id/edit
  async edit(req, res, next) {
    res.render("courses/edit");
  }
  async edit(req, res, next) {
    try {
      const courses = await Course.findById(req.params.id);
      res.render("courses/edit", {
        course: mongooseToObject(courses),
      });
    } catch (error) {
      next(error); // Passes the error to the next middleware (error handler)
    }
  }

  async create(req, res, next) {
    res.render("courses/create");
  }
  // put /courses/:id
  async update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  //delete course
  async deleteCourse(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  //forceDestroy delete /courses/:id/force  xóa vĩnh viễn
  async forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  // retrtore   patch /courses/:id/restore
  async restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  async store(req, res, next) {
    const formData = req.body;

    // Chèn giá trị videoId vào đường dẫn hình ảnh
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

    // Tạo thể hiện mới từ Course
    const course = new Course(formData);

    try {
      // Lưu khóa học vào cơ sở dữ liệu
      await course.save();
      // Chuyển hướng sau khi lưu thành công
      res.redirect("/me/stored/courses");
    } catch (error) {
      next(error); // Gọi hàm next để xử lý lỗi
    }
  }
}

module.exports = new CourseController();
