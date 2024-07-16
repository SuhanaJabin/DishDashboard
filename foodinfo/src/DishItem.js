import React from 'react';

const DishItem = ({ dish, togglePublish }) => {
  const dishItemStyle = {
    display: 'inline-block',
    margin: '10px',
    textAlign: 'center',
    position: 'relative', // Ensure position relative for overlay positioning
  };

  const imageStyle = {
    width: '200px',
    height: '150px',
  };

  return (
    <div className="dish-item " style={dishItemStyle}>
      <div className="overlay">
        
        <div className='bg-gray-400 bg-opacity-50 font-bold text-2xl  p-10 rounded-3xl ml-7'>
        <img src={dish.imageUrl}  alt={dish.dishName} className="rounded-3xl" style={imageStyle} />
          <h3 className='mt-5'>{dish.dishName}</h3>
          <p>Published: {dish.isPublished ? 'Yes' : 'No'}</p>
          <button className="bg-gray-500 p-5 mt-10 mb-5 rounded-2xl transition-all hover:text-gray-600 duration-500 font-semibold  hover:bg-gray-100" onClick={() => togglePublish(dish.id)}>Toggle Publish</button>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
