import { useState } from 'react';
import { Link } from 'react-router';
import SideDrawer from './SideDrawer';
import LoginModal from './LoginModal';

export default function ProlegionNavbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Intellica', path: '/intellica' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <>
      <nav className="bg-white shadow-md w-full fixed top-0 z-50">
        <div className="max-w-[100vw] mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="pl-4">
              <img
                src="https://www.prolegion.com/_next/image?url=https%3A%2F%2Fprolegion-assets.s3.ap-south-1.amazonaws.com%2FAssets%2FProlegion_Logo_New.png&w=1920&q=75"
                alt="logo"
                className="w-[150px] h-[37px]"
              />
            </div>

            <div className="hidden lg:flex flex-grow justify-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-blue-500 font-bold"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              <img
                src="https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/Homepagesvgs/LoginSvgHomepage.svg"
                alt="login"
              />
              <button
                onClick={() => setLoginOpen(true)}
                className="text-gray-700 hover:text-blue-500 font-extrabold text-xl flex items-center"
              >
                Login
              </button>
              <Link
                to="/signup"
                className="bg-white font-bold text-blue-500 border-4 border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 hover:text-white whitespace-nowrap"
              >
                Sign Up
              </Link>
            </div>

            <div className="lg:hidden flex items-center pr-4">
              <button
                onClick={() => setDrawerOpen(true)}
                className="text-gray-900 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isDrawerOpen && <SideDrawer onClose={() => setDrawerOpen(false)} 
       onLoginClick={() => {
        setDrawerOpen(false);
        setLoginOpen(true);
      }} />}

      {isLoginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </>
  );
}
