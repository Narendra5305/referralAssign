import React from 'react';
import './Candidatecards.css';
import { FaTrash, FaUser, FaBriefcase, FaCheckCircle } from 'react-icons/fa';



const CandidateCard = ({ candidate, onUpdate, onDelete }) => {
  return (
    <div className="card candidate-card">
      <div className="card-header">
        <h3><FaUser /> {candidate.name}</h3>
        <button className="delete-button" onClick={() => onDelete(candidate._id)}>
          <FaTrash /> Delete
        </button>
      </div>

     <div className="card-body">
         <p><FaBriefcase /> {candidate.jobTitle}</p>

        <p className="status-row">
            <FaCheckCircle />
            <span className={`status-badge ${candidate.status.toLowerCase()}`}>
            {candidate.status}
            </span>
        </p>

        <select
            value={candidate.status}
            onChange={(e) => onUpdate(candidate._id, e.target.value)}
            className="status-select"
        >
            <option value="Pending">Pending</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Hired">Hired</option>
        </select>
        </div>

    </div>
  );
};

export default CandidateCard;
