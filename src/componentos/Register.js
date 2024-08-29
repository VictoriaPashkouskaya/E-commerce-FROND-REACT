import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styled/auth.scss';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика регистрации
    console.log('Register:', name, email, password);
    // После успешной регистрации перенаправляем пользователя на страницу профиля
    navigate('/profile');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
}

export default Register;
