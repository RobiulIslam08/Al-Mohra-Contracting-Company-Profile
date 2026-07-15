import React, { useState, useEffect, useRef } from 'react';

const STATS = [
  { value: '100', suffix: '%', label: 'Legal & Govt Compliance', sub: 'Fully licensed operation' },
  { value: '48',  suffix: '–72h', label: 'Fast Mobilization', sub: 'Upon PO receipt' },
  { value: '60',  suffix: '+', label: 'Manpower Categories', sub: 'Across all trades' },
  { value: '21',  suffix: '+', label: 'Prestigious Clients', sub: 'Including Riyadh Metro & Aramco' },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const num = parseInt(target, 10);
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(num);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const StatItem = ({ stat, index, visible }) => {
  const count = useCountUp(stat.value, 1600, visible);
  return (
    <div className={`text-center p-8 scroll-reveal stagger-${index + 1}`}
      style={{ borderRight: index < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
      <div className="counter-value font-black leading-none mb-2"
        style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
        {visible ? count : 0}{stat.suffix}
      </div>
      <p className="text-white font-bold text-sm mb-1">{stat.label}</p>
      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.sub}</p>
    </div>
  );
};

const Stats = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="stats" className="w-full py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060e1c, #0B1A33, #142445)' }}>
      {/* Gold accent line top */}
      <div className="w-full h-px absolute top-0" style={{ background: 'linear-gradient(90deg, transparent, #C9962C, transparent)' }} />
      <div className="orb orb-gold absolute" style={{ width: '500px', height: '500px', top: '-100px', right: '-50px', opacity: 0.08 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <p className="section-label mb-3">At a Glance</p>
          <h2 className="section-title text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Al Mohra By the <span style={{ color: '#C9962C' }}>Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(201,150,44,0.15)', background: 'rgba(20,36,69,0.5)', backdropFilter: 'blur(16px)' }}>
          {STATS.map((s, i) => (
            <StatItem key={s.label} stat={s} index={i} visible={visible} />
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center mt-10 text-sm tracking-widest uppercase scroll-reveal" style={{ color: 'rgba(201,150,44,0.5)' }}>
          Building the Future of Saudi Arabia · شركة المهرة للمقاولات
        </p>
      </div>

      <div className="w-full h-px absolute bottom-0" style={{ background: 'linear-gradient(90deg, transparent, #C9962C, transparent)' }} />
    </section>
  );
};

export default Stats;
