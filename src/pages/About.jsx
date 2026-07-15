import React, { useEffect } from 'react';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import Equipment from '../components/Equipment';
import Vision2030 from '../components/Vision2030';
import { Quote } from 'lucide-react';

// Page Hero
const PageHero = ({ title, sub, label }) => (
  <section className="w-full py-20 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #060e1c 0%, #0B1A33 60%, #142445 100%)' }}>
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: 'linear-gradient(rgba(201,150,44,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,44,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    <div className="orb orb-gold absolute" style={{ width: '400px', height: '400px', top: '-100px', right: '-50px', opacity: 0.1 }} />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="section-label mb-4">{label}</p>
      <h1 className="text-white font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
        {title}
      </h1>
      <p className="text-sm max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>{sub}</p>
    </div>
  </section>
);

// Visionary Leadership Section
const VisionaryLeadership = () => {
  const LEADERS = [
    {
      name: 'King Abdulaziz Al Saud',
      quote: 'The Kingdom\'s success is measured by the well-being of its people.',
      initial: 'A',
    },
    {
      name: 'King Salman bin Abdulaziz Al Saud',
      quote: 'Our ambition is to build a vibrant society, a thriving economy, and an ambitious nation.',
      initial: 'S',
    },
    {
      name: 'Crown Prince Mohammed bin Salman',
      quote: 'Our goal is clear: We will be one of the world\'s greatest nations.',
      initial: 'M',
    },
  ];

  return (
    <section id="leadership" className="w-full py-24 relative overflow-hidden"
      style={{ background: '#ffffff' }}>
      <div className="orb orb-gold absolute" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.04 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Our Visionary Leadership</p>
          <h2 className="section-title-dark mb-4">
            <span style={{ color: '#C9962C' }}>Guided</span> By a Visionary Kingdom
          </h2>
          <span className="gold-divider mx-auto block mb-6" />
          <p className="text-sm max-w-xl mx-auto" style={{ color: '#5a6a82' }}>
            Al Mohra Contracting Company is honored to operate in alignment with the noble vision and leadership of the Kingdom of Saudi Arabia.
          </p>
          <p className="text-xs mt-2" style={{ color: 'rgba(11,26,51,0.5)' }}>
            * Official portraits not shown. Client to provide approved photos from Saudi government photo bank for final publication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERS.map((l, i) => (
            <div key={l.name}
              className="p-8 rounded-2xl text-center relative overflow-hidden scroll-reveal"
              style={{
                background: '#FAF7F2',
                border: '1.5px solid rgba(11,26,51,0.08)',
                boxShadow: '0 8px 32px rgba(11,26,51,0.04)',
                animationDelay: `${i * 0.15}s`,
              }}>
              {/* Decorative gold frame motif (top corners) */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: '#C9962C' }} />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: '#C9962C' }} />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: '#C9962C' }} />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: '#C9962C' }} />

              {/* Portrait placeholder */}
              <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center font-black text-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,150,44,0.2), rgba(201,150,44,0.08))',
                  border: '2px solid rgba(201,150,44,0.4)',
                  color: '#C9962C',
                  fontFamily: 'Playfair Display, serif',
                }}>
                {l.initial}
              </div>

              <Quote size={24} className="mx-auto mb-4" style={{ color: 'rgba(201,150,44,0.4)' }} />
              <blockquote className="mb-6 leading-relaxed italic"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#0B1A33' }}>
                "{l.quote}"
              </blockquote>
              <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(11,26,51,0.15), transparent)' }} />
              <p className="font-bold text-sm" style={{ color: '#C9962C' }}>{l.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <PageHero
        label="About Al Mohra"
        title="Company Overview"
        sub="Premier contracting and manpower supply firm in Riyadh, Kingdom of Saudi Arabia — aligned with Saudi Vision 2030."
      />
      <About />
      <VisionaryLeadership />
      <VisionMission />
      <Vision2030 />
      <Equipment />
    </div>
  );
};

export default AboutPage;
