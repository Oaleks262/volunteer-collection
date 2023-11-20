// import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from './AuthContext';
// import { AdminApi } from '../api/api.js'; // Шлях до вашого файлу з API

// const Admin = () => {
//   const { isAuthenticated } = useContext(AuthContext);
  
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedAbout, setEditedAbout] = useState('');
//   const [editedBank, setEditedBank] = useState('');

//   useEffect(() => {
//     if (isAuthenticated) {
//       eventLoading(); 
//     }
//   }, [isAuthenticated, eventLoading]);

//   const handleSaveTitle = () => {
//     AdminApi.putAdminTitle({ title: editedTitle });
//     eventLoading(); // Оновлює дані після збереження
//   };

//   const handleSaveAbout = () => {
//     AdminApi.putAdminAbout({ about: editedAbout });
//     eventLoading(); // Оновлює дані після збереження
//   };

//   const handleSaveBank = () => {
//     AdminApi.putAdminBank({ bank: editedBank });
//     eventLoading(); // Оновлює дані після збереження
//   };

//   return (
//     <div>
//       <h2>Admin Page</h2>
//       {isLoading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
//       {adminData && (
//         <div>
//           <div>
//             <strong>Title:</strong>
//             <input
//               type="text"
//               value={editedTitle !== '' ? editedTitle : adminData.title}
//               onChange={(e) => setEditedTitle(e.target.value)}
//             />
//             <button onClick={handleSaveTitle}>Save</button>
//           </div>
//           <div>
//             <strong>About:</strong>
//             <input
//               type="text"
//               value={editedAbout !== '' ? editedAbout : adminData.about}
//               onChange={(e) => setEditedAbout(e.target.value)}
//             />
//             <button onClick={handleSaveAbout}>Save</button>
//           </div>
//           <div>
//             <strong>Bank:</strong>
//             <input
//               type="text"
//               value={editedBank !== '' ? editedBank : adminData.bank}
//               onChange={(e) => setEditedBank(e.target.value)}
//             />
//             <button onClick={handleSaveBank}>Save</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Admin;
