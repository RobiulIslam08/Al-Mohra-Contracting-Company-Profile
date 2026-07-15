import React from 'react';

const CLIENTS = [
  'Samsung C&T', 'Larsen & Toubro', 'Nesma & Partners', 'Binyah (Saudi)', 'FAST Consortium',
  'Juffali (JAMED)', 'MENASCO', 'Saudi Constructioneers', 'PicoPlay', 'BACS',
  'MAN Enterprise', 'Saudi Arabian Baytur', 'ABB Contracting', 'Drake & Scull',
  'Honeywell', 'Al Fanar Group', 'Zamil Air Conditioning', 'Alstom TJV/UJV',
];

// Duplicate for seamless loop
const TRACK = [...CLIENTS, ...CLIENTS];

const Clients = () => (
  <section id="clients" className="w-full py-16" style={{ background: '#FAF7F2' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center scroll-reveal">
      <p className="section-label mb-3">Trusted By Industry Leaders</p>
      <h2 className="section-title-dark" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
        Our <span style={{ color: '#C9962C' }}>Prestigious Clients</span> & Partners
      </h2>
      <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: '#5a6a82' }}>
        Powering mega-projects across Riyadh Metro, Qiddiya, Diriyah, KAFD and more.
      </p>
    </div>

    {/* Marquee */}
    <div className="marquee-wrapper light">
      <div className="marquee-track">
        {TRACK.map((name, i) => (
          <div key={i} className="marquee-item">
            <div className="px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300"
              style={{
                background: '#ffffff',
                border: '1.5px solid rgba(11,26,51,0.1)',
                color: '#0B1A33',
                boxShadow: '0 2px 12px rgba(11,26,51,0.06)',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,150,44,0.4)';
                e.currentTarget.style.color = '#C9962C';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,150,44,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(11,26,51,0.1)';
                e.currentTarget.style.color = '#0B1A33';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(11,26,51,0.06)';
              }}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Count badge */}
    <div className="text-center mt-10 scroll-reveal">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
        style={{ background: 'rgba(11,26,51,0.06)', border: '1px solid rgba(11,26,51,0.12)', color: '#0B1A33' }}>
        <span className="w-2 h-2 rounded-full animate-gold-pulse" style={{ background: '#C9962C', display: 'inline-block' }} />
        18+ Prestigious Client Organizations
      </span>
    </div>
  </section>
);

export default Clients;
