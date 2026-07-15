import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const PageHero = () => (
  <section className="w-full py-20 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #060e1c 0%, #0B1A33 60%, #142445 100%)' }}>
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: 'linear-gradient(rgba(201,150,44,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,44,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    <div className="orb orb-gold absolute" style={{ width: '400px', height: '400px', top: '-100px', right: '-50px', opacity: 0.1 }} />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="section-label mb-4">Reach Out</p>
      <h1 className="text-white font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
        Contact <span style={{ color: '#C9962C' }}>Us</span>
      </h1>
      <p className="text-sm max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
        Ready to discuss your project requirements? Our team is available to help you with manpower, contracting, and facility management solutions.
      </p>
    </div>
    <div className="section-divider-wave">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '50px' }}>
        <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z"
          style={{ fill: 'linear-gradient(135deg, #0B1A33, #060e1c)' }} fill="#0B1A33" />
      </svg>
    </div>
  </section>
);

const ContactPage = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <PageHero />
      <ContactForm />

      {/* Head Office Map Placeholder */}
      <section className="w-full py-16" style={{ background: '#FAF7F2' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Head Office Location</p>
          <h2 className="section-title-dark mb-8" style={{ fontSize: '2rem' }}>
            Find <span style={{ color: '#C9962C' }}>Us</span>
          </h2>
          <div className="rounded-2xl overflow-hidden h-64 flex items-center justify-center scroll-reveal"
            style={{ background: 'linear-gradient(135deg, #0B1A33, #142445)', border: '1px solid rgba(201,150,44,0.2)' }}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(201,150,44,0.2)', border: '1px solid rgba(201,150,44,0.4)' }}>
                <span style={{ color: '#C9962C', fontSize: '1.5rem' }}>📍</span>
              </div>
              <p className="font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Al Mohra Contracting Company
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                2456 Al Wadeea, Al Olaya Dist.<br />
                Postal Code 12222, Riyadh, KSA
              </p>
              <a href="https://maps.google.com/?q=Al+Olaya+District+Riyadh+Saudi+Arabia"
                target="_blank" rel="noopener noreferrer"
                className="inline-block mt-4 btn-outline-gold text-xs px-4 py-2">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
