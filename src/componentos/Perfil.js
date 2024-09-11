import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Styled/profile.scss' 

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setError('User ID is missing');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/profile/${id}`);
        setUser(response.data.user);
        setCart(response.data.cart);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [id]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const response = await axios.post('http://localhost:3001/api/user/uploadProfileImage', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setProfileImage(response.data.profileImageUrl);
      setSuccess('Profile image updated successfully');
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Image upload failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h2>Welcome, {user.username}</h2>
      
      <div className="profile-image">
        <img 
          src={profileImage || user.avatar || '/default-profile.png'} 
          alt="Profile" 
        />
        <input 
          type="file" 
          onChange={handleImageUpload} 
        />
      </div>

      <div className="user-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Date of Birth:</strong> {user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'Not provided'}</p>
        <p><strong>Address:</strong> {user.address || 'Not provided'}</p>
        <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>

      <div className="user-cart">
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Log Out
      </button>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default Profile;
