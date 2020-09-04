const mongoose = require("mongoose");

// var validateEmail = function (email) {
//   var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email);
// };

const emailSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User Id is required"],
  },
  emails: {
    type: [String],
    // required: [true, "Email is required"],
    // lowercase: true,
    // validate: [validateEmail, "Please fill a valid email address"],
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please fill a valid email address",
    // ],
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
