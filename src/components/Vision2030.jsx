import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CONTRIBUTIONS = [
  'Supplying the highly skilled, specialized workforce required to build tomorrow\'s smart cities and industrial hubs.',
  'Elevating industry standards through rigorous training, safety protocols, and operational excellence.',
  'Supporting the growth of the private sector by delivering reliable contracting and facility management solutions.',
];

const Vision2030 = () => (
  <section id="vision2030" className="w-full py-24 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #060e1c 0%, #0B1A33 60%, #142445 100%)' }}>
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: 'linear-gradient(rgba(201,150,44,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,44,0.6) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    />
    <div className="orb orb-gold absolute" style={{ width: '500px', height: '500px', bottom: '-100px', right: '-100px', opacity: 0.1, animationDuration: '20s' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-14 scroll-reveal">
        <p className="section-label mb-4">National Commitment</p>
        <h2 className="section-title text-white mb-6">
          Empowering <span style={{ color: '#C9962C' }}>Saudi Vision 2030</span>
        </h2>
        <span className="gold-divider mx-auto block mb-8" />
        <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.05rem' }}>
          "As the Kingdom of Saudi Arabia embarks on a historic journey of economic diversification and infrastructural transformation, Al Mohra Contracting Company is deeply aligned with the ambitious goals of Saudi Vision 2030."
        </p>
      </div>

      {/* Contribution cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {CONTRIBUTIONS.map((text, i) => (
          <div key={i}
            className={`p-7 rounded-2xl scroll-reveal stagger-${i+1} relative overflow-hidden card-dark`}
            style={{ background: 'rgba(20,36,69,0.65)', border: '1px solid rgba(201,150,44,0.18)' }}>
            {/* Number accent */}
            <div className="absolute top-4 right-5 font-black opacity-10"
              style={{ fontSize: '5rem', color: '#C9962C', fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>
              {i + 1}
            </div>
            <div className="relative z-10">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-5"
                style={{ background: 'rgba(201,150,44,0.2)', border: '1px solid rgba(201,150,44,0.4)' }}>
                <span className="font-black text-sm" style={{ color: '#C9962C' }}>{i + 1}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing tagline */}
      <div className="text-center scroll-reveal">
        <div className="inline-block px-10 py-6 rounded-2xl"
          style={{ background: 'rgba(201,150,44,0.08)', border: '1px solid rgba(201,150,44,0.2)' }}>
          <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            More Than a Service Provider
          </p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            "Al Mohra is more than a service provider; we are a dedicated partner in building a vibrant and thriving nation."
          </p>
        </div>
        <div className="mt-8">
          <Link to="/about#vision2030" className="btn-outline-gold text-xs">
            Our Vision 2030 Commitment <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Vision2030;
