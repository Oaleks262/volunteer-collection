import React, { useContext, useState, useEffect } from 'react';
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
      // Отримуємо ідентифікатор (id) поточного titleAdmin
      const titleId = titleAdmin?._id;

      // Видаляємо існуючий title за його id
      if (titleId) {
          await AdminApi.deleteAdminTitle(titleId);
      }

      // Відправляємо запит на створення нового title
      const response = await AdminApi.putAdminTitle({ title: editedTitle });

      // Оновлюємо стан titleAdmin з новим title
      setTitleAdmin(response?.data?.title || "Default Title");
  } catch (error) {
      console.error("Error saving title:", error);
      // Додатково: вивести повідомлення про помилку
  }
};


const handleSaveAbout = async () => {
  try {
    const aboutId = aboutAdmin?._id;
    if (aboutId) {
      await AdminApi.deleteAdminAbout(aboutId);
    }
    await AdminApi.putAdminAbout({ about: editedAbout });
    setAboutAdmin(editedAbout);
  } catch (error) {
    console.error("Error saving about:", error);
  }
};

const handleSaveBank = async () => {
  try {
    const bankId = bankAdmin?._id;
    if (bankId) {
      await AdminApi.deleteAdminBank(bankId);
    }
    await AdminApi.putAdminBank({ bank: editedBank });
    setBankAdmin(editedBank);
  } catch (error) {
    console.error("Error saving bank:", error);
  }
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
