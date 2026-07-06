import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import AppRoutes from './App.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AppRoutes />        
    </BrowserRouter>
);
