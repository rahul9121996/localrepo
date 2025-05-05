import React from 'react';
import { Link } from 'react-router';

const NavbarWithLogin= () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
         
          <div className="pl-4">
            <Link to="/">
              <img
                src="https://www.prolegion.com/_next/image?url=https%3A%2F%2Fprolegion-assets.s3.ap-south-1.amazonaws.com%2FAssets%2FProlegion_Logo_New.png&w=1920&q=75"
                alt="logo"
                className="w-[150px] h-[37px]"
              />
            </Link>
          </div>

         
          <div className="hidden lg:flex space-x-8">
            <Link to="/solutions" className="text-gray-700 hover:text-blue-500 font-bold">Solutions</Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-blue-500 font-bold">Marketplace</Link>
            <Link to="/intellica" className="text-gray-700 hover:text-blue-500 font-bold">Intellica</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-500 font-bold">Pricing</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-500 font-bold">Blog</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500 font-bold">About</Link>
            <Link to="/support" className="text-gray-700 hover:text-blue-500 font-bold">Support</Link>
          </div>

        
          <div className="hidden lg:flex items-center space-x-2">
            <img
              src="https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/Homepagesvgs/LoginSvgHomepage.svg"
              alt="login-icon"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-extrabold text-xl">Login</span>
            <button className="bg-white font-bold text-blue-500 border-4 border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 hover:text-white">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavbarWithLogin;
