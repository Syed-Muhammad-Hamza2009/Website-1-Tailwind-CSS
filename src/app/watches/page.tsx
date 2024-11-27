import { watch } from 'fs';
import React from 'react'

const page = () => {
  const watchData =[
    { id: 1, name: 'Rolex', price: 15000, description: 'Luxury watch', image: '/rolex.jpg' },
    { id: 2, name: 'Casio', price: 8000, description: 'Sporty design', image: '/casio.jpg' },
    { id: 3, name: 'Fastrack', price: 11000, description: 'Elegant timepiece', image: '/fastrack.jpg' },
    { id: 4, name: 'Fossil', price: 5000, description: 'Affordable and reliable', image: '/fossil.jpg' },
    { id: 5, name: 'Rado', price: 7000, description: 'Sporty and stylish', image: '/rado.jpg' },
    { id: 6, name: 'Titan', price: 6000, description: 'Smart Utility', image: '/titan.jpg' },
  ];

  return (
    <div className='watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
      {watchData.map(watch => (
        <div key={watch.id} className='watch-card bg-white p-5 rounded-md shadow-md text-center'>
          <img src={watch.image} alt={watch.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110 '></img>
          <h3 className='mt-4 text-2xl font-bold'>{watch.name}</h3>
          <p className='text-gray-500'>{watch.description}</p>
          <div className='price text-blue-500 text-xl font-semibold mt-2'>${watch.price}</div>
          <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded:md'>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default page;
