
import React from 'react';
import {Router, Route, Routes, Navigate } from 'react-router-dom';
import './assets/styles/App.css';
import Main from './components/Main/Main';
import Admin from './assets/admin/Admin';
import Login from './assets/admin/Login';
import { AuthProvider } from "./assets/admin/AuthContext"


function App() {
  return (
    <AuthProvider>
    
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/success" element={<Navigate to="/admin" />} />
          </Routes>
        </div>

      </AuthProvider>
  );
}

export default App;
