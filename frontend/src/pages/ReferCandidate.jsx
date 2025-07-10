import React, { useState  ,useContext} from 'react';
import { baseUrl } from '../utils/api';

import { AuthContext } from '../context/authContext';



const ReferCandidate = () => {

   const { token, login, logout } =useContext(AuthContext)  ;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    resumeUrl: '',
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.resumeUrl.endsWith('.pdf')) {
      alert('Resume must be a PDF.');
      return;
    }
    await fetch(`${baseUrl}/api/candidates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    setFormData({ name: '', email: '', phone: '', jobTitle: '', resumeUrl: '' });
    alert('Candidate referred successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Refer a Candidate</h2>
      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
      <input type="text" placeholder="Job Title" value={formData.jobTitle} onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })} required />
      <input type="url" placeholder="Resume URL (.pdf only)" value={formData.resumeUrl} onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReferCandidate;