import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Asset Imports
import heroImg from '../assets/hero.png';
import img1Outside from '../assets/portfolio/img1-outside.jpg';
import img19Outside from '../assets/portfolio/img19-outside.jpg';
import img8Inside from '../assets/portfolio/img8-inside.jpg';
import img10Inside from '../assets/portfolio/img10-inside.jpg';
import img11Inside from '../assets/portfolio/img11-inside.jpg'; 
import img4Inside from '../assets/portfolio/img4-inside.jpg';   

// Leaflet Icon Fix
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const Home = () => {
  const mapCenter = [51.4600, -2.7200]; 

  const serviceBoundary = [
    [51.6050, -2.6300], [51.5500, -2.5500], [51.4100, -2.4800], 
    [51.2900, -2.9800], [51.3500, -3.0500], [51.4400, -3.0200], [51.5200, -2.7800], 
  ];

  const specialistList = [
    "Original Sand & Cement Rendering",
    "Traditional Lime Rendering",
    "British Gypsum Plastering",
    "Traditional Internal Lime Plastering",
    "Damp Proofing",
    "Webber Monocouche Rendering",
    "K Rend Thin Coat Grit Render",
    "OCR Render"
  ];

  const featured = [
    { img: img1Outside, title: 'External Rendering', cat: 'Exterior', size: 'md:col-span-2' },
    { img: img19Outside, title: 'Modern Facade', cat: 'Exterior', size: 'md:col-span-1' },
    { img: img8Inside, title: 'Smooth Skimming', cat: 'Interior', size: 'md:col-span-1' },
    { img: img10Inside, title: 'Complete Refurb', cat: 'Interior', size: 'md:col-span-2' },
  ];

  const services = [
    { title: 'Internal Skimming', desc: 'Achieving a mirror-smooth finish ready for high-end decorating.', img: img11Inside },
    { title: 'External Rendering', desc: 'Weatherproof, durable, and aesthetically stunning exterior solutions.', img: img1Outside },
    { title: 'Dry Lining', desc: 'Modern boarding techniques for perfect alignment and insulation.', img: img4Inside },
  ];

  return (
    <div className="bg-white max-w-full overflow-x-hidden relative touch-pan-y">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={heroImg} 
            alt="JDM Plastering Hero" 
            className="w-full h-full object-cover animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900/70 md:bg-gradient-to-r md:from-slate-900 md:via-slate-900/80 md:to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-white w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[3px] w-10 bg-amber-500"></div>
              <span className="text-amber-500 text-xs md:text-sm font-black uppercase tracking-[0.25em]">
                Premium Plastering & Rendering
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.85] mb-10 tracking-tighter">
              MASTER <br />
              <span className="text-transparent stroke-text">CRAFTSMAN</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12 bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-lg border-l-4 border-amber-500 max-w-3xl">
              {specialistList.slice(0, 6).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base font-bold text-slate-50 tracking-wide uppercase leading-tight">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact" className="w-full sm:w-auto text-center px-10 py-6 bg-amber-500 text-slate-900 font-black rounded-sm hover:bg-white transition-all duration-300 uppercase text-sm tracking-[0.2em] shadow-2xl">
                Get a Quote
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto text-center px-10 py-6 border-2 border-white/40 backdrop-blur-sm text-white font-black rounded-sm hover:bg-white hover:text-slate-900 transition-all duration-300 uppercase text-sm tracking-[0.2em]">
                Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: BRAND TICKER --- */}
      <div className="bg-slate-900 py-8 md:py-12 border-y border-white/5 overflow-hidden flex whitespace-nowrap">
        <div className="animate-ticker flex gap-12 md:gap-24 items-center px-4">
          {['BRITISH GYPSUM', 'K-REND', 'WEBER', 'KNAUF', 'SINIAT', 'SANDTOFT'].map((brand, i) => (
            <span key={i} className="text-white/20 text-3xl md:text-5xl font-black italic tracking-tighter select-none uppercase">
              {brand}
            </span>
          ))}
        </div>
        {/* Mirror div for seamless loop */}
        <div className="animate-ticker flex gap-12 md:gap-24 items-center px-4" aria-hidden="true">
          {['BRITISH GYPSUM', 'K-REND', 'WEBER', 'KNAUF', 'SINIAT', 'SANDTOFT'].map((brand, i) => (
            <span key={i} className="text-white/20 text-3xl md:text-5xl font-black italic tracking-tighter select-none uppercase">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* --- FLOATING STATS BAR --- */}
      <section className="relative z-20 -mt-10 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 border border-white/10 shadow-2xl rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { label: 'Years Experience', val: '15+' },
              { label: 'Projects Done', val: '500+' },
              { label: 'Client Rating', val: '5.0' },
              { label: 'Service area', val: 'Local' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:border-r last:border-0 border-white/10">
                <p className="text-3xl md:text-5xl font-black text-amber-500 mb-1">{stat.val}</p>
                <p className="text-[10px] md:text-[11px] uppercase text-slate-400 font-bold tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: COMPARISON SECTION --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black text-amber-600 uppercase tracking-[0.4em] mb-4">Precision is everything</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                A FINISH THAT <br/> STANDS THE <br/> <span className="text-amber-500 italic">TEST OF TIME.</span>
              </h3>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-lg">
                We go beyond the surface. By utilizing high-tensile mesh, premium base coats, and dust-free technology, we deliver a finish that doesn't just look good today—it lasts for decades.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "High-Tensile Reinforcement Mesh",
                "Laser-Level Perfect Bead Alignment",
                "Specialist Moisture Barrier Systems",
                "Premium Monocouche & Thin Coat Renders",
                "Clean Site Guarantee"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-amber-500 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="font-black text-slate-900 uppercase text-sm tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 md:py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-sm font-black text-amber-600 uppercase tracking-[0.4em] mb-4">Core Services</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Our Specialties</h3>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, i) => (
                <div key={i} className="group relative">
                <div className="mb-8 overflow-hidden rounded-2xl bg-slate-900 aspect-video flex items-center justify-center relative shadow-xl">
                    <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                    <span className="relative z-10 text-6xl font-black text-white/10 group-hover:text-amber-500/40 transition-colors">0{i+1}</span>
                </div>
                <h4 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tighter">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed text-base">{service.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-24 md:py-32 bg-white overflow-hidden px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 max-w-full isolate">
              <div className="h-[350px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 isolate">
                  <MapContainer center={mapCenter} zoom={9} scrollWheelZoom={false} dragging={!L.Browser.mobile} style={{ height: '100%', width: '100%' }}>
                    <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                    <Polygon positions={serviceBoundary} pathOptions={{ fillColor: '#f59e0b', color: '#d97706', weight: 3, fillOpacity: 0.2 }} />
                    <Marker position={[51.4393, -2.8555]}><Popup><strong>JDM Plastering HQ</strong></Popup></Marker>
                  </MapContainer>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.9]">
                WEST COUNTRY <br/> <span className="text-amber-500">COVERAGE</span>
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">Based in Clevedon, we offer full-service plastering across Somerset, Bristol, and North Somerset.</p>
              <div className="grid grid-cols-2 gap-4">
                {['Clevedon', 'Bristol', 'Portishead', 'Nailsea', 'Weston', 'Yatton'].map((area) => (
                  <div key={area} className="flex items-center gap-3 font-black text-slate-800 uppercase text-xs tracking-[0.2em]">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div> {area}
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="py-24 md:py-32 bg-slate-900 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-black text-amber-500 uppercase tracking-[0.4em] mb-12">Portfolio Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <div key={i} className={`${item.size} group relative h-[350px] md:h-[450px] overflow-hidden rounded-xl shadow-2xl`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                   <p className="text-amber-500 text-xs font-black uppercase mb-2 tracking-widest">{item.cat}</p>
                   <h4 className="text-white text-3xl font-bold tracking-tight uppercase">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto rounded-3xl bg-amber-500 p-10 md:p-24 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 relative z-10 leading-[0.9] tracking-tighter uppercase">Ready to Start?</h2>
          <Link to="/contact" className="relative z-10 inline-block w-full sm:w-auto bg-slate-900 text-white px-14 py-6 font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-all">
            Get Your Free Quote
          </Link>
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/20 rounded-full blur-3xl hidden md:block"></div>
        </div>
      </section>

      {/* --- NEW: FLOATING CONTACT BUTTON (MOBILE) --- */}
      <div className="fixed bottom-6 right-6 z-[999] md:hidden">
        <Link to="/contact" className="w-16 h-16 bg-amber-500 text-slate-900 rounded-full shadow-2xl flex items-center justify-center animate-bounce border-2 border-slate-900">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          width: 100%;
          overflow-x: hidden !important;
          position: relative;
          touch-action: pan-y;
        }

        .stroke-text { -webkit-text-stroke: 1.5px white; }
        @media (max-width: 640px) { .stroke-text { -webkit-text-stroke: 1px white; } }
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }

        @keyframes subtle-zoom { 
          0% { transform: scale(1.0); } 
          100% { transform: scale(1.1); } 
        }
        .animate-subtle-zoom { animation: subtle-zoom 20s infinite alternate ease-in-out; }
        
        .leaflet-container { z-index: 1 !important; border-radius: 1.5rem; }
      `}} />
    </div>
  );
};

export default Home;