const { default: mongoose } = require("mongoose");

module.exports = {
  mutipleMongooseToObject: function (mongoose) {
    return mongoose.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function (mongoose) {
    console.log("🚀 ~ mongoose:", mongoose);
    {
      return mongoose ? mongoose.toObject() : mongoose;
    }
  },
};
