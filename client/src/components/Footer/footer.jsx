import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './footer.scss' // Assuming you have a CSS module for styles

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mani Omar. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/MANIOMARDEV" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/omarmani/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:mani@omarmani.com" className="hover:text-teal-400">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
