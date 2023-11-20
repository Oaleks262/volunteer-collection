import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';
import { AdminApi } from '../api/api.js';

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
          setBankAdmin(response?.data?.bank || "Default Title");
      } catch (error) {
          console.error("Error fetching title:", error);
          setBankAdmin("Default Title");
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
        setAboutAdmin(response?.data?.about || "Default Title");
    } catch (error) {
        console.error("Error fetching title:", error);
        setAboutAdmin("Default Title");
    }
};

  fetchData();
}, []);




const handleSaveTitle = async () => {
  try {
    const token = localStorage.getItem('authToken');
    AdminApi.setToken(token);
    // Отримати дані для titleAdmin
    const response = await AdminApi.getAdminTitle();
    const titleData = response?.data;

    // Перевірити, чи є ідентифікатор в titleData
    const titleId = titleData?._id;

    if (titleId) {
      // Видалити title за ідентифікатором
      await AdminApi.deleteAdminTitle(titleId);

      // Перевірити, чи існує відредагований title та зберегти його
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
    // Отримати дані для aboutAdmin
    const token = localStorage.getItem('authToken');
    AdminApi.setToken(token);
    const response = await AdminApi.getAdminAbout();
    const aboutData = response?.data;

    // Перевірити, чи є ідентифікатор в aboutData
    const aboutId = aboutData?._id;
    console.log(aboutId);
    if (aboutId) {
      // Видалити about за ідентифікатором
      await AdminApi.deleteAdminAbout(aboutId);

      // Перевірити, чи існує відредагований about та зберегти його
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
    // Отримати дані для bankAdmin
    const response = await AdminApi.getAdminBank();
    const bankData = response?.data;

    // Перевірити, чи є ідентифікатор в bankData
    const bankId = bankData?._id;

    if (bankId) {
      // Видалити bank за ідентифікатором
      await AdminApi.deleteAdminBank(bankId);

      // Перевірити, чи існує відредагований bank та зберегти його
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
    <div>
      <h2>Admin Page</h2>
        <div>
          <div>
            <strong>Title:</strong>
            <p>{titleAdmin}</p>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button onClick={handleSaveTitle}>Save</button>
          </div>
          <div>
            <strong>About:</strong>
            <p>{aboutAdmin}</p>
            <input
              type="text"
              value={editedAbout}
              onChange={(e) => setEditedAbout(e.target.value)}
            />
            <button onClick={handleSaveAbout}>Save</button>
          </div>
          <div>
            <strong>Bank:</strong>
            <p>{bankAdmin}</p>
            <input
              type="text"
              value={editedBank}
              onChange={(e) => setEditedBank(e.target.value)}
            />
            <button onClick={handleSaveBank}>Save</button>
          </div>
        </div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
};



export default Admin;
