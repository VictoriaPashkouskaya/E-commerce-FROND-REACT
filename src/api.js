import axios from 'axios';

// Используйте переменную окружения для базового URL
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${apiUrl}/categories`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении категорий:', error);
    throw error;
  }
};

