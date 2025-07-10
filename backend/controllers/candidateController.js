
const {CandidateModel} = require('../models/candidateModel');
const validator = require('validator');



// POST -candidates
const createCandidate = async (req, res) => {
  const { name, email, phone, jobTitle, resumeUrl } = req.body;

  if (!validator.isEmail(email)) return res.status(400).json({ message: 'Invalid email format' });
  if (!validator.isMobilePhone(phone, 'any')) return res.status(400).json({ message: 'Invalid phone number' });
  if (resumeUrl && !resumeUrl.endsWith('.pdf')) return res.status(400).json({ message: 'Resume URL must end with .pdf' });

  try {
    const candidate = await CandidateModel.create({ name, email, phone, jobTitle, resumeUrl });
    res.status(201).json(candidate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET -candidates
const getAllCandidates = async (req, res) => {
  try {
    const candidates = await CandidateModel.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// PUT - candidates - status
const updateCandidateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const candidate = await CandidateModel.findByIdAndUpdate(id, { status }, { new: true });
    if (!candidate) return res.status(404).json({ message: 'Candidate not found' });

    res.json(candidate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// DELETE - candidates
const deleteCandidate = async (req, res) => {
  const { id } = req.params;

  try {
    const candidate = await CandidateModel.findByIdAndDelete(id);
    if (!candidate) return res.status(404).json({ message: 'Candidate not found' });

    res.json({ message: 'Candidate deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports ={createCandidate , getAllCandidates , updateCandidateStatus , deleteCandidate };