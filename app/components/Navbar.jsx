"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/Images/logo-dark.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow py-6 z-50" id="navbar">
      <div className="container mx-auto px-20 flex items-center justify-between">
        <a className="logo" href="#">
            <Image src={logo} alt='' width={100}/>
        </a>
        <button
          className="lg:hidden"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarCollapse"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:justify-end`} id="navbarCollapse">
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 font-medium" id="navbar-navlist">
            <li className="nav-item">
              <a href="#home" className="nav-link text-gray-700 hover:text-blue-800">Home</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link text-gray-700 hover:text-blue-800">Services</a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link text-gray-700 hover:text-blue-800">Features</a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link text-gray-700 hover:text-blue-800">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link text-gray-700 hover:text-blue-800">Team</a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link text-gray-700 hover:text-blue-800">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-gray-700 hover:text-blue-800">Contact Us</a>
            </li>
          </ul>
          <a href="#" className="btn bg-blue-500 text-white font-medium text-sm rounded-full lg:ml-6 px-3 py-2">Buy Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
