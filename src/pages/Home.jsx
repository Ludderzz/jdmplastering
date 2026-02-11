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
    [51.6050, -2.6300], 
    [51.5500, -2.5500], 
    [51.4100, -2.4800], 
    [51.2900, -2.9800], 
    [51.3500, -3.0500], 
    [51.4400, -3.0200], 
    [51.5200, -2.7800], 
  ];

  const featured = [
    { img: img1Outside, title: 'External Rendering', cat: 'Exterior', size: 'md:col-span-2' },
    { img: img19Outside, title: 'Modern Facade', cat: 'Exterior', size: 'md:col-span-1' },
    { img: img8Inside, title: 'Smooth Skimming', cat: 'Interior', size: 'md:col-span-1' },
    { img: img10Inside, title: 'Complete Refurb', cat: 'Interior', size: 'md:col-span-2' },
  ];

  const services = [
    { 
      title: 'Internal Skimming', 
      desc: 'Achieving a mirror-smooth finish ready for high-end decorating.', 
      img: img11Inside 
    },
    { 
      title: 'External Rendering', 
      desc: 'Weatherproof, durable, and aesthetically stunning exterior solutions.', 
      img: img1Outside 
    },
    { 
      title: 'Dry Lining', 
      desc: 'Modern boarding techniques for perfect alignment and insulation.', 
      img: img4Inside 
    },
  ];

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="JDM Plastering Hero" 
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl ml-4 sm:ml-12 lg:ml-20 px-4 text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-8 bg-amber-500"></div>
              <span className="text-amber-500 text-sm font-bold uppercase tracking-[0.2em]">
                Premium Plastering & Rendering
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              QUALITY <br />
              <span className="text-transparent stroke-text">FINISHES</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light max-w-lg">
              Specialist interior skimming and exterior rendering. We don't just plaster walls; we create the perfect canvas for your home.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <Link to="/contact" className="px-10 py-5 bg-amber-500 text-slate-900 font-black rounded-sm hover:bg-white transition-colors duration-300 uppercase text-sm tracking-widest">
                Get a Quote
              </Link>
              <Link to="/portfolio" className="px-10 py-5 border border-white/30 backdrop-blur-sm text-white font-black rounded-sm hover:bg-white hover:text-slate-900 transition-all duration-300 uppercase text-sm tracking-widest">
                Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* --- SERVICES SECTION --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-amber-600 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">What We Bring to the Table</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                {/* Image Container with Hover Effects */}
                <div className="mb-8 overflow-hidden rounded-lg bg-slate-900 aspect-video flex items-center justify-center relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <span className="relative z-10 text-6xl font-black text-white/20 group-hover:text-amber-500/80 transition-colors duration-500">0{i+1}</span>
                </div>
                
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                   {service.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-light">{service.desc}</p>
                <div className="mt-6 w-0 group-hover:w-full h-1 bg-amber-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICE AREA SECTION --- */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 p-4 bg-white shadow-2xl rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="h-[450px] w-full rounded-2xl overflow-hidden z-0 shadow-inner">
                  <MapContainer 
                    center={mapCenter} 
                    zoom={10} 
                    scrollWheelZoom={false} 
                    dragging={!L.Browser.mobile}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />
                    <Polygon 
                      positions={serviceBoundary}
                      pathOptions={{ 
                        fillColor: '#f59e0b', 
                        color: '#d97706', 
                        dashArray: '5, 10', 
                        weight: 3, 
                        fillOpacity: 0.2 
                      }}
                    >
                        <Popup>We provide full coverage across this area!</Popup>
                    </Polygon>
                    <Marker position={[51.4393, -2.8555]}>
                      <Popup>
                        <div className="text-center">
                            <strong className="text-slate-900">JDM Plastering</strong><br/>
                            <span className="text-xs text-slate-500 font-bold uppercase">Clevedon HQ</span>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
                <div className="absolute inset-0 border-[12px] border-white rounded-3xl pointer-events-none z-10"></div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block border-b-4 border-amber-500">
                <p className="text-amber-500 font-black text-2xl text-center">LOCAL</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-center">Specialist</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:pl-10">
              <div className="inline-block px-4 py-1 bg-amber-500/10 text-amber-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Our Territory
              </div>
              <h3 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                CRAFTING WALLS <br/> 
                <span className="text-amber-500 text-4xl">IN YOUR AREA</span>
              </h3>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-10">
                We provide a professional, fully mobile service across the 
                <span className="font-bold text-slate-900"> West Country.</span> Covering everything from Weston-super-Mare to Bradley Stoke.
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {['Clevedon', 'Bristol', 'Bradley Stoke', 'Portishead', 'Nailsea', 'Weston-super-Mare'].map((area) => (
                  <div key={area} className="flex items-center gap-3 group cursor-default">
                    <div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm font-bold text-slate-700 group-hover:text-amber-600 transition-colors uppercase tracking-tight">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED WORK & GALLERY --- */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.3em] mb-4">Gallery</h2>
              <h3 className="text-4xl font-bold text-white">Recent Work</h3>
            </div>
            <Link to="/portfolio" className="hidden md:block text-white border-b border-amber-500 pb-1 font-bold hover:text-amber-500 transition-colors">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <div key={i} className={`${item.size} group relative h-[400px] overflow-hidden rounded-lg`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/20 md:bg-slate-900/50 md:group-hover:bg-slate-900/20 transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform">
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{item.cat}</p>
                  <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto relative rounded-2xl bg-amber-500 p-12 md:p-24 overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">READY TO START YOUR PROJECT?</h2>
            <Link to="/contact" className="inline-block bg-slate-900 text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
              Get Your Free Quote
            </Link>
          </div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text { -webkit-text-stroke: 1px white; }
        @keyframes subtle-zoom { from { transform: scale(1.05); } to { transform: scale(1.15); } }
        .animate-subtle-zoom { animation: subtle-zoom 20s infinite alternate linear; }
        .leaflet-popup-content-wrapper { border-radius: 8px; font-family: inherit; }
        .leaflet-popup-tip { background: white; }
      `}} />
    </div>
  );
};

export default Home;