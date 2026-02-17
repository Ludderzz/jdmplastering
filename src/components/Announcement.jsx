import React from 'react';

const TopBar = () => {
  return (
    <div className="w-full bg-slate-900 border-b border-white/10 py-3 px-4 z-[99]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Local Text with Pulsing Notification Icon */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Plastering & Rendering in <span className="text-amber-500">Nailsea</span> & surrounding areas
          </p>
        </div>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/447896560566" // Replace with his actual number
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-white hover:text-slate-900 text-white px-6 py-2 rounded-sm text-[10px] font-black transition-all duration-300 shadow-lg tracking-widest"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.887-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.89-11.888 11.89-2.015 0-3.991-.511-5.741-1.486l-6.251 1.641zm6.273-3.705l.449.266c1.472.873 3.166 1.334 4.89 1.334 5.01 0 9.088-4.077 9.088-9.087 0-2.431-.946-4.715-2.667-6.437-1.72-1.72-4.004-2.667-6.421-2.667-5.01 0-9.088 4.078-9.088 9.088 0 1.761.508 3.48 1.47 4.968l.292.45-1.01 3.693 3.797-.996z" />
          </svg>
          WHATSAPP US
        </a>
      </div>
    </div>
  );
};

export default TopBar;