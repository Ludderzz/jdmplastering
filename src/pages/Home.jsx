import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react'; 
import { Helmet } from 'react-helmet-async'; 

// Asset Imports
import heroImg from '../assets/portfolio/test.webp';
import img1Outside from '../assets/portfolio/img1-outside.webp';
import img19Outside from '../assets/portfolio/img19-outside.webp';
import img8Inside from '../assets/portfolio/img8-inside.webp';
import img10Inside from '../assets/portfolio/img10-inside.webp';
import dryling from "../assets/portfolio/dryling.webp";
import internal from "../assets/portfolio/inernalplastering.webp";
import pendering from "../assets/portfolio/pendering.webp";

// Lazy Load the Map component - isolated from main bundle
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
    { title: 'Internal Plastering Nailsea', desc: 'Achieving a mirror-smooth finish ready for high-end decorating.', img: internal },
    { title: 'External Rendering Clevedon', desc: 'Weatherproof, durable solutions including K-Rend and Monocouche.', img: pendering },
    { title: 'Dry Lining Somerset', desc: 'Modern boarding techniques for perfect alignment and insulation.', img: dryling },
  ];

  return (
    <div className="bg-white overflow-x-hidden antialiased">
      <Helmet>
        <title>JDM Plastering | Expert Plastering & Rendering Nailsea & Clevedon</title>
        <meta name="description" content="Professional plastering and rendering in Nailsea, Clevedon, and Bristol. Over 15 years experience." />
        
        {/* CRITICAL MOBILE FIX: Preload the hero image before the browser even parses the body */}
        <link rel="preload" as="image" href={heroImg} fetchpriority="high" />

        {/* SPEED BOOST: Pre-connect to Map Tile Servers */}
        <link rel="preconnect" href="https://a.basemaps.cartocdn.com" />
        <link rel="preconnect" href="https://b.basemaps.cartocdn.com" />
        <link rel="preconnect" href="https://c.basemaps.cartocdn.com" />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="High quality plastering services" 
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
              <Link to="/contact" className="px-10 py-5 bg-amber-500 text-slate-900 font-black rounded-sm hover:bg-white transition-colors duration-300 uppercase text-sm tracking-widest">
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
          {['BRITISH GYPSUM', 'K-REND', 'WEBER', 'KNAUF', 'SINIAT', 'SANDTOFT', 'BRITISH GYPSUM', 'K-REND'].map((brand, i) => (
            <span key={i} className="text-white/10 text-3xl md:text-5xl font-black italic uppercase">{brand}</span>
          ))}
        </div>
      </div>

      {/* --- FLOATING STATS BAR --- */}
      <section className="relative z-20 -mt-12 px-4 mb-24">
        <div className="max-w-6xl mx-auto bg-slate-900 border border-white/10 shadow-2xl rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ label: 'Years Experience', val: '15+' }, { label: 'Local Projects', val: '500+' }, { label: 'Client Rating', val: '5.0' }, { label: 'Nailsea & Clevedon', val: 'Local' }].map((stat, i) => (
              <div key={i} className="text-center md:border-r last:border-0 border-white/10">
                <p className="text-4xl font-black text-amber-500 mb-1">{stat.val}</p>
                <p className="text-[10px] uppercase text-slate-400 font-bold tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPECIALIST SOLUTIONS --- */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
             <div className="text-center mb-12 relative z-10">
                <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.4em] mb-4">Master Craftsmanship</h2>
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase">Specialist Plastering Solutions</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                {specialistList.map((item, index) => (
                  <div key={index} className="flex items-center justify-center text-center p-4 bg-amber-500 rounded-xl shadow-lg border-b-4 border-amber-600 group hover:bg-white transition-all transform hover:-translate-y-1">
                    <span className="text-xs md:text-sm font-black text-slate-900 uppercase group-hover:text-amber-600 transition-colors">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- CORE SERVICES --- */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <div key={i} className="group relative">
              <div className="mb-8 overflow-hidden rounded-lg bg-slate-900 aspect-video relative shadow-xl border-b-4 border-amber-500">
                <img src={service.img} alt={service.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-all duration-700" />
                <span className="relative z-10 text-6xl font-black text-white/20 group-hover:text-amber-500">0{i+1}</span>
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed font-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="p-4 bg-white shadow-2xl rounded-3xl">
              <div className="relative h-[450px] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                <Suspense fallback={
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                }>
                  <MapComponent center={mapCenter} boundary={serviceBoundary} />
                </Suspense>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Servicing <br/> <span className="text-amber-500 text-4xl font-bold">North Somerset</span></h2>
            <div className="grid grid-cols-2 gap-4">
              {['Clevedon', 'Bristol', 'Portishead', 'Nailsea', 'Weston', 'Yatton'].map((area) => (
                <div key={area} className="flex items-center gap-3 font-bold text-slate-700 uppercase text-xs tracking-widest">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div> {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section className="py-32 bg-slate-900 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-5xl mx-auto rounded-3xl bg-amber-500 p-12 md:p-20 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">READY TO START?</h2>
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl">
            Get a Free Quote
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text { -webkit-text-stroke: 2px white; }
        @media (max-width: 768px) { .stroke-text { -webkit-text-stroke: 1px white; } }
        @keyframes subtle-zoom { from { transform: scale(1.05); } to { transform: scale(1.1); } }
        .animate-subtle-zoom { animation: subtle-zoom 20s infinite alternate linear; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-ticker { animation: ticker 40s linear infinite; }
      `}} />
    </div>
  );
};

export default Home;