import React from 'react';
import { Routes, Route } from "react-router-dom"; // 'react-router-dom' बाट मात्र import गर्ने
import UseEffect from './pages/UseEffect';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/useeffect" element={<UseEffect />} />
    </Routes>
  );
};

export default AppRoutes;
