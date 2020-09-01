const DB = require("../../utils/DB");
const Email = require("../../models/emailModel");
const { mailer } = require("../../utils/mailer");
DB();

exports.handler = async (event) => {
  try {
    const data = await Email.create(event.arguments);
    await mailer(data);
    return data;
  } catch (error) {
    throw error;
  }
};
