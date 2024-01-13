import React from 'react';

const MyComponent = () => (
  <>
    <div className="bg-blue-500 h-1"></div>
    <div className='bg-blue-800 h-2'></div>

    <nav className='flex justify-between bg-red-400 h-100 p-6'>

      <div className='flex items-center'>
        <span className='font-bold text-xl text-white transition-transform transform hover:scale-110'>Kalvium</span>
        <a href="" className='ml-5 mr-5 text-red-100 hover:text-blue-300 transition-colors duration-300'>About us</a>
        <a href="" className='mr-5 text-red-100 hover:text-blue-300 transition-colors duration-300'>Contacts</a>
        <a href="" className='text-red-100 hover:text-blue-300 transition-colors duration-300'>Courses</a>
      </div>

      <button className="border border-white p-2 px-5 rounded text-white font-bold hover:bg-blue-500 transition-colors duration-300">Login</button>
    </nav>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5 mt-5 transition-colors duration-300">
      Button One
    </button>

    <div className="bg-red-100 text-red-500 p-5 rounded-md w-500 border-2 border-solid border-red-500 ml-10 mr-10 mt-5">
      <span className='font-bold'>Alert!</span> It's Awesome!
    </div>

    <div className="bg-white-100 text-black-500 p-5 rounded-md w-1/5 border-2 border-solid mx-auto mt-10 transition-transform transform hover:scale-105">
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Logo" className="h-8 mr-2" />
      <span>
        <h3 className="font-bold text-xl">Kalvium Store</h3>
        <p className="text-gray-500">You have a new course</p>
      </span>
    </div>

    <div className="bg-gray-300 text-black p-5 rounded-md w-5/5 border-2 border-solid mx-auto  text-center mt-20">
      <h3 className="font-bold text-xl">
      © 2021 Copyright: <span className="text-gray-500">Kalvium</span>
      </h3>
    </div>
  </>
);

export default MyComponent;
