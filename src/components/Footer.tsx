import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black w-full h-20 flex justify-center items-center text-white'>
      <div className="flex flex-col items-center">
        <h1 className='font-bold text-xl mb-2'>Swiggy</h1>
        <p className="text-sm">© 2024 Swiggy Technologies Pvt. Ltd.</p>
        <div className="flex mt-2 space-x-4">
          <a href="#" className="text-sm">About Us</a>
          <a href="#" className="text-sm">Terms &amp; Conditions</a>
          <a href="#" className="text-sm">Privacy Policy</a>
          <a href="#" className="text-sm">Contact Us</a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
