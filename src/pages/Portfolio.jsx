import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

// 1. Performance Optimization: Keep eager true for metadata, but we will handle rendering carefully
const imageModules = import.meta.glob('../assets/portfolio/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp,WEBP}', { eager: true });

const projectImages = Object.entries(imageModules).map(([path, mod], index) => {
  const isOutside = path.toLowerCase().includes('outside');
  const fileName = path.split('/').pop().split('.')[0].replace(/-/g, ' ');
  
  // Geographic Keyword Rotation for SEO "More Everything"
  const areas = ['Nailsea', 'Clevedon', 'Bristol', 'Portishead', 'Yatton', 'Backwell'];
  const seoArea = areas[index % areas.length]; 

  return {
    id: index,
    src: mod.default,
    category: isOutside ? 'External' : 'Internal',
    title: `${fileName.charAt(0).toUpperCase() + fileName.slice(1)}`,
    seoAlt: `${fileName} - Expert Plastering and Rendering project in ${seoArea}, North Somerset`,
    area: seoArea
  };
});

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState(null);

  // Memoize filtered results to prevent unnecessary re-renders (Performance boost)
  const filtered = useMemo(() => {
    return filter === 'All' 
      ? projectImages 
      : projectImages.filter(p => p.category === filter);
  }, [filter]);

  const siteUrl = "https://www.jdmplastering.co.uk"; // Replace with your live URL

  return (
    <div className="bg-white min-h-screen pb-20 overflow-auto">
      <Helmet>
        <title>Project Gallery | JDM Plastering & Rendering Portfolio</title>
        <meta name="description" content="Browse our gallery of professional plastering and rendering projects. From K-Rend in Clevedon to interior skimming in Nailsea and Bristol." />
        <link rel="canonical" href={`${siteUrl}/portfolio`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": siteUrl
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Portfolio",
              "item": `${siteUrl}/portfolio`
            }]
          })}
        </script>
      </Helmet>

      {/* --- HEADER --- */}
      <section className="relative bg-slate-900 py-24 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10 px-4">
            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block underline decoration-amber-500/30 underline-offset-8">Our Craftsmanship</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
              WORK <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f59e0b' }}>GALLERY</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
                A showcase of <span className="text-white font-medium italic">flawless finishes</span>. Explore our recent external rendering and internal plastering projects.
            </p>
        </div>
      </section>

      {/* --- FILTER NAVIGATION --- */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 py-6 mb-10 shadow-sm">
        <div className="flex justify-center gap-2 md:gap-4 px-4">
            {['All', 'Internal', 'External'].map(cat => (
            <button 
                key={cat}
                onClick={() => { setFilter(cat); setVisibleCount(12); }}
                className={`px-6 md:px-10 py-3 rounded-sm text-xs font-black uppercase tracking-widest transition-all duration-300 border-b-2 ${
                filter === cat 
                    ? 'border-amber-500 text-slate-900 bg-slate-50' 
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
            >
                {cat}
            </button>
            ))}
        </div>
      </nav>

      {/* --- PORTFOLIO GRID --- */}
      <main className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.slice(0, visibleCount).map((img, index) => (
            <article 
                key={img.id} 
                onClick={() => setSelectedImage(img)}
                className="group relative h-80 overflow-hidden rounded-sm bg-slate-200 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={img.src} 
                alt={img.seoAlt} 
                // Performance Boost: Only load the first 4 images with "eager" priority
                loading={index < 4 ? "eager" : "lazy"} 
                fetchpriority={index < 4 ? "high" : "low"}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-500 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 text-center">
                 <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{img.category} Work</span>
                 <h3 className="text-white font-bold tracking-tight text-lg uppercase leading-tight">{img.title}</h3>
                 <p className="text-slate-400 text-[10px] mt-1 uppercase tracking-tighter">Location: {img.area}</p>
                 <div className="mt-4 h-8 w-8 rounded-full border border-amber-500 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                    +
                 </div>
              </div>
            </article>
          ))}
        </div>

        {/* --- LOAD MORE --- */}
        {visibleCount < filtered.length && (
          <div className="text-center py-20">
            <button 
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-12 py-4 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-xl"
            >
              Load More Projects
            </button>
          </div>
        )}
      </main>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] bg-slate-900/98 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
        >
            <button className="absolute top-6 right-6 text-white text-5xl font-thin hover:text-amber-500 transition-colors">&times;</button>
            <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
                <img 
                    src={selectedImage.src} 
                    alt={selectedImage.seoAlt} 
                    className="max-h-[70vh] w-auto mx-auto rounded-sm shadow-2xl"
                />
                <div className="mt-8 text-center bg-white/5 p-6 backdrop-blur-sm rounded-lg border border-white/10">
                    <span className="text-amber-500 text-xs font-black uppercase tracking-widest">{selectedImage.category} Specialist</span>
                    <h2 className="text-white text-4xl font-black uppercase tracking-tighter mt-2">{selectedImage.title}</h2>
                    <p className="text-slate-400 mt-2 font-light">Completed in {selectedImage.area}, North Somerset.</p>
                    <button 
                        onClick={() => setSelectedImage(null)}
                        className="mt-6 text-amber-500 uppercase text-[10px] font-bold tracking-widest border-b border-amber-500 pb-1"
                    >
                        Close Gallery
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;