import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react'; // Added for the lazy loader
import { Helmet } from 'react-helmet-async'; 

// Asset Imports
import heroImg from '../assets/portfolio/test.jpeg';
import img1Outside from '../assets/portfolio/img1-outside.webp';
import img19Outside from '../assets/portfolio/img19-outside.webp';
import img8Inside from '../assets/portfolio/img8-inside.webp';
import img10Inside from '../assets/portfolio/img10-inside.webp';
import dryling from "../assets/portfolio/dryling.webp";
import internal from "../assets/portfolio/inernalplastering.webp"
import pendering from "../assets/portfolio/pendering.webp"  

// The Performance Secret: Only load the map when the browser is idle/scrolled
const MapComponent = lazy(() => import('../components/ServiceMap'));

const Home = () => {
  const mapCenter = [51.4600, -2.7200]; 
  const serviceBoundary = [
    [51.6050, -2.6300], [51.5500, -2.5500], [51.4100, -2.4800], 
    [51.2900, -2.9800], [51.3500, -3.0500], [51.4400, -3.0200], [51.5200, -2.7800], 
  ];

  const specialistList = [
    "British Gypsum Plastering", "Traditional Internal Lime Plastering",
    "Professional Damp Proofing", "Original Sand & Cement Rendering",
    "Traditional Lime Rendering", "Webber Monocouche Rendering",
    "OCR Render Specialists", "K Rend Thin Coat Grit Render",
  ];

  const featured = [
    { img: img1Outside, title: 'External Rendering Clevedon', cat: 'Exterior', size: 'md:col-span-2' },
    { img: img19Outside, title: 'Modern Facade Bristol', cat: 'Exterior', size: 'md:col-span-1' },
    { img: img8Inside, title: 'Smooth Plastering Nailsea', cat: 'Interior', size: 'md:col-span-1' },
    { img: img10Inside, title: 'Complete Refurbishment', cat: 'Interior', size: 'md:col-span-2' },
  ];

  const services = [
    { title: 'Internal Plastering Nailsea', desc: 'Achieving a mirror-smooth finish ready for high-end decorating. Expert skimming and lime plastering.', img: internal },
    { title: 'External Rendering Clevedon', desc: 'Weatherproof, durable, and aesthetically stunning exterior solutions including K-Rend and Monocouche.', img: pendering },
    { title: 'Dry Lining Somerset', desc: 'Modern boarding techniques for perfect alignment, insulation, and soundproofing.', img: dryling },
  ];

  return (
    <div className="bg-white overflow-x-hidden antialiased">
      <Helmet>
        <title>JDM Plastering | Expert Plastering & Rendering Nailsea & Clevedon</title>
        <meta name="description" content="Professional plastering and rendering in Nailsea, Clevedon, and Bristol. Over 15 years experience in K-Rend, Monocouche, and traditional plastering." />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="High quality plastering services in Nailsea and Clevedon" 
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-20 text-white w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-8 bg-amber-500"></div>
              <span className="text-amber-500 text-sm font-bold uppercase tracking-[0.2em]">
                Plastering & Rendering Specialist | Nailsea
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-12 tracking-tighter">
              MASTER <br />
              <span className="text-transparent stroke-text">PLASTERING</span>
            </h1>
            
            <div className="flex flex-wrap gap-5">
              <Link to="/contact" className="px-10 py-5 bg-amber-500 text-slate-900 font-black rounded-sm hover:bg-white transition-colors duration-300 uppercase text-sm tracking-widest shadow-xl">
                Get a Free Quote
              </Link>
              <Link to="/portfolio" className="px-10 py-5 border border-white/30 backdrop-blur-sm text-white font-black rounded-sm hover:bg-white hover:text-slate-900 transition-all duration-300 uppercase text-sm tracking-widest">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- BRAND TICKER --- */}
      <div className="bg-slate-900 py-8 border-y border-white/5 flex whitespace-nowrap overflow-hidden">
        <div className="animate-ticker flex gap-16 md:gap-32 items-center px-4">
          {['BRITISH GYPSUM', 'K-REND', 'WEBER', 'KNAUF', 'SINIAT', 'SANDTOFT', 'BRITISH GYPSUM', 'K-REND', 'WEBER', 'KNAUF'].map((brand, i) => (
            <span key={i} className="text-white/10 text-3xl md:text-5xl font-black italic tracking-tighter uppercase">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* --- FLOATING STATS BAR --- */}
      <section className="relative z-20 -mt-12 px-4 mb-24">
        <div className="max-w-6xl mx-auto bg-slate-900 border border-white/10 shadow-2xl rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', val: '15+' },
              { label: 'Local Projects', val: '500+' },
              { label: 'Client Rating', val: '5.0' },
              { label: 'Nailsea & Clevedon', val: 'Local' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:border-r last:border-0 border-white/10">
                <p className="text-4xl font-black text-amber-500 mb-1">{stat.val}</p>
                <p className="text-[10px] uppercase text-slate-400 font-bold tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPECIALIST SOLUTIONS --- */}
      <section className="py-12 bg-white px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
             <div className="text-center mb-12 relative z-10">
                <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.4em] mb-4">Master Craftsmanship</h2>
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase">Specialist Plastering Solutions</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                {specialistList.map((item, index) => (
                  <div key={index} className="flex items-center justify-center text-center p-4 bg-amber-500 rounded-xl shadow-lg border-b-4 border-amber-600 group hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
                    <span className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-tight group-hover:text-amber-600 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- CORE SERVICES --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-amber-600 uppercase tracking-[0.3em] mb-4">Professional Plastering & Rendering</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Core Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                <div className="mb-8 overflow-hidden rounded-lg bg-slate-900 aspect-video flex items-center justify-center relative shadow-xl border-b-4 border-amber-500">
                  <img 
                    src={service.img} 
                    alt={`${service.title} specialist in Nailsea area`} 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <span className="relative z-10 text-6xl font-black text-white/20 group-hover:text-amber-500 transition-colors duration-500">0{i+1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-amber-600 transition-colors uppercase">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 p-4 bg-white shadow-2xl rounded-3xl">
                <div className="h-[450px] w-full rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                  {/* LAZY LOADED MAP WRAPPER */}
                  <Suspense fallback={<div className="w-full h-full flex items-center justify-center animate-pulse text-slate-400 font-bold uppercase">Loading Area Map...</div>}>
                    <MapComponent center={mapCenter} boundary={serviceBoundary} />
                  </Suspense>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-10">
              <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                SERVICING <br/> <span className="text-amber-500 text-4xl uppercase font-bold">NORTH SOMERSET</span>
              </h2>
              <p className="text-slate-600 text-lg font-light mb-10 leading-relaxed">
                Based in <span className="font-bold text-slate-900">Nailsea</span>, we provide specialist services to residential and commercial clients across <span className="font-bold">Clevedon, Bristol, and Portishead</span>.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Clevedon', 'Bristol', 'Portishead', 'Nailsea', 'Weston', 'Yatton'].map((area) => (
                  <div key={area} className="flex items-center gap-3 font-bold text-slate-700 uppercase text-xs tracking-widest">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div> {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-white text-center md:text-left">
              <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.3em] mb-4">Our Portfolio</h2>
              <h3 className="text-4xl font-bold">Recent Projects in North Somerset</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <article key={i} className={`${item.size} group relative h-[400px] overflow-hidden rounded-lg shadow-2xl`}>
                <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="absolute bottom-8 left-8">
                    <p className="text-amber-500 text-xs font-bold uppercase mb-2">{item.cat}</p>
                    <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl bg-amber-500 p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 relative z-10">READY TO START?</h2>
          <Link to="/contact" className="relative z-10 inline-block bg-slate-900 text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl">
            Get a Free Quote
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text { -webkit-text-stroke: 2px white; }
        @media (max-width: 768px) { .stroke-text { -webkit-text-stroke: 1px white; } }
        @keyframes subtle-zoom { from { transform: scale(1.05); } to { transform: scale(1.15); } }
        .animate-subtle-zoom { animation: subtle-zoom 20s infinite alternate linear; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-ticker { animation: ticker 40s linear infinite; }
      `}} />
    </div>
  );
};

export default Home;