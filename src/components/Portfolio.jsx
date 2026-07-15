import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building, CheckCircle2 } from 'lucide-react';

const ONGOING = [
  {
    title: 'Riyadh Metro',
    sub: 'Lines 3, 4, 5 & 6',
    clients: 'FAST Consortium, Samsung C&T',
    scope: 'MEP Works & Civil',
    status: 'Ongoing',
    color: '#C9962C',
  },
  {
    title: 'Qiddiya Giga-Project',
    sub: 'Speed Park, Six Flags & Infrastructure',
    clients: 'Juffali (JAMED), MENASCO, Binyah',
    scope: 'Electro-Mechanical Works',
    status: 'Ongoing',
    color: '#C9962C',
  },
  {
    title: 'Diriyah Development',
    sub: 'Exit 10 Seven, Misk Mishraq (Irqah)',
    clients: 'Nesma & Partners, Binyah',
    scope: 'Civil & MEP',
    status: 'Ongoing',
    color: '#C9962C',
  },
];

const COMPLETED = [
  {
    title: 'Ar Riyad New Mobility (ANM)',
    sub: 'Riyadh Metro Line 3',
    clients: 'FAST Consortium',
    scope: 'Civil & Infrastructure',
    status: 'Completed',
    color: '#16a34a',
  },
  {
    title: 'Larsen & Toubro (L&T)',
    sub: 'Riyadh Metro Line 3',
    clients: 'Larsen & Toubro',
    scope: 'MEP Works',
    status: 'Completed',
    color: '#16a34a',
  },
  {
    title: 'Saudi Aramco KAPSAR',
    sub: 'Industrial Electro-Mechanical',
    clients: 'Saudi Aramco',
    scope: 'Electro-Mechanical Works',
    status: 'Completed',
    color: '#16a34a',
  },
  {
    title: 'Wadi Al Dawasir',
    sub: 'Water & Power Technologies',
    clients: 'Al Khoraeyef',
    scope: 'Civil Works',
    status: 'Completed',
    color: '#16a34a',
  },
  {
    title: 'KAFD & Samsung C&T',
    sub: 'Al Rajhi HQ, Riyadh Metro',
    clients: 'Samsung C&T',
    scope: 'MEP & Civil',
    status: 'Completed',
    color: '#16a34a',
  },
  {
    title: 'ABB / Drake & Scull',
    sub: 'Industrial Area Power Plant & Al Rajhi',
    clients: 'ABB Contracting, Drake & Scull',
    scope: 'Industrial Works',
    status: 'Completed',
    color: '#16a34a',
  },
];

const ProjectCard = ({ p, dark }) => (
  <div className={`p-6 rounded-2xl h-full transition-all duration-400 ${dark ? 'card-dark' : 'card-light'}`}>
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: p.status === 'Ongoing' ? 'rgba(201,150,44,0.15)' : 'rgba(22,163,74,0.12)', border: `1px solid ${p.color}30` }}>
        {p.status === 'Ongoing' ? <Building size={18} style={{ color: p.color }} /> : <CheckCircle2 size={18} style={{ color: p.color }} />}
      </div>
      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
        style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}>
        {p.status}
      </span>
    </div>
    <h3 className={`font-bold mb-1 ${dark ? 'text-white' : 'text-[#0B1A33]'}`}
      style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem' }}>
      {p.title}
    </h3>
    <p className="text-xs mb-3" style={{ color: p.color }}>{p.sub}</p>
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        <MapPin size={12} style={{ color: p.color, flexShrink: 0 }} />
        <span className={`text-xs ${dark ? 'text-white/55' : 'text-gray-500'}`}>{p.clients}</span>
      </div>
      <p className={`text-xs font-semibold ${dark ? 'text-white/70' : 'text-gray-600'}`}>Scope: {p.scope}</p>
    </div>
  </div>
);

const Portfolio = () => {
  const [tab, setTab] = useState('ongoing');

  useEffect(() => {
    const els = document.querySelectorAll('.portfolio-scroll-reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [tab]);

  return (
    <section id="projects" className="w-full py-24" style={{ background: '#FAF7F2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 scroll-reveal">
          <p className="section-label mb-4">Project Portfolio</p>
          <h2 className="section-title-dark mb-4">
            Mega-Projects &<br />
            <span style={{ color: '#C9962C' }}>Proven Experience</span>
          </h2>
          <span className="gold-divider mx-auto block mb-4" />
          <p className="text-sm max-w-xl mx-auto" style={{ color: '#5a6a82' }}>
            Trusted by industry leaders across Saudi Arabia's most prestigious construction and infrastructure developments.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-10 scroll-reveal">
          <div className="inline-flex rounded-xl p-1" style={{ background: 'rgba(11,26,51,0.08)', border: '1px solid rgba(11,26,51,0.12)' }}>
            {[{ id: 'ongoing', label: '🚧 Ongoing' }, { id: 'completed', label: '✅ Completed' }].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                style={{
                  background: tab === t.id ? '#0B1A33' : 'transparent',
                  color: tab === t.id ? '#C9962C' : '#5a6a82',
                  boxShadow: tab === t.id ? '0 4px 12px rgba(11,26,51,0.2)' : 'none',
                }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(tab === 'ongoing' ? ONGOING : COMPLETED).map((p, i) => (
            <div key={p.title} className={`portfolio-scroll-reveal scroll-reveal stagger-${i+1}`}>
              <ProjectCard p={p} dark={false} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 scroll-reveal">
          <Link to="/projects" className="btn-navy text-xs">
            View Full Project Portfolio <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
