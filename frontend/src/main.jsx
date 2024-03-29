import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; // Updated import
import Projects from './Projects.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);