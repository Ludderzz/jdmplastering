import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Internal Plastering',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const businessPhone = "447896560566"; // REPLACE WITH YOUR NUMBER (Format: 447123456789)
    
    const message = `*New Quote Request - JDM Plastering*%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Service:* ${formData.service}%0A` +
                    `*Details:* ${formData.details}`;

    const whatsappUrl = `https://wa.me/${businessPhone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white max-w-full overflow-x-hidden touch-pan-y">
      {/* --- FANCY HERO SECTION --- */}
      <section className="relative bg-slate-900 py-20 md:py-32 overflow-hidden">
        {/* Abstract Background Elements (Plaster Texture Feel) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border border-amber-500/30 rounded-full bg-amber-500/10">
            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">Ready to start?</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
            GET A <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f59e0b' }}>FREE QUOTE</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            From smooth interior walls to durable exterior rendering. Drop your details below and we'll get back to you via WhatsApp or Phone.
          </p>
        </div>
      </section>

      {/* --- MAIN INTERACTION SECTION --- */}
      <section className="relative z-20 -mt-12 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Quick Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl border border-white/5">
                <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4">Contact Info</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-amber-500 text-xs font-black uppercase tracking-widest mb-1">Call / Text</p>
                    <p className="text-xl font-bold">07896 560566</p>
                  </div>
                  <div>
                    <p className="text-amber-500 text-xs font-black uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold">Nailsea, North Somerset</p>
                  </div>
                  <div>
                    <p className="text-amber-500 text-xs font-black uppercase tracking-widest mb-1">Working Hours</p>
                    <p className="text-lg font-bold">Mon - Sat: 08:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Step Guide */}
              <div className="bg-amber-500 p-10 rounded-3xl shadow-xl">
                <h3 className="text-slate-900 text-2xl font-black mb-6">Our Process</h3>
                <ul className="space-y-4">
                  {[
                    { s: '01', t: 'Submit Form', d: 'Send your project details.' },
                    { s: '02', t: 'Instant Chat', d: 'We discuss via WhatsApp.' },
                    { s: '03', t: 'Site Visit', d: 'Final quote and start date.' }
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-slate-900 font-black opacity-30 text-2xl leading-none">{step.s}</span>
                      <div>
                        <p className="text-slate-900 font-black uppercase text-sm leading-none mb-1">{step.t}</p>
                        <p className="text-slate-800 text-xs font-medium">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block group-focus-within:text-amber-500 transition-colors">Full Name</label>
                    <input 
                      name="name"
                      onChange={handleChange}
                      type="text" 
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-amber-500 outline-none transition-all text-slate-900 font-bold text-lg" 
                      placeholder="e.g. John Doe" 
                      required 
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block group-focus-within:text-amber-500 transition-colors">Phone Number</label>
                    <input 
                      name="phone"
                      onChange={handleChange}
                      type="tel" 
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-amber-500 outline-none transition-all text-slate-900 font-bold text-lg" 
                      placeholder="07XXX XXXXXX" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block group-focus-within:text-amber-500 transition-colors">Email Address</label>
                    <input 
                      name="email"
                      onChange={handleChange}
                      type="email" 
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-amber-500 outline-none transition-all text-slate-900 font-bold text-lg" 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block group-focus-within:text-amber-500 transition-colors">Service Required</label>
                    <select 
                      name="service"
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-amber-500 outline-none transition-all text-slate-900 font-bold text-lg appearance-none cursor-pointer"
                    >
                      <option>Internal Plastering</option>
                      <option>External Rendering</option>
                      <option>Dry Lining</option>
                      <option>Damp Proofing</option>
                      <option>Other / Multiple</option>
                    </select>
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block group-focus-within:text-amber-500 transition-colors">Project Details</label>
                  <textarea 
                    name="details"
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-amber-500 focus:bg-white outline-none transition-all text-slate-900 font-medium" 
                    placeholder="Tell us about the project size, location, and any specific requirements..." 
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-slate-900 transition-all duration-500 flex justify-center items-center gap-4 shadow-xl shadow-slate-200"
                >
                  <span>Request Quote via WhatsApp</span>
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.548 0 10.058-4.51 10.061-10.062.002-2.69-1.047-5.216-2.954-7.124s-4.439-2.956-7.127-2.956c-5.549 0-10.06 4.51-10.062 10.062 0 2.117.579 4.071 1.674 5.803l-1.019 3.732 3.827-.993zm11.367-7.64c-.31-.155-1.837-.906-2.116-1.008-.279-.101-.482-.152-.684.152-.202.304-.785 1.008-.962 1.206-.177.198-.355.223-.665.068-.31-.155-1.308-.482-2.492-1.538-.92-.821-1.54-1.836-1.72-2.145-.18-.309-.019-.477.136-.632.14-.139.31-.361.466-.54.155-.181.207-.309.31-.515.103-.206.052-.386-.025-.54-.077-.155-.684-1.648-.938-2.259-.249-.594-.503-.515-.684-.524-.177-.008-.38-.01-.583-.01s-.532.076-.811.386c-.279.31-1.064 1.042-1.064 2.541s1.089 2.947 1.24 3.153c.152.206 2.142 3.272 5.19 4.582.723.311 1.288.497 1.728.636.728.23 1.39.198 1.914.12.584-.087 1.837-.751 2.091-1.477.253-.726.253-1.35.177-1.477-.076-.127-.279-.203-.589-.358z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER BANNER --- */}
      <section className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
          <p className="text-xs font-black uppercase tracking-widest">JDM Plastering & Rendering Specialist</p>
          <div className="flex gap-8">
            <span className="text-xs font-black uppercase tracking-widest">Fully Insured</span>
            <span className="text-xs font-black uppercase tracking-widest">15+ Years Exp</span>
            <span className="text-xs font-black uppercase tracking-widest">Free Consultation</span>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          width: 100%;
          overflow-x: hidden !important;
          touch-action: pan-y;
        }
      `}} />
    </div>
  );
};

export default Contact;