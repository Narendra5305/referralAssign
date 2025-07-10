const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  phone: { type: String, required: true },
  jobTitle: String,
  status: { type: String, default: 'Pending' },
  resumeUrl: String
}, { timestamps: true });


const CandidateModel = mongoose.model('Candidate', candidateSchema);

module.exports = {CandidateModel}
