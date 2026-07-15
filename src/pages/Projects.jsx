import React, { useEffect } from 'react';
import Portfolio from '../components/Portfolio';
import Clients from '../components/Clients';
import ContactForm from '../components/ContactForm';
import { MapPin, Building, CheckCircle2, Users } from 'lucide-react';

const PageHero = ({ title, sub, label }) => (
  <section className="w-full py-20 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #060e1c 0%, #0B1A33 60%, #142445 100%)' }}>
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: 'linear-gradient(rgba(201,150,44,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,44,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    <div className="orb orb-gold absolute" style={{ width: '400px', height: '400px', top: '-100px', right: '-50px', opacity: 0.1 }} />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="section-label mb-4">{label}</p>
      <h1 className="text-white font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
        {title.split(' ')[0]} <span style={{ color: '#C9962C' }}>{title.substring(title.indexOf(' ') + 1)}</span>
      </h1>
      <p className="text-sm max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
        {sub}
      </p>
    </div>
  </section>
);

// Client references from commercial offer
const CLIENT_REFERENCES = [
  'Pico.', 'Fast Consortium LLC – Riyadh Metro', 'FCC Electromechanical – Riyadh Metro Line 5 & 6',
  'BACS – Riyadh Metro', 'Samsung Co. (Al Rajhi Head Quarter, Riyadh Metro & KAFD)',
  'Ar Riyadh New Mobility (FAST) – Line 3, Riyadh Metro', 'Alstom – TJV & UJV – Riyadh Metro',
  'Saudi Arabian Baytur Construction Co. – KAFD & Misk Project', 'Larsen & Toubro (L&T) – Riyadh Metro',
  'Technical Development Co. (TDC) – for Contracting', 'Saudi Constructioneers Ltd.',
  'Al Fanar Group (Construction and Factory)',
  'Juffali Electro Mechanical Company (JAMED) – Six Flags Project, Qiddiya',
  'MAN Enterprise Al-Saudia L.L.C.',
  'T. Nagadi Preformed Concrete Group of Factories (Riyadh, Yanbu, Al Nakhi & Tabuk)',
  'Al Etqan Factory Co. for Electric Panels – Saudi Arabia',
  'Dar Aluminium Products Co. LTD (DALPCO) – Riyadh, Saudi Arabia',
  'Ajwad Aluminum Company – Riyadh, Saudi Arabia',
  'Hana Food Industries Company (Joint Stock Company)',
  'Honeywell Co. – Saudi Arabia (Airport – Riyadh)',
  'Kenana Contracting Company Ltd.',
];

const PrestigiousClients = () => (
  <section className="w-full py-24" style={{ background: '#FAF7F2' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14 scroll-reveal">
        <p className="section-label mb-4">Client Experience</p>
        <h2 className="section-title-dark mb-4">
          Prestigious <span style={{ color: '#C9962C' }}>Client References</span>
        </h2>
        <span className="gold-divider mx-auto block mb-4" />
        <p className="text-sm" style={{ color: '#5a6a82' }}>21 verified client organizations across Saudi Arabia's mega-project landscape.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CLIENT_REFERENCES.map((c, i) => (
          <div key={i}
            className={`p-5 rounded-xl flex items-start gap-3 scroll-reveal stagger-${(i % 6) + 1} card-light`}
            style={{ border: '1.5px solid rgba(11,26,51,0.08)', boxShadow: '0 2px 12px rgba(11,26,51,0.04)' }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'rgba(201,150,44,0.1)', border: '1px solid rgba(201,150,44,0.25)' }}>
              <CheckCircle2 size={12} style={{ color: '#C9962C' }} />
            </div>
            <p className="text-sm font-medium" style={{ color: '#0B1A33' }}>{c}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsPage = () => {
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
      <PageHero
        label="Project Portfolio"
        title="Ongoing Mega-Projects & Completed Works"
        sub="Trusted by industry leaders across Saudi Arabia's most prestigious construction and infrastructure developments."
      />
      <Portfolio />
      <PrestigiousClients />
      <Clients />
      <ContactForm />
    </div>
  );
};

export default ProjectsPage;
