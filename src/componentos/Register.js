import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styled/auth.scss';

function Register() {
  const [name, setName] = useState(''); // State for user's name
  const [email, setEmail] = useState(''); // State for user's email
  const [password, setPassword] = useState(''); // State for user's password
  const [error, setError] = useState(''); // State for handling error messages
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Send registration data to the server
      const response = await fetch('/api/register', { // Replace with  API 
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Sending JSON data
        },
        body: JSON.stringify({ name, email, password }), // Convert data to JSON
      });

      if (!response.ok) { // Check if response status is not OK
        throw new Error('Failed to register'); // Throw an error if registration fails
      }

      // Redirect to profile page after successful registration
      navigate('/profile');
    } catch (err) {
      // Handle errors and display error message to the user
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required // Ensure the field is not empty
            />
          </div>
          <div>
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required // Ensure the field is not empty
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required // Ensure the field is not empty
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Log in</Link></p> {/* Link to login page */}
      </div>
    </div>
  );
}

export default Register;
