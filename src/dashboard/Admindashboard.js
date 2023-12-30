// Admindashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

const Admindashboard = () => {
  return (
    <div className="flex">
      <div className='w-1/5'>
        <Sidebar />
      </div>
      <div className='flex-grow'>
        <div className='mb-4'>
          <Navbar />
        </div>
        <div className='ml-8'>
          {/* Use Outlet to render the nested route */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;
