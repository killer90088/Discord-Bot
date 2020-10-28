const { Schema, model } = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

const authSchema = new Schema({
  discordId: reqString,
  discordTag: reqString,
  avatar: String,
  guilds: {
    type: [Object],
    required: true,
  }
});

module.exports = model("website", authSchema);
