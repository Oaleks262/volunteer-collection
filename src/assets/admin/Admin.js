import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';
import { AdminApi } from '../api/api.js';
import "./Admin.css";

const Admin = () => {

  
  const [editedTitle, setEditedTitle] = useState('');
  const [editedAbout, setEditedAbout] = useState('');
  const [editedBank, setEditedBank] = useState('');

  const [bankAdmin, setBankAdmin] = useState('')
  const [titleAdmin, setTitleAdmin] = useState('')
  const [aboutAdmin, setAboutAdmin] = useState('')

  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('authToken');
      await AdminApi.logoutAdmin(token);
      logout(token); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        AdminApi.setToken(token);
          const response = await AdminApi.getAdminBank();
          setBankAdmin(response?.data?.bank || "Default Bank");
      } catch (error) {
          console.error("Error fetching title:", error);
          setBankAdmin("Default Bank");
      }
  };

    fetchData();
}, []);
useEffect(() => {
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      AdminApi.setToken(token);
        const response = await AdminApi.getAdminTitle();
        setTitleAdmin(response?.data?.title || "Default Title");
    } catch (error) {
        console.error("Error fetching title:", error);
        setTitleAdmin("Default Title");
    }
};

  fetchData();
}, []);
useEffect(() => {
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      AdminApi.setToken(token);
        const response = await AdminApi.getAdminAbout();
        setAboutAdmin(response?.data?.about || "Default About");
    } catch (error) {
        console.error("Error fetching title:", error);
        setAboutAdmin("Default About");
    }
};

  fetchData();
}, []);




const handleSaveTitle = async () => {
  try {
    const token = localStorage.getItem('authToken');
    AdminApi.setToken(token);
    const response = await AdminApi.getAdminTitle();
    const titleData = response?.data;
    const titleId = titleData?._id;
    console.log(titleId)
    if (titleId) {
      await AdminApi.deleteAdminTitle(titleId);
      if (editedTitle) {
        await AdminApi.putAdminTitle({ title: editedTitle });
        setTitleAdmin(editedTitle);
      }
    } else {
      console.error("Cannot delete. titleId is undefined.");
    }
  } catch (error) {
    console.error("Error handling save title:", error);
  }
};


const handleSaveAbout = async () => {
  try {
    const token = localStorage.getItem('authToken');
    AdminApi.setToken(token);
    const response = await AdminApi.getAdminAbout();
    const aboutData = response?.data;
    const aboutId = aboutData?._id;
    console.log(aboutId);
    if (aboutId) {
      await AdminApi.deleteAdminAbout(aboutId);
      if (editedAbout) {
        await AdminApi.putAdminAbout({ about: editedAbout });
        setAboutAdmin(editedAbout);
      }
    } else {
      console.error("Cannot delete. aboutId is undefined.");
    }
  } catch (error) {
    console.error("Error handling save about:", error);
  }
};

const handleSaveBank = async () => {
  try {
    
    const token = localStorage.getItem('authToken');
    AdminApi.setToken(token);
    const response = await AdminApi.getAdminBank();
    const bankData = response?.data;
    const bankId = bankData?._id;
    console.log(bankId)
    if (bankId) {
      await AdminApi.deleteAdminBank(bankId);
      if (editedBank) {
        await AdminApi.putAdminBank({ bank: editedBank });
        setBankAdmin(editedBank);
      }
    } else {
      console.error("Cannot delete. bankId is undefined.");
    }
  } catch (error) {
    console.error("Error handling save bank:", error);
  }
};

if (!isAuthenticated) {
  return <Navigate to="/login" />;
}

  return (
    <div className='admin-contein'>
      <h2>Адмін панель</h2>
        <div className='admin-input'>
          <div className='admin-title'>
            <strong>Title:</strong>
            <p>{titleAdmin}</p>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button className='save' onClick={handleSaveTitle}>Зберегти</button>
          </div>
          <div className='admin-about'>
            <strong>About:</strong>
            <p>{aboutAdmin}</p>
            <input
              type="text"
              value={editedAbout}
              onChange={(e) => setEditedAbout(e.target.value)}
            />
            <button className='save' onClick={handleSaveAbout}>Зберегти</button>
          </div>
          <div className='admin-bank'>
            <strong>Bank:</strong>
            <p>{bankAdmin}</p>
            <input
              type="text"
              value={editedBank}
              onChange={(e) => setEditedBank(e.target.value)}
            />
            <button className='save' onClick={handleSaveBank}>Зберегти</button>
          </div>
          <button className='logout' onClick={handleLogout}>Вихід</button>
        </div>
        
    </div>
  );
};



export default Admin;
