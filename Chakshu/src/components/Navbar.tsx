import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-card fixed w-full z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Eye className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-semibold text-blue-900">
            <span className="hindi-text">चक्षु</span>
          </span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-blue-900 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/dashboard" className="text-blue-900 hover:text-blue-600 transition-colors">Dashboard</Link>
          <Link to="/protection" className="text-blue-900 hover:text-blue-600 transition-colors">Protection</Link>
          <Link to="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;