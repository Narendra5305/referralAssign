import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/api';



import { AuthContext } from '../context/authContexts';
import './Dashboard.css';
import CandidateCard from '../components/candidateCard';

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
  const { token } = useContext(AuthContext);

  const fetchCandidates = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/candidates`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCandidates(res.data);
    } catch (error) {
      console.error('Failed to fetch candidates:', error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(
        `${baseUrl}/api/candidates/${id}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setCandidates((prev) =>
        prev.map((c) => (c._id === id ? { ...c, status: newStatus } : c))
      );
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const deleteCandidate = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/candidates/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCandidates();
    } catch (error) {
      console.error('Failed to delete candidate:', error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const filtered = candidates.filter(
    (c) =>
      c.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
      c.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <input
        placeholder="Search by job title or status"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-input"
      />

      <div className="flex-container">
        {filtered.map((c) => (
          <CandidateCard
            key={c._id}
            candidate={c}
            onUpdate={updateStatus}
            onDelete={deleteCandidate}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
