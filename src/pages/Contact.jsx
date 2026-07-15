import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const PageHero = () => (
  <section className="w-full pt-32 pb-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[40vh]"
    style={{ background: 'linear-gradient(135deg, #FAF7F2 0%, #FFFFFF 100%)' }}>
    <div className="absolute inset-0 opacity-20"
      style={{ backgroundImage: 'linear-gradient(rgba(11,26,51,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,26,51,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    <div className="orb orb-gold absolute" style={{ width: '500px', height: '500px', top: '-150px', right: '-100px', opacity: 0.1 }} />
    <div className="orb orb-gold absolute" style={{ width: '300px', height: '300px', bottom: '-100px', left: '-50px', opacity: 0.08 }} />
    
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-reveal">
      <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full mb-6"
        style={{ background: 'rgba(201,150,44,0.1)', border: '1px solid rgba(201,150,44,0.2)' }}>
        <span className="w-2 h-2 rounded-full" style={{ background: '#C9962C' }}></span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#0B1A33]">Reach Out</span>
      </div>
      <h1 className="font-bold mb-6 leading-tight text-[#0B1A33]" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
        Get in <span style={{ color: '#C9962C', fontStyle: 'italic' }}>Touch</span>
      </h1>
      <p className="text-base sm:text-lg max-w-2xl mx-auto font-light" style={{ color: '#5a6a82' }}>
        Ready to discuss your project requirements? Our dedicated team is available to help you with world-class manpower, contracting, and facility management solutions across Saudi Arabia.
      </p>
    </div>
  </section>
);

const MapSection = () => (
  <section className="w-full py-24 relative overflow-hidden" style={{ background: '#FAF7F2' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="scroll-reveal-left">
          <p className="section-label mb-4">Head Office Location</p>
          <h2 className="section-title-dark mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Visit Our <span style={{ color: '#C9962C' }}>Headquarters</span>
          </h2>
          <span className="gold-divider block mb-6" />
          <p className="text-sm leading-relaxed mb-8" style={{ color: '#5a6a82' }}>
            Centrally located in the heart of Riyadh, our headquarters serves as the central hub for all our operations. 
            We welcome clients to visit our office for in-person consultations and project discussions.
          </p>
          
          <div className="flex items-start gap-4 mb-6 p-6 rounded-2xl bg-white shadow-sm" style={{ border: '1px solid rgba(11,26,51,0.05)' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(201,150,44,0.1)' }}>
              <span style={{ color: '#C9962C', fontSize: '1.5rem' }}>📍</span>
            </div>
            <div>
              <h4 className="font-bold mb-1" style={{ color: '#0B1A33', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>
                Al Mohra Contracting Company
              </h4>
              <p className="text-sm" style={{ color: '#5a6a82' }}>
                2456 Al Wadeea, Al Olaya Dist.<br />
                Postal Code 12222, Riyadh, KSA
              </p>
            </div>
          </div>
          
          <a href="https://maps.google.com/?q=Al+Olaya+District+Riyadh+Saudi+Arabia"
            target="_blank" rel="noopener noreferrer"
            className="btn-navy inline-flex items-center gap-2">
            Open in Google Maps
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
        
        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl scroll-reveal-right"
          style={{ border: '8px solid white' }}>
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          <iframe
            src="https://maps.google.com/maps?q=Al%20Olaya,%20Riyadh,%20Saudi%20Arabia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'relative', zIndex: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
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
    <div className="w-full overflow-x-hidden" style={{ background: '#FAF7F2', minHeight: '100vh' }}>
      <PageHero />
      
      <div className="relative z-20 -mt-10 lg:-mt-20">
        <ContactForm />
      </div>

      <MapSection />
    </div>
  );
};

export default ContactPage;
