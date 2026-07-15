import React from 'react';
import { Shield, AlertTriangle, Award, Settings } from 'lucide-react';

const HSE_FEATURES = [
  {
    icon: Shield,
    title: 'Global Standards',
    desc: 'Strict compliance with Saudi Aramco, NEBOSH, and OSHA standards across all operations.',
  },
  {
    icon: AlertTriangle,
    title: 'Continuous Training',
    desc: 'All personnel undergo comprehensive safety indoctrination and regular audit programs.',
  },
  {
    icon: Award,
    title: 'Standard PPE',
    desc: 'Standard safety shoes, helmets, and basic PPE provided by Al Mohra for all deployed workers.',
  },
  {
    icon: Settings,
    title: 'QA/QC Oversight',
    desc: 'Our QA/QC inspectors maintain strict oversight on all fabrication and installation works.',
  },
];

const MOBILIZATION = [
  { label: 'Rapid Deployment', desc: 'Mobilization within 48–72 hours upon PO receipt.' },
  { label: 'Premium Accommodation', desc: 'Well-maintained labor camps adhering to Ministry standards.' },
  { label: 'Efficient Transportation', desc: 'Large fleet of modern worker buses for site logistics.' },
];

const HSE = () => (
  <section id="hse" className="w-full py-24 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #0B1A33 0%, #060e1c 100%)' }}>
    <div className="w-full h-px absolute top-0" style={{ background: 'linear-gradient(90deg, transparent, #C9962C, transparent)' }} />
    <div className="orb orb-gold absolute" style={{ width: '450px', height: '450px', top: '-50px', left: '-50px', opacity: 0.08, animationDuration: '18s' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-14 scroll-reveal">
        <p className="section-label mb-4">Safety First</p>
        <h2 className="section-title text-white mb-4">
          Quality & HSE Policy —<br />
          <span style={{ color: '#C9962C' }}>Safety Is Our Foundation</span>
        </h2>
        <span className="gold-divider mx-auto block mb-6" />
        <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
          At Al Mohra Contracting Company, Health, Safety, and Environment (HSE) is not just a policy; it is a core operational value. We strictly adhere to global and local safety regulations to ensure a zero-harm environment.
        </p>
      </div>

      {/* HSE Stats (TBD) */}
      <div className="grid grid-cols-3 gap-4 mb-14 scroll-reveal">
        {[
          { label: 'Safety Days w/o LTI', value: 'TBD' },
          { label: 'Training Hours', value: 'TBD' },
          { label: 'Certified Workers', value: 'TBD' },
        ].map(({ label, value }) => (
          <div key={label} className="text-center p-6 rounded-2xl"
            style={{ background: 'rgba(201,150,44,0.06)', border: '1px solid rgba(201,150,44,0.15)' }}>
            <p className="font-black text-2xl mb-1" style={{ color: '#C9962C', fontFamily: 'Playfair Display, serif' }}>{value}</p>
            <p className="text-xs text-white/55">{label}</p>
            <p className="text-[9px] mt-1" style={{ color: 'rgba(201,150,44,0.4)' }}>To be confirmed by client</p>
          </div>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {HSE_FEATURES.map((f, i) => (
          <div key={f.title}
            className={`p-6 rounded-2xl card-dark scroll-reveal stagger-${i+1}`}
            style={{ background: 'rgba(20,36,69,0.7)', border: '1px solid rgba(201,150,44,0.12)' }}>
            <f.icon size={28} style={{ color: '#C9962C', marginBottom: '1rem' }} />
            <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobilization Section */}
      <div className="p-8 rounded-2xl scroll-reveal"
        style={{ background: 'rgba(20,36,69,0.6)', border: '1px solid rgba(201,150,44,0.15)' }}>
        <p className="section-label mb-6">Workforce Mobilization — Logistics & Camp Management</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOBILIZATION.map(({ label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5 animate-gold-pulse" style={{ background: '#C9962C' }} />
              <div>
                <p className="font-bold text-white text-sm mb-1">{label}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {['Safety is a Value', 'Protecting People', 'Preserving the Environment', 'Building a Safer Future'].map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg"
              style={{ background: 'rgba(201,150,44,0.1)', color: 'rgba(201,150,44,0.8)', border: '1px solid rgba(201,150,44,0.18)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full h-px mt-16" style={{ background: 'linear-gradient(90deg, transparent, #C9962C, transparent)' }} />
    </div>
  </section>
);

export default HSE;
