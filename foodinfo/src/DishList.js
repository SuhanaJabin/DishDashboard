// DishList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DishItem from './DishItem';

const DishList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/dishes/?format=json');
      setDishes(response.data); 
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  const togglePublish = async (id) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/dishes/${id}/toggle_publish/`);
      setDishes(dishes.map(dish => dish.id === id ? { ...dish, isPublished: response.data.isPublished } : dish));
    } catch (error) {
      console.error('Error toggling publish status:', error);
    }
  };

  return (
    <div  className='text-center'>
  
      <h1 className='text-gray-300 font-bold text-7xl text-center mt-32 mb-20' >Dish Management Dashboard</h1>
      {dishes.map(dish => (
        <DishItem key={dish.id} dish={dish} togglePublish={() => togglePublish(dish.id)} />
      ))}
    </div>
  );
};

export default DishList;
