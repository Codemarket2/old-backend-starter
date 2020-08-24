const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connection Successfull!");
  } catch (error) {
    console.log("DB Connection Failed");
  }
};
