const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const muteSchema = new mongoose.Schema({
    _id: reqString,
    userId: reqString,
    modId: reqString,
    roleId: reqString,
    expires: Number
})

module.exports = mongoose.model('mutes', muteSchema);