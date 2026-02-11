import { useState } from 'react';

const imageModules = import.meta.glob('../assets/portfolio/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });

const projectImages = Object.entries(imageModules).map(([path, mod], index) => {
  const isOutside = path.toLowerCase().includes('outside');
  // Extracting a cleaner name from the file path if possible
  const fileName = path.split('/').pop().split('.')[0].replace(/-/g, ' ');
  
  return {
    id: index,
    src: mod.default,
    category: isOutside ? 'External' : 'Internal',
    title: fileName.charAt(0).toUpperCase() + fileName.slice(1)
  };
});

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState(null); // Lightbox state

  const filtered = filter === 'All' 
    ? projectImages 
    : projectImages.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pb-20 overflow-auto">
      {/* --- HEADER --- */}
      <section className="relative bg-slate-900 py-24 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {/* Subtle grid pattern for texture */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10">
            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our Craftsmanship</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                WORK <span className="text-transparent" style={{ WebkitTextStroke: '1px #f59e0b' }}>GALLERY</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
                Explore our collection of {projectImages.length} professional plastering and rendering projects across the region.
            </p>
        </div>
      </section>

      {/* --- FILTER NAVIGATION --- */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6 mb-10">
        <div className="flex justify-center gap-2 md:gap-4 px-4">
            {['All', 'Internal', 'External'].map(cat => (
            <button 
                key={cat}
                onClick={() => { setFilter(cat); setVisibleCount(12); }}
                className={`px-8 py-2.5 rounded-sm text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-transparent text-slate-400 hover:text-slate-900'
                }`}
            >
                {cat}
            </button>
            ))}
        </div>
      </div>

      {/* --- PORTFOLIO GRID --- */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.slice(0, visibleCount).map((img) => (
            <div 
                key={img.id} 
                onClick={() => setSelectedImage(img)}
                className="group relative h-80 overflow-hidden rounded-sm bg-slate-100 cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-500 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100">
                 <div className="w-10 h-[1px] bg-amber-500 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"></div>
                 <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{img.category}</span>
                 <h3 className="text-white font-bold text-center tracking-tight">{img.title}</h3>
                 <span className="mt-4 text-white/50 text-xs font-light">View Project</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- NO RESULTS STATE --- */}
        {filtered.length === 0 && (
            <div className="text-center py-20">
                <p className="text-slate-400 italic">No projects found in this category.</p>
            </div>
        )}

        {/* --- LOAD MORE --- */}
        {visibleCount < filtered.length && (
          <div className="text-center py-20">
            <button 
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="group relative inline-flex items-center gap-3 bg-white text-slate-900 border-2 border-slate-900 px-12 py-4 font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              Load More Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        )}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
        >
            <button className="absolute top-10 right-10 text-white text-4xl font-light hover:text-amber-500 transition-colors">&times;</button>
            <div className="max-w-5xl max-h-full relative" onClick={e => e.stopPropagation()}>
                <img 
                    src={selectedImage.src} 
                    alt={selectedImage.title} 
                    className="max-h-[80vh] w-auto mx-auto rounded-sm shadow-2xl"
                />
                <div className="mt-6 text-center">
                    <span className="text-amber-500 text-xs font-black uppercase tracking-widest">{selectedImage.category}</span>
                    <h2 className="text-white text-2xl font-bold mt-2">{selectedImage.title}</h2>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;