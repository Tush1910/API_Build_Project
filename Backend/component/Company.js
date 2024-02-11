const mongoose = require('mongoose');

const companyInfo = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
});

module.exports = mongoose.model('Company', companyInfo);
