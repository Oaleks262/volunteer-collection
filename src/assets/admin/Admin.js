import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { AdminApi } from '../api/api.js';

const Admin = () => {
  const { isAuthenticated } = useContext(AuthContext);
  
  const [editedTitle, setEditedTitle] = useState('');
  const [editedAbout, setEditedAbout] = useState('');
  const [editedBank, setEditedBank] = useState('');

  const [bankAdmin, setBankAdmin] = useState('')
  const [titleAdmin, setTitleAdmin] = useState('')
  const [aboutAdmin, setAboutAdmin] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        AdminApi.setToken(token);
          const response = await AdminApi.getAdminBank();
          console.log(response.data);
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
        console.log(response.data);
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
        console.log(response.data);
        setAboutAdmin(response?.data?.about || "Default Title");
    } catch (error) {
        console.error("Error fetching title:", error);
        setAboutAdmin("Default Title");
    }
};

  fetchData();
}, []);




  const handleSaveTitle = () => {
    AdminApi.putAdminTitle({ title: editedTitle });
  };

  const handleSaveAbout = () => {
    AdminApi.putAdminAbout({ about: editedAbout });
  };

  const handleSaveBank = () => {
    AdminApi.putAdminBank({ bank: editedBank });
  };

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

    </div>
  );
};

export default Admin;
