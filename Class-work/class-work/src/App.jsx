import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import UserCard from './UserCard';
import UseEffect from './pages/UseEffect';
import FetchPractice from './pages/FetchPratice';
import PokemonFetcher from './pages/PokemonFetcher';

const App = () => {
  return (
    <div>
      {/* सामान्य नेभिगेसन बार (पेजहरू बीच आवतजावत गर्न) */}
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home (User Card)</Link> |{" "}
        <Link to="/useeffect" style={linkStyle}>UseEffect Page</Link>
        <Link to="/fetchPractice" style={linkStyle}>fetch practice Page</Link>
        <Link to="/data-fetching" style={linkStyle}>pokemon data Page</Link>
      </nav>

      {/* तपाईंको राउट्स (Routes) को कन्फिगरेसन */}
      <Routes>
        <Route 
          path="/" 
          element={
            <div id='center' style={centerStyle}>
              <UserCard name="Alex Morgan" email="alex@example.com">
                <button className="btn-secondary" onClick={() => console.log('Messaged')}>
                  Message
                </button>
                <button className="btn-primary" onClick={() => console.log('Followed')}>
                  Follow
                </button>
              </UserCard>
            </div>
          } 
        />

        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/fetchPractice" element={<FetchPractice />} />
        <Route path="/data-fetching" element={<PokemonFetcher />} />
        
      </Routes>
    </div>
  );
};

const navStyle = { padding: '15px', background: '#f4f4f4', marginBottom: '20px' };
const linkStyle = { margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' };
const centerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' };

export default App;
