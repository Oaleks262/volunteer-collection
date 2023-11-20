import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { AdminApi } from "../api/api";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated, login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await AdminApi.loginAdmin({ email, password });
      
      // Опціонально можна перевірити статус відповіді
      if (response.status === 200) {
        const userData = response.data;
        const token = await AdminApi.setToken(userData.token);
        localStorage.setItem('authToken', token);
        login(token); // Успішний логін
      } else {
        // Обробка невірного статусу, наприклад, показати повідомлення про помилку
        setError({ message: 'Invalid credentials' });
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // Завершуємо загрузку, навіть якщо є помилка
    }
  };
  

  if (isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
    </div>
  );
};

export default Login;