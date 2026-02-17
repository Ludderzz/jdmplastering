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
                /* SEO: Alt text should include main keyword and location */
                alt="JDM Plastering & Rendering North Somerset" 
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
              {/* SEO: Naturally include location keywords */}
              Expert <span className="text-slate-300 font-medium">plastering and rendering services</span> in Nailsea, Clevedon, Portishead, and across Bristol. Professional finishes for residential and commercial projects.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:pl-10">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-amber-500 transition-colors">About JDM Plastering</Link></li>
                <li><Link to="/portfolio" className="hover:text-amber-500 transition-colors">Project Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Get A Free Quote</Link></li>
              </ul>
            </nav>
          </div>

          {/* Services - SEO Keyword Goldmine */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Our Specialist Services</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">K Rend & Thin Coat Systems</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Monocouche Rendering</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Traditional Lime Plastering</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Internal Skimming & Gypsum</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Damp Proofing Treatments</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">OCR & Sand/Cement Render</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Us</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-center gap-4">
                <span className="text-lg">📍</span>
                <span className="font-light text-slate-400">Serving <span className="text-slate-200">Nailsea, Clevedon & Bristol</span></span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-lg">📞</span>
                {/* SEO: Use tel: link for click-to-call tracking */}
                <a href="tel:+447896560566" className="font-bold text-slate-200 hover:text-amber-500 transition-colors">07896 560566</a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em]">
          <p className="text-slate-600 font-bold">&copy; {currentYear} JDM Plastering | Registered & Insured</p>
          <div className="h-[1px] w-12 bg-white/5 my-4 md:hidden"></div>
          <p className="text-slate-700">
            Site by <span className="text-slate-500 hover:text-amber-500 transition-colors cursor-pointer">WebCircuitUK</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;