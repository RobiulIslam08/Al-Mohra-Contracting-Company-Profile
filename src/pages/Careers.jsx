import React, { useEffect } from 'react';
import ApplicationForm from '../components/ApplicationForm';

const PageHero = () => (
  <section className="w-full py-20 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #060e1c 0%, #0B1A33 60%, #142445 100%)' }}>
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: 'linear-gradient(rgba(201,150,44,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,44,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    <div className="orb orb-gold absolute" style={{ width: '400px', height: '400px', top: '-100px', right: '-50px', opacity: 0.1 }} />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="section-label mb-4">Careers</p>
      <h1 className="text-white font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
        Join Our <span style={{ color: '#C9962C' }}>Team</span>
      </h1>
      <p className="text-sm max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
        Build your career with one of Saudi Arabia's premier contracting and manpower supply firms. We value skill, dedication, and integrity.
      </p>
    </div>
    <div className="section-divider-wave">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '50px' }}>
        <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z"
          style={{ fill: '#FAF7F2' }} />
      </svg>
    </div>
  </section>
);

const CareersPage = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <ApplicationForm />
      </div>
    </div>
  );
};

export default CareersPage;
