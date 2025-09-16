import React from 'react';
import { useNavigate } from 'react-router-dom';

const StreamSelectionPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const handleSelectStream = async (stream) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/select-stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ userId, stream })
      });

      const data = await res.json();
      if (res.ok) navigate('/home');
      else alert(data.message);
    } catch {
      alert('Error selecting stream. Try again.');
    }
  };

  return (
    <div>
      <h2>Select Your Stream</h2>
      <button onClick={() => handleSelectStream('UPSC')}>UPSC</button>
      <button onClick={() => handleSelectStream('SSC')}>SSC</button>
      <button onClick={() => handleSelectStream('GATE')}>GATE</button>
    </div>
  );
};

export default StreamSelectionPage;
