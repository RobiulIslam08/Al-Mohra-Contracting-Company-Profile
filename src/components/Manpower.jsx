import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DIVISIONS = {
  'MEP & Technical': [
    { en: 'Electrician', ar: 'كهربائي' },
    { en: 'Plumber - PPR', ar: 'سباك' },
    { en: 'Plumber - Copper', ar: 'سباك نحاس' },
    { en: 'Pipe Fitter', ar: 'مركب أنابيب' },
    { en: 'Duct Fitter', ar: '' },
  ],
  'Civil & Construction': [
    { en: 'Steel Fixer', ar: 'حداد مسلح' },
    { en: 'Carpenter – Shuttering & Finishing', ar: 'نجار' },
    { en: 'Block Mason', ar: 'بناء طابوق' },
    { en: 'Plaster Mason', ar: 'مليس' },
  ],
  'Heavy Equipment': [
    { en: 'Heavy Driver', ar: '' }, { en: 'Light Driver', ar: '' },
    { en: 'Crane Operator', ar: '' }, { en: 'Excavator Operator', ar: '' },
    { en: 'Loader Operator', ar: '' }, { en: 'Forklift Operator', ar: '' },
    { en: 'Boom Truck Driver', ar: '' }, { en: 'Grader Operator', ar: '' },
  ],
  'Mechanical & Industrial': [
    { en: 'TIG Welder', ar: '' }, { en: 'MIG Welder', ar: '' },
    { en: '6G Welder', ar: '' }, { en: 'Arc Welder', ar: '' },
    { en: 'Steel Fabricator', ar: '' }, { en: 'Pipe Fabricator', ar: '' },
    { en: 'Mechanical Fitter', ar: '' }, { en: 'Rigger (Level 1, 2, 3)', ar: '' },
  ],
  'Electrical & HVAC': [
    { en: 'Industrial Electrician', ar: '' }, { en: 'Building Electrician', ar: '' },
    { en: 'Cable Jointer', ar: '' }, { en: 'Instrument Technician', ar: '' },
    { en: 'HVAC Technician', ar: '' }, { en: 'AC Mechanic', ar: '' },
    { en: 'Auto Electrician', ar: '' }, { en: 'Fire Alarm Technician', ar: '' },
  ],
  'Civil Finishing': [
    { en: 'Scaffolder', ar: '' }, { en: 'Spray Painter', ar: '' },
    { en: 'Wall Painter', ar: '' }, { en: 'Tiles Mason', ar: '' },
    { en: 'Marble Mason', ar: '' }, { en: 'Gypsum Carpenter', ar: '' },
    { en: 'Aluminium Fitter', ar: 'فني ألمنيوم' }, { en: 'Glass Fitter', ar: 'فني زجاج' },
    { en: 'Silicon Man', ar: 'فني سيليكون' },
  ],
  'HSE & Support': [
    { en: 'Safety Officer', ar: '' }, { en: 'Safety Supervisor', ar: '' },
    { en: 'Store Keeper', ar: '' }, { en: 'Time Keeper', ar: '' },
    { en: 'Document Controller', ar: '' }, { en: 'Tea Boy', ar: '' },
    { en: 'Routine Cleaner', ar: '' }, { en: 'General Helper', ar: '' },
  ],
};

const BOTTOM_STATS = [
  { value: '48–72h', label: 'Mobilization Time', sub: 'Upon PO receipt' },
  { value: '100%', label: 'Verified Workers & Docs', sub: 'Iqama, Medical & Insurance' },
  { value: 'Scalable', label: 'As Per Project Demand', sub: 'Small to large teams' },
];

const Manpower = () => {
  const [activeDiv, setActiveDiv] = useState('MEP & Technical');
  const divisionKeys = Object.keys(DIVISIONS);

  return (
    <section id="manpower" className="w-full py-24"
      style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #f0ebe0 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 scroll-reveal">
          <p className="section-label mb-4">Comprehensive Workforce</p>
          <h2 className="section-title-dark mb-4">
            60+ Manpower <span style={{ color: '#C9962C' }}>Categories</span>
          </h2>
          <span className="gold-divider mx-auto block mb-4" />
          <p className="text-sm max-w-xl mx-auto" style={{ color: '#5a6a82' }}>
            Scalable workforce for every project need — right people, right trade, on time.
          </p>
        </div>

        {/* Division Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 scroll-reveal">
          {divisionKeys.map((div) => (
            <button key={div} onClick={() => setActiveDiv(div)}
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
              style={{
                background: activeDiv === div ? '#0B1A33' : 'rgba(11,26,51,0.06)',
                color: activeDiv === div ? '#C9962C' : '#5a6a82',
                border: `1px solid ${activeDiv === div ? 'rgba(201,150,44,0.3)' : 'rgba(11,26,51,0.1)'}`,
              }}>
              {div}
            </button>
          ))}
        </div>

        {/* Category Tags */}
        <div className="p-8 rounded-2xl mb-10 scroll-reveal"
          style={{ background: '#ffffff', border: '1.5px solid rgba(11,26,51,0.1)', boxShadow: '0 8px 32px rgba(11,26,51,0.08)' }}>
          <p className="text-xs font-black uppercase tracking-widest mb-6 pl-3"
            style={{ color: '#C9962C', borderLeft: '2px solid #C9962C' }}>
            {activeDiv} Division
          </p>
          <div className="flex flex-wrap gap-3">
            {DIVISIONS[activeDiv].map(({ en, ar }) => (
              <span key={en} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-default"
                style={{ background: 'rgba(11,26,51,0.05)', border: '1px solid rgba(11,26,51,0.1)', color: '#0B1A33' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,150,44,0.1)'; e.currentTarget.style.borderColor = 'rgba(201,150,44,0.35)'; e.currentTarget.style.color = '#C9962C'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(11,26,51,0.05)'; e.currentTarget.style.borderColor = 'rgba(11,26,51,0.1)'; e.currentTarget.style.color = '#0B1A33'; }}
              >
                {en}
                {ar && <span className="text-xs opacity-60" style={{ fontFamily: 'serif', direction: 'rtl' }}>{ar}</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 scroll-reveal">
          {BOTTOM_STATS.map((s, i) => (
            <div key={s.label} className="p-6 rounded-2xl text-center"
              style={{ background: 'linear-gradient(135deg, #0B1A33, #142445)', border: '1px solid rgba(201,150,44,0.15)' }}>
              <p className="counter-value font-black text-3xl mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</p>
              <p className="text-white font-bold text-sm mb-1">{s.label}</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 scroll-reveal">
          <Link to="/services" className="btn-gold">
            View Full Manpower List <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Manpower;
