import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Star } from 'lucide-react';
import SectionDivider from './SectionDivider';

const STAT_BADGES = [
  { icon: CheckCircle, label: '100% Legal Compliance', sub: 'Fully licensed & certified' },
  { icon: Clock,       label: '48–72h Fast Mobilization', sub: 'Upon PO receipt' },
  { icon: Users,       label: '60+ Manpower Categories', sub: 'Across all trades' },
  { icon: Star,        label: '2030 Vision Aligned', sub: 'Saudi national priority' },
];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 24,
      y: (e.clientY / window.innerHeight - 0.5) * 16,
    });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(135deg, #060e1c 0%, #0B1A33 40%, #142445 70%, #060e1c 100%)' }}
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 z-0"
        style={{ transform: `scale(1.06) translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`, transition: 'transform 0.12s linear' }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,150,44,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,44,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Diagonal accent */}
        <div className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 70% 50%, rgba(20,36,69,0.9) 0%, transparent 70%)' }}
        />
      </div>

      {/* Gold orbs */}
      <div className="orb orb-gold" style={{ width: '600px', height: '600px', top: '-100px', right: '-100px', opacity: 0.15,
        transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.3}px)`, animationDuration: '16s' }} />
      <div className="orb orb-gold" style={{ width: '350px', height: '350px', bottom: '0', left: '0', opacity: 0.08, animationDuration: '20s', animationDelay: '-6s' }} />
      <div className="orb orb-navy"  style={{ width: '400px', height: '400px', top: '30%', left: '30%', opacity: 0.5, animationDuration: '22s', animationDelay: '-10s' }} />

      {/* Particle dots */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="particle-dot" style={{
          left: `${8 + i * 9}%`, top: `${15 + (i % 5) * 16}%`,
          animationDuration: `${5 + i * 1.2}s`, animationDelay: `${i * 0.6}s`,
          opacity: 0.35 + (i % 3) * 0.15,
          width: i % 2 === 0 ? '5px' : '3px', height: i % 2 === 0 ? '5px' : '3px',
        }} />
      ))}

      {/* Decorative vertical accent */}
      <div className="absolute top-0 right-[22%] w-px h-full hidden lg:block z-5 animate-fade-in"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,150,44,0.25), transparent)' }} />

      {/* Content wrapper */}
      <div className="relative w-full flex-grow flex items-center pt-24 pb-16 z-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">

            {/* LEFT: Main Text */}
            <div className="text-left space-y-7">

              {/* Vision badge */}
              <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-xl animate-fade-in-up delay-100">
                <span className="w-2 h-2 rounded-full animate-gold-pulse" style={{ background: '#C9962C' }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C9962C' }}>
                  Saudi Vision 2030 Partner
                </span>
                <span className="hidden sm:block text-[10px] tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  · CR: 7053500273
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-text-glow animate-fade-in-up delay-200 leading-tight text-white"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 700 }}>
                Trusted Manpower<br />
                <span style={{ color: '#C9962C' }}>Supply Partner</span><br />
                <span className="text-white/90" style={{ fontSize: '75%' }}>in Saudi Arabia</span>
              </h1>

              {/* Gold divider */}
              <div className="animate-fade-in-up delay-300">
                <span className="gold-divider" />
              </div>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-white/70 font-light max-w-xl leading-relaxed animate-fade-in-up delay-400">
                Al Mohra Contracting Company delivers world-class contracting solutions with unwavering commitment to quality, safety, and reliability — powering Saudi Arabia's mega-projects and Vision 2030 initiatives.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-500">
                <Link to="/services#manpower" className="btn-gold">
                  View Manpower Categories
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline-gold">
                  Request Quotation
                </Link>
              </div>

              {/* Tagline */}
              <p className="text-xs tracking-widest uppercase animate-fade-in-up delay-600"
                style={{ color: 'rgba(201,150,44,0.5)' }}>
                Quality · Strength · Trust — Building Excellence
              </p>
            </div>

            {/* RIGHT: Stat Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {STAT_BADGES.map((b, i) => (
                <div key={b.label}
                  className={`flex flex-col justify-center p-5 rounded-2xl animate-fade-in-scale float-card${i % 3 === 1 ? '-2' : i % 3 === 2 ? '-3' : ''}`}
                  style={{
                    animationDelay: `${0.2 + i * 0.15}s`,
                    background: 'rgba(20,36,69,0.7)',
                    border: '1px solid rgba(201,150,44,0.18)',
                    backdropFilter: 'blur(16px)',
                    minHeight: '110px',
                    transition: 'all 0.4s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,150,44,0.45)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,150,44,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,150,44,0.18)';
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <b.icon size={22} style={{ color: '#C9962C', marginBottom: '0.5rem' }} />
                  <p className="text-sm font-bold text-white leading-tight mb-1">{b.label}</p>
                  <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{b.sub}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 z-30">
        <div className="scroll-indicator" />
        <span className="text-[9px] tracking-widest uppercase animate-gold-pulse" style={{ color: 'rgba(201,150,44,0.5)' }}>
          Scroll
        </span>
      </div>

      <SectionDivider variant="angle" bgColor="#FAF7F2" />
    </section>
  );
};

export default Hero;
