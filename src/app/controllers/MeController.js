const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] / - Phương thức xử lý yêu cầu GET cho đường dẫn chính

  // [GET] /search - Phương thức xử lý yêu cầu GET cho trang tìm kiếm
  async storedCourses(req, res, next) {
    try {
      const courses = await Course.find({});
      console.log(
        "🚀 ~ MeController ~ storedCourses ~ courses1111111111111111:",
        courses
      );
      res.render("me/stored-courses", {
        demo1: mutipleMongooseToObject(courses),
      });
    } catch (error) {
      next(error); // Passes the error to the next middleware (error handler)
    }
  }
  async trashCourses(req, res, next) {
    try {
      const courses = await Course.findWithDeleted({ deleted: true });
      console.log(
        "🚀 ~ MeController ~ storedCourses ~ courses1111111111111111:",
        courses
      );
      res.render("me/trash-courses", {
        demo1: mutipleMongooseToObject(courses),
      });
    } catch (error) {
      next(error); // Passes the error to the next middleware (error handler)
    }
  }
}

module.exports = new MeController();
