const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
  _id: String,
  Suggestions: String,
  Logs: String,
  Tickets: String,
  Prefix: String,
});

module.exports = mongoose.model("guilds", guildSchema);
