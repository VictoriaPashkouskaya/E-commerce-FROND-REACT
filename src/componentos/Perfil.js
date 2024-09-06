// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styled/profile.scss'; // Стили для профиля

const Profile = () => {
  const [user, setUser] = useState(null); // Информация о юзере
  const [cart, setCart] = useState([]);   // Корзина покупок
  const [profileImage, setProfileImage] = useState(null); // Фото профиля
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Эффект для загрузки данных пользователя при монтировании компонента
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/user/profile'); // Запрос данных профиля
        setUser(response.data.user);
        setCart(response.data.cart); // Предположим, что корзина возвращается с данными юзера
      } catch (err) {
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const response = await axios.post('http://localhost:3001/api/user/uploadProfileImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setProfileImage(response.data.profileImageUrl);
      setSuccess('Profile image updated successfully');
    } catch (err) {
      setError('Image upload failed');
    }
  };

  const handleLogout = () => {
    // Логика выхода (например, удаление токена)
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h2>Welcome, {user.username}</h2>
      
      {/* Фото профиля */}
      <div className="profile-image">
        <img src={profileImage || user.profileImage || '/default-profile.png'} alt="Profile" />
        <input type="file" onChange={handleImageUpload} />
      </div>

      {/* Информация о пользователе */}
      <div className="user-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>

      {/* Корзина покупок */}
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

      {/* Кнопка выхода */}
      <button className="logout-btn" onClick={handleLogout}>
        Log Out
      </button>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default Profile;
