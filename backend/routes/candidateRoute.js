const express = require('express');
const candidateRouter = express.Router();
const { Auth } = require('../middleware/auth');
const {
  createCandidate,
  getAllCandidates,
  updateCandidateStatus,
  deleteCandidate
} = require("../controllers/candidateController");




candidateRouter.post('/', Auth, createCandidate);
candidateRouter.get('/', Auth, getAllCandidates);
candidateRouter.put('/:id', Auth, updateCandidateStatus);
candidateRouter.delete('/:id', Auth, deleteCandidate);



module.exports = {candidateRouter};
