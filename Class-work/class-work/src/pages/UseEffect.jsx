import React, { useEffect, useState } from 'react';

const UseEffect= () => {
  // 1. Initialize state safely using a function (Lazy Initial State)
  // This reads from localStorage only ONCE when the component loads
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  // 2. Automatically update localStorage whenever the 'count' state changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]); // This dependency array ensures it only runs when count changes

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter</h1>
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{count}</p>
      
      {/* Buttons to update the count */}
      <button 
        onClick={() => setCount(prev => prev + 1)}
        style={{ padding: '10px 20px', margin: '5px', fontSize: '1rem' }}
      >
        Increment
      </button>
      
      <button 
        onClick={() => setCount(prev => prev - 1)}
        style={{ padding: '10px 20px', margin: '5px', fontSize: '1rem' }}
      >
        Decrement
      </button>
      
      <button 
        onClick={() => setCount(0)}
        style={{ padding: '10px 20px', margin: '5px', fontSize: '1rem', backgroundColor: '#ff4d4d', color: '#fff', border: 'none' }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseEffect;
