const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug); // Kích hoạt slug generator

const CourseSchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    videoId: { type: String },
    level: { type: String },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: ["name", "level"] }, // Đảm bảo slug là duy nhất
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
