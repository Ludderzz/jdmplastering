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
    <div className="bg-white overflow-x-hidden">
      {/* --- HERO SECTION: UNTOUCHED --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="JDM Plastering Hero" 
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-20 text-white w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-8 bg-amber-500"></div>
              <span className="text-amber-500 text-sm font-bold uppercase tracking-[0.2em]">
                Premium Plastering & Rendering
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              MASTER <br />
              <span className="text-transparent stroke-text">CRAFTSMANSHIP</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mb-12 bg-white/5 backdrop-blur-md p-6 rounded-sm border-l-4 border-amber-500 max-w-3xl">
              {specialistList.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base font-medium text-slate-100 tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-5">
              <Link to="/contact" className="px-10 py-5 bg-amber-500 text-slate-900 font-black rounded-sm hover:bg-white transition-colors duration-300 uppercase text-sm tracking-widest shadow-xl">
                Get a Quote
              </Link>
              <Link to="/portfolio" className="px-10 py-5 border border-white/30 backdrop-blur-sm text-white font-black rounded-sm hover:bg-white hover:text-slate-900 transition-all duration-300 uppercase text-sm tracking-widest">
                Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- ADDED: BRAND TICKER (The Sliding Bar) --- */}
      <div className="bg-slate-900 py-8 border-y border-white/5 flex whitespace-nowrap overflow-hidden">
        <div className="animate-ticker flex gap-16 md:gap-32 items-center px-4">
          {['BRITISH GYPSUM', 'K-REND', 'WEBER', 'KNAUF', 'SINIAT', 'SANDTOFT'].map((brand, i) => (
            <span key={i} className="text-white/10 text-3xl md:text-5xl font-black italic tracking-tighter uppercase">
              {brand}
            </span>
          ))}
        </div>
        <div className="animate-ticker flex gap-16 md:gap-32 items-center px-4" aria-hidden="true">
          {['BRITISH GYPSUM', 'K-REND', 'WEBER', 'KNAUF', 'SINIAT', 'SANDTOFT'].map((brand, i) => (
            <span key={i} className="text-white/10 text-3xl md:text-5xl font-black italic tracking-tighter uppercase">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* --- FLOATING STATS BAR --- */}
      <section className="relative z-20 -mt-12 px-4">
        <div className="max-w-6xl mx-auto bg-slate-900 border border-white/10 shadow-2xl rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', val: '15+' },
              { label: 'Projects Done', val: '500+' },
              { label: 'Client Rating', val: '5.0' },
              { label: 'Service area', val: 'Local' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:border-r last:border-0 border-white/10">
                <p className="text-4xl font-black text-amber-500 mb-1">{stat.val}</p>
                <p className="text-[10px] uppercase text-slate-400 font-bold tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADDED: PRECISION COMPARISON SECTION --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black text-amber-600 uppercase tracking-[0.4em] mb-4">Precision is everything</h2>
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8 uppercase">
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
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 group hover:border-amber-500 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="font-black text-slate-900 uppercase text-xs tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION (OUR EXPERTISE) --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-amber-600 uppercase tracking-[0.3em] mb-4">The Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">What We Bring to the Table</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                <div className="mb-8 overflow-hidden rounded-lg bg-slate-900 aspect-video flex items-center justify-center relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <span className="relative z-10 text-6xl font-black text-white/20 group-hover:text-amber-500/80 transition-colors duration-500">0{i+1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed font-light">{service.desc}</p>
                <div className="mt-6 w-0 group-hover:w-full h-1 bg-amber-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICE AREA SECTION (MAP) --- */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 p-4 bg-white shadow-2xl rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="h-[450px] w-full rounded-2xl overflow-hidden z-0 shadow-inner">
                  <MapContainer 
                    center={mapCenter} zoom={10} scrollWheelZoom={false} 
                    dragging={!L.Browser.mobile} style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                    <Polygon positions={serviceBoundary} pathOptions={{ fillColor: '#f59e0b', color: '#d97706', weight: 3, fillOpacity: 0.2 }} />
                    <Marker position={[51.4393, -2.8555]}><Popup><strong>JDM Plastering HQ</strong></Popup></Marker>
                  </MapContainer>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:pl-10">
              <h3 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                LOCAL <br/> <span className="text-amber-500 text-4xl uppercase">Craftsmanship</span>
              </h3>
              <p className="text-slate-600 text-lg font-light mb-10 leading-relaxed">
                Based in <span className="font-bold text-slate-900">Clevedon</span>, we travel across the West Country providing premium internal and external finishes.
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

      {/* --- GALLERY SECTION --- */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16 text-white">
            <div>
              <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.3em] mb-4">Portfolio</h2>
              <h3 className="text-4xl font-bold">Recent Projects</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <div key={i} className={`${item.size} group relative h-[400px] overflow-hidden rounded-lg`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                <div className="absolute bottom-8 left-8">
                   <p className="text-amber-500 text-xs font-bold uppercase mb-2">{item.cat}</p>
                   <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl bg-amber-500 p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 relative z-10">TRANSFORM YOUR PROPERTY</h2>
          <Link to="/contact" className="relative z-10 inline-block bg-slate-900 text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
            Get a Free Quote
          </Link>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text { -webkit-text-stroke: 1px white; }
        @keyframes subtle-zoom { from { transform: scale(1.05); } to { transform: scale(1.15); } }
        .animate-subtle-zoom { animation: subtle-zoom 20s infinite alternate linear; }
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 25s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Home;