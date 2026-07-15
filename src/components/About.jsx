import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight } from 'lucide-react';

const About = () => (
  <section id="about" className="w-full py-24" style={{ background: '#FAF7F2' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="max-w-3xl mb-16 scroll-reveal">
        <p className="section-label mb-4">About Al Mohra</p>
        <h2 className="section-title-dark mb-6">
          Defining <span style={{ color: '#C9962C' }}>Excellence</span> in<br />
          Contracting & Manpower
        </h2>
        <span className="gold-divider block mb-8" />

        <div className="space-y-5">
          <p className="text-base leading-relaxed" style={{ color: '#5a6a82' }}>
            Al Mohra Contracting Company is a premier contracting and manpower supply firm based in Riyadh, Kingdom of Saudi Arabia. With a deep-rooted commitment to quality and precision, we have evolved into a trusted partner for mega-projects across the region.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#5a6a82' }}>
            Our expertise spans across specialized Steel Manpower Solutions, comprehensive MEP (Mechanical, Electrical, Plumbing) services, robust civil construction, and top-tier facility management. We don't just supply a workforce; we provide highly skilled, certified professionals who drive industrial success.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#5a6a82' }}>
            By integrating modern project management strategies with a highly capable team, we ensure that every client receives customized, scalable, and efficient solutions tailored to their specific project demands.
          </p>
        </div>

        <Link to="/about" className="btn-navy inline-flex mt-8 text-xs">
          Learn More About Us <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>

      {/* Leadership Quotes — bento asymmetric */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* CEO */}
        <div className="scroll-reveal-left p-8 rounded-2xl relative overflow-hidden"
          style={{ background: '#ffffff', border: '1.5px solid rgba(11,26,51,0.1)', boxShadow: '0 8px 32px rgba(11,26,51,0.08)' }}>
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5"
            style={{ background: 'radial-gradient(circle, #0B1A33, transparent)', transform: 'translate(40%, -40%)' }} />
          <Quote size={32} style={{ color: 'rgba(201,150,44,0.3)', marginBottom: '1rem' }} />
          <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 italic"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
            "Welcome to Al Mohra Contracting Company. Since our establishment, we have been driven by a clear mission: to deliver world-class contracting solutions with unwavering commitment to quality, safety, and reliability. We take pride in contributing to Saudi Arabia's Vision 2030 by supporting mega-projects and nation-building initiatives that shape the future of this great Kingdom."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg"
              style={{ background: 'rgba(11,26,51,0.08)', border: '1px solid rgba(11,26,51,0.15)', color: '#0B1A33', fontFamily: 'Playfair Display, serif' }}>
              A
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: '#0B1A33' }}>Mr. Ariful Islam</p>
              <p className="text-xs tracking-wider" style={{ color: '#C9962C' }}>Chief Executive Officer (CEO)</p>
            </div>
          </div>
        </div>

        {/* Deputy CEO */}
        <div className="scroll-reveal-right p-8 rounded-2xl relative overflow-hidden"
          style={{ background: '#ffffff', border: '1.5px solid rgba(11,26,51,0.1)', boxShadow: '0 8px 32px rgba(11,26,51,0.08)' }}>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-5"
            style={{ background: 'radial-gradient(circle, #0B1A33, transparent)', transform: 'translate(-30%, 30%)' }} />
          <Quote size={32} style={{ color: 'rgba(201,150,44,0.3)', marginBottom: '1rem' }} />
          <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 italic"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
            "At Al Mohra Contracting Company, operational excellence and client satisfaction are at the heart of everything we do. We are driven by the pursuit of perfection, continuously evolving to meet the dynamic needs of our partners across the Kingdom. I am proud of our people, our values, and the trust our clients place in us."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg"
              style={{ background: 'rgba(11,26,51,0.08)', border: '1px solid rgba(11,26,51,0.15)', color: '#0B1A33', fontFamily: 'Playfair Display, serif' }}>
              N
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: '#0B1A33' }}>Ms. Nasrin Akter</p>
              <p className="text-xs tracking-wider" style={{ color: '#C9962C' }}>Deputy CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Identity Strip */}
      <div className="mt-10 p-6 rounded-2xl scroll-reveal flex flex-wrap items-center gap-6"
        style={{ background: '#ffffff', border: '1px solid rgba(11,26,51,0.08)', boxShadow: '0 4px 20px rgba(11,26,51,0.06)' }}>
        {[
          { label: 'CR Number', value: '7053500273' },
          { label: 'VAT Number', value: '314593295200003' },
          { label: 'Chamber', value: '1253910 (First Class)' },
          { label: 'Capital', value: 'SAR 3,000,000' },
        ].map(({ label, value }) => (
          <div key={label} className="text-center flex-1 min-w-28">
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#C9962C' }}>{label}</p>
            <p className="text-sm font-bold" style={{ color: '#0B1A33' }}>{value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
