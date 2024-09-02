import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'; // Updated path
import Projects from './Pages/Projects.jsx'; // Updated path
import ContactApp from './Pages/ContactApp.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactApp" element={<ContactApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
