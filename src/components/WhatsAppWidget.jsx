import React, { useState } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = "447896560566"; // JDM Plastering Official

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Default message includes local intent
    const defaultText = "Hi JDM Plastering, I'm looking for a plastering/rendering quote in the Somerset area.";
    const encodedMsg = encodeURIComponent(message || defaultText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      
      {/* --- Chat Window --- */}
      {isOpen && (
        <div 
          role="dialog"
          aria-label="WhatsApp Chat Window"
          className="mb-4 w-[320px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-10 duration-300"
        >
          {/* Header */}
          <div className="bg-slate-900 p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-black text-slate-900">
                  JDM
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
              </div>
              <div>
                <h4 className="font-bold text-lg leading-none uppercase tracking-tight">JDM Plastering</h4>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">Nailsea & North Somerset</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="ml-auto hover:text-amber-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 bg-slate-50">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 mb-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Hi there! 👋 <br />
                Need a quick quote for <span className="font-bold">plastering or rendering</span>? Drop us a message and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-3">
              <textarea
                required
                placeholder="How can we help with your project?"
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm resize-none h-24 text-slate-900"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button 
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 uppercase text-[10px] tracking-[0.2em] shadow-lg shadow-green-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.237 3.483 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.652zm5.841-3.702l.417.247c1.648.978 3.538 1.494 5.462 1.496 5.896 0 10.694-4.797 10.697-10.693.002-2.856-1.11-5.541-3.131-7.563-2.022-2.022-4.706-3.135-7.564-3.135-5.896 0-10.693 4.797-10.697 10.693-.001 2.032.535 4.022 1.547 5.765l.272.471-1.008 3.679 3.768-.987z"/></svg>
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- Main Trigger Button --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Open WhatsApp Chat"
        className={`flex items-center gap-3 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-slate-900 scale-90' : 'bg-amber-500 hover:scale-110'
        }`}
      >
        {!isOpen && (
          <span className="hidden sm:block pl-2 font-black text-slate-900 uppercase text-[10px] tracking-[0.2em]">
            Need a Quote?
          </span>
        )}
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? (
             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
             <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          )}
        </div>
      </button>

    </div>
  );
};

export default WhatsAppWidget;