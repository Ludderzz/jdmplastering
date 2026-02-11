import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // The business WhatsApp number (format: countrycode + number, no '+' or '00')
    const businessPhone = "YOUR_PHONE_NUMBER_HERE"; 

    // Construct the message
    const message = `*New Quote Request - JDM Plastering*%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Email:* ${formData.email}%0A` +
                    `*Details:* ${formData.details}`;

    // Create the WhatsApp Link
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${message}`;

    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a <span className="text-amber-500">Free Quote</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Fill out the form below and it will send a message directly to our WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    name="name"
                    onChange={handleChange}
                    type="text" 
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-amber-500 outline-none" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Phone Number</label>
                  <input 
                    name="phone"
                    onChange={handleChange}
                    type="tel" 
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-amber-500 outline-none" 
                    placeholder="07123 456789" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  name="email"
                  onChange={handleChange}
                  type="email" 
                  className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-amber-500 outline-none" 
                  placeholder="john@example.com" 
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
                <textarea 
                  name="details"
                  onChange={handleChange}
                  rows="4" 
                  className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-amber-500 outline-none" 
                  placeholder="e.g. Skimming 3 rooms, external rendering needed..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-md font-bold text-lg hover:bg-green-700 transition-all flex justify-center items-center gap-2">
                <span>Send via WhatsApp</span>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.548 0 10.058-4.51 10.061-10.062.002-2.69-1.047-5.216-2.954-7.124s-4.439-2.956-7.127-2.956c-5.549 0-10.06 4.51-10.062 10.062 0 2.117.579 4.071 1.674 5.803l-1.019 3.732 3.827-.993zm11.367-7.64c-.31-.155-1.837-.906-2.116-1.008-.279-.101-.482-.152-.684.152-.202.304-.785 1.008-.962 1.206-.177.198-.355.223-.665.068-.31-.155-1.308-.482-2.492-1.538-.92-.821-1.54-1.836-1.72-2.145-.18-.309-.019-.477.136-.632.14-.139.31-.361.466-.54.155-.181.207-.309.31-.515.103-.206.052-.386-.025-.54-.077-.155-.684-1.648-.938-2.259-.249-.594-.503-.515-.684-.524-.177-.008-.38-.01-.583-.01s-.532.076-.811.386c-.279.31-1.064 1.042-1.064 2.541s1.089 2.947 1.24 3.153c.152.206 2.142 3.272 5.19 4.582.723.311 1.288.497 1.728.636.728.23 1.39.198 1.914.12.584-.087 1.837-.751 2.091-1.477.253-.726.253-1.35.177-1.477-.076-.127-.279-.203-.589-.358z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;