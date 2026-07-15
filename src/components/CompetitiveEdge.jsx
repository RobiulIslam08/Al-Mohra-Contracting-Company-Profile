import React from 'react';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const EDGES = [
  {
    icon: TrendingUp,
    title: 'Proven Track Record in Giga-Projects',
    desc: 'Trusted by leading developers and contractors in Saudi Arabia across prestigious mega-projects including Riyadh Metro, Qiddiya, Diriyah, KAFD and Saudi Aramco.',
  },
  {
    icon: Shield,
    title: '100% Legal & Government Compliance',
    desc: 'Fully compliant with Saudi Labor Law and all government regulations — CR, VAT, GOSI, Chamber of Commerce — ensuring peace of mind and risk-free operations.',
  },
  {
    icon: Zap,
    title: 'Scalable & Rapid Workforce Solutions',
    desc: 'Agile manpower deployment with the capability to scale up workforce as per project demand — quickly and efficiently. Mobilization within 48–72 hours.',
  },
];

const BADGE_STATS = [
  { value: 'ISO', label: 'Certified Standards' },
  { value: '60+', label: 'Manpower Categories' },
  { value: '24/7', label: 'Support Available' },
  { value: 'HSE', label: 'Zero-Harm Focus' },
];

const CompetitiveEdge = () => (
  <section id="competitive-edge" className="w-full py-24" style={{ background: '#FAF7F2' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-14 scroll-reveal">
        <p className="section-label mb-4">Why Choose Us</p>
        <h2 className="section-title-dark mb-4">
          Why Partner<br />
          <span style={{ color: '#C9962C' }}>With Al Mohra?</span>
        </h2>
        <span className="gold-divider mx-auto block mb-4" />
      </div>

      {/* 3 large edge cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {EDGES.map((e, i) => (
          <div key={e.title}
            className={`p-8 rounded-2xl scroll-reveal stagger-${i+1} card-light relative overflow-hidden group`}
            style={{ border: '1.5px solid rgba(11,26,51,0.1)', boxShadow: '0 8px 32px rgba(11,26,51,0.06)' }}>
            {/* Hover accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-400"
              style={{ background: 'linear-gradient(90deg, #C9962C, #E0B040)', transform: 'scaleX(0)', transformOrigin: 'left' }}
              ref={el => {
                if (!el) return;
                el.closest('.group')?.addEventListener('mouseenter', () => el.style.transform = 'scaleX(1)');
                el.closest('.group')?.addEventListener('mouseleave', () => el.style.transform = 'scaleX(0)');
              }}
            />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 icon-wrap"
              style={{ background: 'rgba(11,26,51,0.06)', border: '1px solid rgba(11,26,51,0.1)' }}>
              <e.icon size={24} style={{ color: '#0B1A33' }} />
            </div>
            <h3 className="font-bold text-xl mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0B1A33' }}>
              {e.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5a6a82' }}>{e.desc}</p>
          </div>
        ))}
      </div>

      {/* Badge stats strip */}
      <div className="p-6 rounded-2xl scroll-reveal bg-white"
        style={{ border: '1.5px solid rgba(11,26,51,0.08)', boxShadow: '0 8px 32px rgba(11,26,51,0.04)' }}>
        <p className="text-center text-xs font-black uppercase tracking-widest mb-6" style={{ color: '#C9962C' }}>
          YOUR VISION. OUR COMMITMENT. — Building a Stronger Tomorrow Together.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BADGE_STATS.map(({ value, label }, i) => (
            <div key={label} className="text-center py-4"
              style={{ borderRight: i < 3 ? '1px solid rgba(11,26,51,0.08)' : 'none' }}>
              <p className="counter-value font-black text-3xl mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#0B1A33' }}>{value}</p>
              <p className="text-xs text-[#0B1A33]/70">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {['Experience You Can Trust', 'Commitment to Excellence', 'People Our Strength', 'Delivering On Time'].map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg"
              style={{ background: 'rgba(201,150,44,0.1)', color: 'rgba(201,150,44,0.8)', border: '1px solid rgba(201,150,44,0.18)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CompetitiveEdge;
