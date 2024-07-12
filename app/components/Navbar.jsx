"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/Images/logo-dark.png';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#team', label: 'Team' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('#home');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '#home';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop) {
        currentSectionId = `#${section.getAttribute('id')}`;
      }
    });

    setActiveTab(currentSectionId);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-gray-50 shadow py-6 z-50 flex" id="navbar">
      <div className="container lg:w-4/5 mx-auto px-4 md:px-20 pl-8 flex flex-col lg:items-center lg:flex-row justify-between">
        <a className="logo" href="#">
          <Image src={logo} alt='' width={100} />
        </a>
        <div
          className={`${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} transition-all duration-300 lg:max-h-max lg:opacity-100 lg:flex lg:items-center lg:justify-end`}
          id="navbarCollapse"
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 font-medium lg:mt-0 mt-6">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeTab === item.href ? 'text-blue-800' : 'text-gray-700 hover:text-blue-800'}`}
                  onClick={() => setIsOpen(!open)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="btn bg-blue-500 text-white font-medium text-sm rounded-full lg:ml-6 lg:mt-0 mt-6 px-3 py-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            Buy Now
          </button>
        </div>
      </div>
      <div className="lg:hidden pr-8">
          <button
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <svg viewBox="0 0 100 80" width="20" height="20">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </button>
        </div>
    </nav>
  );
};

export default Navbar;
