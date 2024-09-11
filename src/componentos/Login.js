import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styled/auth.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // logica aut
    console.log('Login:', email, password);
    // ruta for profile
    navigate('/profile');
  };

  return (
    <div className="register-form">
      <div className="register-form">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Log In</button>
        </form>
        <p>Don't have an account? <Link to="/register">Create one</Link></p>
      </div>
    </div>
  );
}

export default Login;
