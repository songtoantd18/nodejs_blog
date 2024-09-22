// Nhập thư viện Express
const express = require("express");
const app = express(); // Tạo một ứng dụng Express
const port = 3000; // Đặt cổng mà ứng dụng sẽ lắng nghe
const { engine } = require("express-handlebars"); // Nhập express-handlebars để sử dụng làm view engine
const path = require("path"); // Nhập thư viện path để xử lý đường dẫn
const morgan = require("morgan"); // Nhập morgan để ghi log các yêu cầu HTTP
const route = require("./routes"); // Nhập các route từ file routes
const db = require("./config/db/index.js"); // Nhập cấu hình kết nối cơ sở dữ liệu
console.log("🚀 1111111111111111111111 ~ db:", db); // Log thông tin về db

// Kết nối đến cơ sở dữ liệu
db.connectDB(); // Gọi hàm kết nối đến cơ sở dữ liệu
console.log("🚀 ~ db.connectDB():", db.connectDB()); // Log kết quả của kết nối (có thể không cần thiết)

// Thông báo khởi tạo ứng dụng Express
console.log("1. Bắt đầu khởi tạo ứng dụng Express");

// Thiết lập thư mục chứa tệp tĩnh
app.use(express.static("public")); // Cung cấp các tệp tĩnh từ thư mục "public"
app.use(morgan("combined")); // Sử dụng morgan để ghi log thông tin các yêu cầu HTTP
app.use(express.urlencoded()); // Phân tích dữ liệu URL-encoded
app.use(express.json()); // Phân tích dữ liệu JSON

console.log("2. Thiết lập static file và middleware");

// Sử dụng express-handlebars làm view engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs", // Đặt phần mở rộng cho tệp view
  })
);
app.set("view engine", "hbs"); // Đặt view engine cho ứng dụng
app.set("views", path.join(__dirname, "resources/views")); // Đặt thư mục chứa các tệp view

console.log("3. Cấu hình view engine Handlebars");

// Đăng ký các route cho ứng dụng
route(app); // Gọi hàm route để đăng ký các route đã định nghĩa

// Khởi động server và lắng nghe các yêu cầu trên cổng đã chỉ định
app.listen(port, () => {
  console.log(`4. Server đang chạy tại http://localhost:${port}`); // Log thông báo khi server đang chạy
});
