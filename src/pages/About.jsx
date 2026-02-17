import img10Inside from '../assets/portfolio/img19-outside.webp'; 
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Helmet } from 'react-helmet-async';

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

const About = () => {
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

  const specialistList = [
    "Original Sand & Cement Rendering",
    "Traditional Lime Rendering",
    "Coloured Weber Monocouche",
    "Coloured K Rend Thin Coat",
    "British Gypsum Plastering",
    "Internal Lime Plastering",
    "Damp Proofing Specialist",
    "OCR Render Systems"
  ];

  return (
    /* REMOVED overflow-x-hidden here to fix the sticky Navbar */
    <div className="bg-white relative">
      <Helmet>
        <title>About JDM Plastering | Coloured Rendering Specialists Nailsea</title>
        <meta name="description" content="15+ years of excellence in internal plastering and coloured rendering. Serving Nailsea, Clevedon, and Bristol with premium Weber and K-Rend finishes." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PlasteringBusiness",
            "name": "JDM Plastering",
            "description": "Specialist internal plastering and coloured rendering services in North Somerset.",
            "url": "https://yourwebsite.com/about", 
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nailsea",
              "addressRegion": "North Somerset",
              "addressCountry": "UK"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plastering & Rendering Services",
              "itemListElement": specialistList.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service
                }
              }))
            },
            "areaServed": [
              { "@type": "City", "name": "Nailsea" },
              { "@type": "City", "name": "Clevedon" },
              { "@type": "City", "name": "Portishead" },
              { "@type": "City", "name": "Bristol" },
              { "@type": "City", "name": "Yatton" }
            ]
          })}
        </script>
      </Helmet>

      {/* --- PREMIUM HEADER --- */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-amber-500 text-sm font-black uppercase tracking-[0.3em] mb-4 block underline decoration-amber-500/20 underline-offset-8">
            Nailsea's Trusted Finishers
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            About <span className="text-transparent" style={{ WebkitTextStroke: '1px #f59e0b' }}>JDM Plastering</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <main className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-2xl z-0"></div>
              <div className="relative z-10 aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={img10Inside} 
                  alt="Specialist Coloured Rendering in Nailsea" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 rounded-2xl shadow-2xl border border-white/10 hidden md:block z-20">
                <p className="text-5xl font-black text-amber-500">15+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Years of <br/> Craftsmanship</p>
              </div>
            </div>

            <div className="space-y-8">
              <header>
                <h2 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-2">Our Reputation</h2>
                <h3 className="text-4xl font-bold text-slate-900 leading-tight">Expertise You Can Trust, <br/>Quality You Can Feel.</h3>
              </header>
              <div className="space-y-4 text-slate-600 text-lg font-light leading-relaxed">
                <p>
                  JDM Plastering was built on a foundation of precision and pride. Serving homeowners in <span className="text-slate-900 font-semibold">Nailsea, Clevedon, and across Bristol</span>, we have grown into a leading service known for one thing: <strong>The Perfect Finish.</strong>
                </p>
                <p>
                  We specialize in high-end finishes, from maintenance-free <span className="text-slate-900 font-semibold">Coloured Through-Render Systems</span> (Weber & K-Rend) to traditional <span className="text-slate-900 font-semibold">Internal Lime Plastering</span>. We treat every home with the same obsessive attention to detail we would our own.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Fully Insured & Local HQ',
                  'Dust-Free Working Ethic',
                  'Free Professional Consultation',
                  'Coloured Render Specialists',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                    <span className="font-bold text-slate-800 text-xs uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- SPECIALIST SERVICES SECTION --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20vw] font-black text-white">SKILLS</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-amber-500 text-sm font-black uppercase tracking-[0.4em] mb-4">What We Do Best</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Specialist Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialistList.map((service, index) => (
              <article 
                key={index} 
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-amber-500 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center group-hover:bg-slate-900/20 mb-4 transition-colors">
                    <span className="text-amber-500 group-hover:text-slate-900 font-black text-xs">{index + 1}</span>
                  </div>
                  <h4 className="text-white group-hover:text-slate-900 font-bold text-lg leading-tight uppercase tracking-tight">
                    {service}
                  </h4>
                </div>
                <div className="h-1 w-12 bg-amber-500 group-hover:bg-slate-900 transition-colors"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-24 bg-white overflow-hidden px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-amber-600 text-sm font-black uppercase tracking-[0.4em] mb-2">Local Coverage</h2>
            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Areas We Serve</h3>
            <p className="mt-4 text-slate-500 font-light">Specialist plastering and coloured rendering across North Somerset.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 p-4 bg-white shadow-2xl rounded-3xl border border-slate-100">
              <div className="h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-inner isolate">
                <MapContainer 
                  center={mapCenter} 
                  zoom={10} 
                  scrollWheelZoom={false} 
                  dragging={!L.Browser.mobile}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
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
                  />
                  <Marker position={[51.4393, -2.8555]}>
                    <Popup>
                      <div className="text-center">
                        <strong className="text-slate-900">JDM Plastering</strong><br/>
                        <span className="text-xs text-slate-500 font-bold uppercase">Nailsea HQ</span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            
            <div className="absolute -bottom-6 right-6 md:right-10 bg-slate-900 text-white px-8 py-4 rounded-xl shadow-2xl z-20 border-b-4 border-amber-500">
              <p className="text-amber-500 font-black text-xl">LOCAL EXPERTS</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Nailsea, Clevedon & Bristol</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE RADIUS BANNER --- */}
      <section className="bg-amber-500 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-900 uppercase tracking-[0.3em] text-sm font-black mb-4">Reliable & Professional</p>
          <h2 className="text-3xl md:text-4xl text-slate-900 font-black italic tracking-tight leading-tight">
            "High-quality coloured rendering serving Nailsea, Clevedon, and the West Country."
          </h2>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Ensure horizontal scrolling is handled at the body level to protect sticky headers */
        .leaflet-container { z-index: 1 !important; }
      `}} />
    </div>
  );
};

export default About;