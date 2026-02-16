import { Link } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview (1).png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-500 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Bio */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-8">
              <img 
                src={logo} 
                alt="JDM Logo" 
                /* This filter converts black to Amber (#f59e0b). 
                   No more white boxes. It will look like a gold leaf logo.
                */
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                style={{ 
                  filter: 'invert(68%) sepia(85%) saturate(1834%) hue-rotate(360deg) brightness(101%) contrast(94%)' 
                }} 
              />
              <div className="flex flex-col border-l border-white/10 pl-3">
                <span className="text-xl font-black tracking-tighter text-white leading-none">JDM</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-amber-500 font-bold">Plastering</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed font-light pr-4">
              Providing the highest standard of interior and exterior finishes across North Somerset. 
              Clean, reliable, and professional.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:pl-10">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-amber-500 transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Get A Quote</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">What We Do</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="hover:text-slate-300 transition-colors cursor-default">British Gypsum Plastering</li>
              <li className="hover:text-slate-300 transition-colors cursor-default">Traditional Internal Lime Plastering</li>
              <li className="hover:text-slate-300 transition-colors cursor-default">Damp Proofing</li>
              <li className="hover:text-slate-300 transition-colors cursor-default">Original Sand & Cement Rendering</li>
              <li className="hover:text-slate-300 transition-colors cursor-default">Traditional Lime Rendering</li>
              <li className="hover:text-slate-300 transition-colors cursor-default">Webber Monocouche Rendering</li>
              <li className="hover:text-slate-300 transition-colors cursor-default">OCR Render</li>
              <li className="hover:text-slate-300 transition-colors cursor-default">K Rend Thin Coat Grit Render</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-amber-500 border border-white/5">📍</div>
                <span className="font-light">Nailsea & Bristol</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-amber-500 border border-white/5">📞</div>
                <span className="font-bold text-slate-300">07896 560566</span>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em]">
          <p className="text-slate-600 font-bold">&copy; {currentYear} JDM Plastering</p>
          <div className="h-[1px] w-12 bg-white/5 my-4 md:hidden"></div>
          <p className="text-slate-700">
            Crafted by <span className="text-slate-500 hover:text-amber-500 transition-colors cursor-pointer">WebCircuitUK</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;