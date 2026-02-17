import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview (1).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white shadow-xl sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group" aria-label="JDM Plastering Home">
              <img 
                src={logo} 
                alt="JDM Plastering & Rendering" 
                className="h-14 md:h-20 w-auto object-contain transition-transform group-hover:scale-105" 
                style={{ 
                  filter: 'invert(68%) sepia(85%) saturate(1834%) hue-rotate(360deg) brightness(101%) contrast(94%) drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' 
                }}
              />
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] uppercase tracking-[0.25em] font-black transition-all duration-300 hover:text-amber-500 ${
                    isActive(link.path) ? 'text-amber-500 underline underline-offset-8 decoration-2' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-white text-slate-900 px-8 py-3 rounded-none font-black uppercase text-[10px] tracking-[0.2em] transition-all active:scale-95 shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)]"
            >
              Get a Quote
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="p-2 text-amber-500 hover:text-white transition-colors"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-900 ${
          isOpen ? 'max-h-[500px] border-t border-white/5' : 'max-h-0'
        }`}
      >
        <div className="px-6 pt-6 pb-10 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-4 text-center text-sm font-black uppercase tracking-[0.3em] transition-colors ${
                isActive(link.path) ? 'text-amber-500' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-amber-500 text-slate-900 py-5 text-center font-black uppercase tracking-[0.25em] text-xs shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;