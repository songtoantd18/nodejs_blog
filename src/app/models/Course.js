// Import thư viện mongoose
const mongoose = require("mongoose");

// Tạo một đối tượng Schema từ mongoose
const Schema = mongoose.Schema;

// In ra thông tin của Schema để kiểm tra
console.log("🚀 ~ Schema:7777777777777777777", Schema);

// Lấy ObjectId từ Schema, dùng để tạo ID cho tài liệu
const ObjectId = Schema.ObjectId;
console.log("🚀 ~ ObjectId:777777777777777777777777", ObjectId);

// Định nghĩa một Schema cho collection "Course"
const Course = new Schema({
  // Tạo trường "name" với kiểu dữ liệu String và độ dài tối đa 255 ký tự
  name: { type: String, maxLength: 255 },

  // Tạo trường "description" với kiểu dữ liệu String và độ dài tối đa 600 ký tự
  description: { type: String, maxLength: 600 },

  // Tạo trường "image" với kiểu dữ liệu String và độ dài tối đa 255 ký tự
  image: { type: String, maxLength: 255 },

  // Tạo trường "createAt" với kiểu dữ liệu Date, mặc định là thời gian hiện tại khi tài liệu được tạo
  createAt: { type: Date, default: Date.now },

  // Tạo trường "updateAt" với kiểu dữ liệu Date, mặc định là thời gian hiện tại khi tài liệu được tạo
  updateAt: { type: Date, default: Date.now },
});

// In ra thông tin của Schema Course để kiểm tra
console.log("Course77777777777777777777777:", Course);

// Xuất mô hình Course để sử dụng ở nơi khác trong ứng dụng
module.exports = mongoose.model("Course", Course);
