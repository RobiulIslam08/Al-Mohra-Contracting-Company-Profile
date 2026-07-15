import React from 'react';

const VALUES = [
  { en: 'QUALITY',    ar: 'جودة',    desc: 'Uncompromising standards in every task.',          color: '#C9962C' },
  { en: 'EXCELLENCE', ar: 'إتقان',   desc: 'Precision and mastery in execution.',               color: '#E0B040' },
  { en: 'EXPERIENCE', ar: 'خبرة',    desc: 'Leveraging deep industry knowledge.',               color: '#C9962C' },
  { en: 'COMMITMENT', ar: 'التزام',  desc: 'Unwavering dedication to client success.',          color: '#E0B040' },
];

const BOTTOM_VALUES = [
  { title: 'INTEGRITY',   desc: 'We do what we say.' },
  { title: 'COMMITMENT',  desc: 'We deliver with dedication.' },
  { title: 'QUALITY',     desc: 'We never compromise.' },
  { title: 'PARTNERSHIP', desc: 'We grow together with our clients.' },
];

const VisionMission = () => (
  <section id="vision-mission" className="w-full py-24" style={{ background: '#FAF7F2' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-16 scroll-reveal">
        <p className="section-label mb-4">Our Foundation</p>
        <h2 className="section-title-dark mb-4">
          Vision, Mission &<br />
          <span style={{ color: '#C9962C' }}>Core Values</span>
        </h2>
        <span className="gold-divider mx-auto block" />
      </div>

      {/* Vision & Mission cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Vision */}
        <div className="scroll-reveal-left p-8 rounded-2xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0B1A33, #142445)', border: '1px solid rgba(201,150,44,0.2)' }}>
          <div className="absolute top-0 right-0 w-48 h-48 opacity-10 rounded-full"
            style={{ background: 'radial-gradient(circle, #C9962C, transparent)', transform: 'translate(40%, -40%)' }} />
          <p className="section-label mb-4" style={{ color: '#C9962C' }}>Our Vision</p>
          <h3 className="text-white text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Vision Statement
          </h3>
          <p className="text-white/80 leading-relaxed text-sm italic" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem' }}>
            "To be the most reliable and innovative contracting and manpower supply partner in the Kingdom of Saudi Arabia, setting the benchmark for industrial excellence and workforce proficiency."
          </p>
        </div>

        {/* Mission */}
        <div className="scroll-reveal-right p-8 rounded-2xl relative overflow-hidden"
          style={{ background: '#ffffff', border: '1.5px solid rgba(11,26,51,0.1)', boxShadow: '0 8px 32px rgba(11,26,51,0.08)' }}>
          <div className="absolute bottom-0 left-0 w-40 h-40 opacity-5 rounded-full"
            style={{ background: 'radial-gradient(circle, #0B1A33, transparent)', transform: 'translate(-30%, 30%)' }} />
          <p className="section-label mb-4">Our Mission</p>
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0B1A33' }}>
            Mission Statement
          </h3>
          <p className="leading-relaxed text-sm italic" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#5a6a82' }}>
            "To empower construction and industrial sectors by delivering certified, highly skilled manpower and world-class contracting services, ensuring every project is completed safely, efficiently, and to the highest global standards."
          </p>
        </div>
      </div>

      {/* Core Values — bilingual grid */}
      <div className="mb-12">
        <p className="text-center section-label mb-8">Core Values / القيم الأساسية</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {VALUES.map((v, i) => (
            <div key={v.en}
              className={`p-6 rounded-2xl text-center scroll-reveal stagger-${i+1} card-dark cursor-default`}
              style={{ background: 'linear-gradient(135deg, #0B1A33, #142445)', border: '1px solid rgba(201,150,44,0.15)' }}>
              <p className="text-2xl mb-1" style={{ color: v.color, fontFamily: 'serif', lineHeight: 1.2 }}>{v.ar}</p>
              <p className="text-xs font-black tracking-widest uppercase mb-3 text-white">{v.en}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Values Strip */}
      <div className="p-6 rounded-2xl scroll-reveal"
        style={{ background: 'linear-gradient(135deg, #0B1A33, #142445)', border: '1px solid rgba(201,150,44,0.15)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BOTTOM_VALUES.map(({ title, desc }, i) => (
            <div key={title} className="text-center py-4"
              style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <p className="font-black text-xs tracking-widest uppercase mb-2" style={{ color: '#C9962C' }}>{title}</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VisionMission;
