// Định nghĩa một lớp NewsController để quản lý các hành động liên quan đến tin tức
class NewsController {
  // Phương thức xử lý GET request cho đường dẫn "/news"
  // Khi người dùng truy cập vào "/news", phương thức này sẽ được gọi
  index(req, res) {
    // Render trang "news" (giao diện tin tức)
    res.render("news");
  }

  // Phương thức xử lý GET request cho đường dẫn "/news/:slug"
  // "slug" là một tham số động trong đường dẫn, cho phép bạn lấy thông tin chi tiết về một tin tức cụ thể
  show(req, res) {
    // In ra thông tin để kiểm tra xem phương thức đã được gọi
    console.log("3. newscontroller.js.js");

    // Gửi phản hồi về cho người dùng, thông báo đây là chi tiết của tin tức
    res.send("NEWS DETAIL!!! đây là slug");
  }

  // Phương thức demo1, không liên quan đến hành động cụ thể nào
  demo1(req, res) {
    // In ra thông tin để kiểm tra
    console.log("3. newscontroller.js.js");

    // Gửi phản hồi về cho người dùng
    res.send(" đây là demo1");
  }

  // Phương thức demo2, không liên quan đến hành động cụ thể nào
  demo2(req, res) {
    // In ra thông tin để kiểm tra
    console.log("3. newscontroller.js.js");

    // Gửi phản hồi về cho người dùng
    res.send(" đây là demo2");
  }
}

// Xuất một thể hiện của NewsController để sử dụng trong ứng dụng
module.exports = new NewsController();
