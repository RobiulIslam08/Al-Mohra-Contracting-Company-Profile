import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const msg = encodeURIComponent('Hello Al Mohra Contracting Company, I am interested in your manpower/contracting services.');
  const link = `https://wa.me/966565882482?text=${msg}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer"
      id="whatsapp-float"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3.5 rounded-2xl shadow-2xl transition-all duration-400 group"
      style={{
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        boxShadow: '0 8px 32px rgba(34,197,94,0.4)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.55)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(34,197,94,0.4)';
      }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-2xl animate-ping"
        style={{ background: 'rgba(34,197,94,0.3)', animationDuration: '2s' }} />
      <MessageCircle size={20} className="text-white relative z-10" />
      <span className="text-white text-xs font-bold uppercase tracking-wider relative z-10 hidden sm:block">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
