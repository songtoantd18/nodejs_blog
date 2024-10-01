Đúng rồi! Khi nhấn vào nút xóa trong stored-courses.hbs, luồng chạy sẽ diễn ra như sau theo kiến trúc MVC:

Form Submit: Khi bạn nhấn nút xóa, JavaScript sẽ đặt hành động cho form bằng cách gán deleteForm.action = '/courses/' + courseId + '?\_method=DELETE'; rồi thực hiện submit form bằng deleteForm.submit();.

Router: Yêu cầu DELETE này sẽ được gửi đến server, và Express.js sẽ định tuyến yêu cầu dựa trên đường dẫn /courses/:id và phương thức DELETE. Nó sẽ được router app.use("/courses", coursesRouter) xử lý.

Controller: Trong coursesRouter, yêu cầu DELETE này sẽ được chuyển tới phương thức deleteCourse của CourseController. Controller này sẽ:

Gọi Course.deleteOne({ \_id: req.params.id }) để xóa dữ liệu từ MongoDB.
Sau khi xóa thành công, nó sẽ chuyển hướng (redirect) lại trang trước đó bằng res.redirect('back').
Nếu có lỗi, lỗi sẽ được truyền qua middleware bằng next(error).
Như vậy, quy trình này tuân thủ đúng theo mô hình MVC, nơi mỗi thành phần đảm nhận một nhiệm vụ cụ thể (View gửi yêu cầu, Router định tuyến, Controller xử lý logic và Model thực hiện tương tác với database).
