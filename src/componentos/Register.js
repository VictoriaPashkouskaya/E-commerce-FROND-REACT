// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import '../Styled/auth.scss'; 

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to register the user
      const response = await axios.post('http://localhost:3001/api/auth/register', {
        username,
        email,
        password,
        role
      });

      if (response.status === 201) {
        setSuccess('Registration successful');
        setError('');
        
        // Optionally handle token storage or other actions here
        
        // Redirect to the login page after successful registration
        navigate('/my-app/src/componentos/Perfil.js');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <p>Already have an account? <Link to="/login">Log in here</Link></p> {/* Link to login page */}
      </form>
    </div>
  );
};

export default RegisterForm;
