
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styled/profile.scss'; 

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Функция для загрузки данных пользователя
    const fetchUserData = async () => {
      try {
        // Сделайте запрос к серверу для получения информации о пользователе
        const response = await axios.get('http://localhost:3001/api/users/me'); // Обновите путь в зависимости от вашего API
        setUser(response.data);
      } catch (err) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Role:</strong> {user.role}
      </div>
      {/* datos */}
    </div>
  );
};

export default Profile;
