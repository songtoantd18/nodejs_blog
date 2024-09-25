// Nhập thư viện mongoose để tương tác với MongoDB
const mongoose = require("mongoose");

// Hàm kết nối đến MongoDB
async function connectDB() {
  try {
    // Kết nối đến cơ sở dữ liệu MongoDB với URI cụ thể
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {});
    // Log ra console nếu kết nối thành công
  } catch (error) {
    // Log lỗi nếu kết nối thất bại
    console.error("Kết nối MongoDB thất bại:", error);
  }
}

// Xuất hàm connectDB để có thể sử dụng ở nơi khác trong ứng dụng
module.exports = { connectDB };

// Bạn có thể gọi hàm connectDB() ở đây nếu cần thiết
// connectDB();
