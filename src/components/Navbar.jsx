import React from 'react';
import { Link } from "react-router-dom";
import MyForm from '../pages/MyForm';
// import {BrowserRouter as Router , useNavigate } from 'react-router-dom';

const Navbar = () => {
    // const navigate = useNavigate();
    // const handleNavigate = () => {
    //     // Use navigate to switch to the specified page
    //     navigate('/view-all-poetry');
    //   };
  return (

    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div  className="text-white text-lg font-semibold">
          Create Poetry
        </div>

        <div className="hidden md:flex space-x-4">
        {/* <Link to="/add"> */}
          <p >

            Create Poetry
            </p>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <p>
            View All Poetry
            </p>
          {/* </Link> */}
          {/* <a href="#view-all-poetry" className="text-white hover:text-gray-300">
            View All Poetry
          </a> */}
        </div>

        {/* Responsive Menu Button for small screens */}
        <div className="md:hidden">
          {/* Add your responsive menu button (e.g., a hamburger icon) */}
        </div>
      </div>
    </nav>


  );
};

export default Navbar;
