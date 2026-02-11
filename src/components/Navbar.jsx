import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview (1).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="JDM Plastering" 
                /* 1. Removed the extra JDM text div for a cleaner look.
                   2. Applied the Amber filter to turn black logo text into gold.
                   3. Increased height slightly for better visibility.
                */
                className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" 
                style={{ 
                  filter: 'invert(68%) sepia(85%) saturate(1834%) hue-rotate(360deg) brightness(101%) contrast(94%)' 
                }}
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm uppercase tracking-widest hover:text-amber-500 transition-colors duration-200 font-bold"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-white text-slate-900 px-6 py-2.5 rounded-sm font-black uppercase text-xs tracking-widest transition-all active:scale-95 shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-amber-500 hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/5">
          <div className="px-4 pt-4 pb-8 space-y-2 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-bold uppercase tracking-widest border-b border-white/5 last:border-0 hover:text-amber-500"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-amber-500 text-slate-900 py-4 font-black uppercase tracking-widest"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;