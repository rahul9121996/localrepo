import { Link } from 'react-router';

const SideDrawer = ({ onClose, onLoginClick }) => {
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
    <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out">
      <div className="p-4">
        <button onClick={onClose} className="text-gray-900 focus:outline-none mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex justify-between items-center mb-4 border-b-2 border-blue-500 pb-2">
          <button onClick={onLoginClick} className="text-gray-700 font-bold">Login</button>
          <Link to="/signup" className="bg-white font-bold text-blue-500 border-2 border-blue-500 rounded-lg px-4 py-1 hover:bg-blue-600 hover:text-white">Sign Up</Link>
        </div>

        <div className="flex flex-col space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              className="text-gray-700 hover:text-blue-500 font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
