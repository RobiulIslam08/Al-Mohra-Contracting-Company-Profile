import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Building, Sparkles } from 'lucide-react';

const TABS = [
  {
    id: 'manpower',
    label: 'Manpower Solutions',
    icon: Wrench,
    sub: 'Certified Welders | Fabricators | Erectors | Industrial Workforce',
    cards: [
      { title: 'Steel Manpower', tags: ['Fabricators', 'Erectors', 'Welders'], desc: 'Specialized steel workforce — fabrication, erection, welding and surface treatment crews certified to Aramco & AWS/ISO standards.' },
      { title: 'MEP & Technical', tags: ['Electricians', 'Plumbers', 'HVAC'], desc: 'Comprehensive MEP manpower and expert technical supervision — the brain and nerves of every project.' },
      { title: 'Civil & Construction', tags: ['Steel Fixers', 'Masons', 'Carpenters'], desc: 'Expert rebar crews, block masons and shuttering carpenters for large-scale infrastructure and building projects.' },
      { title: 'Mechanical & Industrial', tags: ['TIG/MIG Welders', 'Fitters', 'Riggers'], desc: 'Heavy industrial and mechanical division supplying pipe fabricators, riggers (Level 1-3) and mechanical fitters.' },
      { title: 'Heavy Equipment & Transport', tags: ['Crane Ops', 'Excavators', 'Forklifts'], desc: 'Full fleet of equipment operators — crane, excavator, loader, forklift, boom truck and grader operators.' },
      { title: 'HSE & Support Services', tags: ['Safety Officers', 'Store Keepers', 'Helpers'], desc: 'HSE supervisors, document controllers, safety officers and support staff ensuring zero-harm operations.' },
    ],
  },
  {
    id: 'contracting',
    label: 'Contracting Services',
    icon: Building,
    sub: 'Structural | Architectural | Industrial',
    cards: [
      { title: 'Structural Steel Works', tags: ['Beams', 'Columns', 'Trusses'], desc: 'The backbone of mega-projects — expert installation of steel beams, columns, trusses and heavy-duty steel frames.' },
      { title: 'Industrial & Heavy Duty Steel', tags: ['Pipe Racks', 'Platforms', 'Tanks'], desc: 'Engineered for extreme environments — pipe rack systems, industrial platforms, storage tanks and factory structures.' },
      { title: 'Architectural & Finishing', tags: ['Doors', 'Handrails', 'Décor'], desc: 'Precision-designed steel doors, elegant handrails, staircases and decorative metal works for malls and villas.' },
      { title: 'Telecom & Infrastructure', tags: ['Towers', 'Networks', 'Roads'], desc: 'Self-supporting telecom towers, water/electrical networks and high-quality road & asphalt pavement construction.' },
      { title: 'Renovation & Maintenance', tags: ['Retrofitting', 'Repairs', 'Refurbishment'], desc: 'Structural strengthening, damaged steel replacement and complete commercial & industrial facility refurbishment.' },
    ],
  },
  {
    id: 'facility',
    label: 'Facility Management',
    icon: Sparkles,
    sub: 'Hospitals | Markets | Corporate | Factories',
    cards: [
      { title: 'Commercial & Industrial Cleaning', tags: ['Market', 'Factory', 'Office'], desc: 'Highly trained cleaning personnel for malls, supermarkets, industrial facilities, warehouses and workplaces.' },
      { title: 'Hospital & Government Cleaning', tags: ['Medical Grade', 'Disinfection', 'Public'], desc: 'Vetted professionals with strict medical sanitation protocols for hospitals, clinics and government buildings.' },
      { title: 'Catering & Support Services', tags: ['Labor Camp', 'Corporate', 'Hospitality'], desc: 'Complete catering — nutritious hygienic meals for labor camps, industrial sites and corporate events.' },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('manpower');
  const tab = TABS.find(t => t.id === activeTab);

  return (
    <section id="services" className="w-full py-24 relative"
      style={{ background: 'linear-gradient(180deg, #060e1c 0%, #0B1A33 100%)' }}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px', transform: 'rotate(180deg)' }}>
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#FAF7F2" />
        </svg>
      </div>

      <div className="orb orb-gold absolute" style={{ width: '400px', height: '400px', top: 0, left: '10%', opacity: 0.08, animationDuration: '20s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <p className="section-label mb-4">What We Do</p>
          <h2 className="section-title text-white mb-4">
            Our Core <span style={{ color: '#C9962C' }}>Service Divisions</span>
          </h2>
          <span className="gold-divider mx-auto block mb-6" />
          <p className="text-sm max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Three integrated service divisions delivering end-to-end solutions across Saudi Arabia's construction and industrial sectors.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 p-2 rounded-2xl max-w-2xl mx-auto scroll-reveal"
          style={{ background: 'rgba(20,36,69,0.6)', border: '1px solid rgba(201,150,44,0.12)' }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`service-tab flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold tracking-wider uppercase transition-all ${activeTab === t.id ? 'active' : ''}`}
              style={{
                color: activeTab === t.id ? '#C9962C' : 'rgba(255,255,255,0.55)',
                border: `1px solid ${activeTab === t.id ? 'rgba(201,150,44,0.4)' : 'transparent'}`,
              }}
            >
              <t.icon size={14} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab sub-label */}
        <p className="text-center text-xs tracking-wider mb-10 scroll-reveal" style={{ color: 'rgba(201,150,44,0.6)' }}>
          {tab.sub}
        </p>

        {/* Cards — bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tab.cards.map((card, i) => (
            <div key={card.title}
              className={`service-card p-6 scroll-reveal stagger-${i+1}`}
              style={{ background: 'rgba(20,36,69,0.7)', border: '1px solid rgba(201,150,44,0.12)' }}>
              <div className="icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(201,150,44,0.12)', border: '1px solid rgba(201,150,44,0.2)' }}>
                <tab.icon size={18} style={{ color: '#C9962C' }} />
              </div>
              <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem' }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>{card.desc}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg"
                    style={{ background: 'rgba(201,150,44,0.1)', color: 'rgba(201,150,44,0.8)', border: '1px solid rgba(201,150,44,0.18)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 scroll-reveal">
          <Link to="/services" className="btn-gold">
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
