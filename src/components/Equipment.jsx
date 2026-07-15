import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, HardHat, FileText } from 'lucide-react';

const MANAGEMENT = [
  {
    icon: Briefcase,
    role: 'Operations Manager',
    desc: 'Leads all operational activities with a focus on efficiency, safety, and quality. Ensures seamless execution of projects and optimal resource management across all departments.',
  },
  {
    icon: HardHat,
    role: 'Site Supervisor',
    desc: 'Oversees on-site activities and ensures strict adherence to safety standards, quality benchmarks, and project schedules. Acts as the key link between site teams and management.',
  },
  {
    icon: FileText,
    role: 'Documents Controller',
    desc: 'Manages documentation, certifications, and compliance records. Ensures all project documentation aligns with HSE and QA/QC requirements across all active sites.',
  },
];

const FOOTER_VALUES = [
  { title: 'LEADERSHIP', sub: 'Driving Excellence' },
  { title: 'EXPERIENCE', sub: 'Built on Trust' },
  { title: 'COMMITMENT', sub: 'Delivering Results' },
  { title: 'TEAMWORK', sub: 'Achieving Together' },
];

const Leadership = () => (
  <section id="leadership" className="w-full py-24" style={{ background: '#FAF7F2' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-14 scroll-reveal">
        <p className="section-label mb-4">Our People</p>
        <h2 className="section-title-dark mb-4">
          Key <span style={{ color: '#C9962C' }}>Management</span> Team
        </h2>
        <span className="gold-divider mx-auto block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {MANAGEMENT.map((m, i) => (
          <div key={m.role}
            className={`p-8 rounded-2xl scroll-reveal stagger-${i+1} card-light text-center`}
            style={{ border: '1.5px solid rgba(11,26,51,0.08)', boxShadow: '0 8px 32px rgba(11,26,51,0.06)' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 icon-wrap service-card"
              style={{ background: 'rgba(11,26,51,0.06)', border: '1px solid rgba(11,26,51,0.12)' }}>
              <m.icon size={28} style={{ color: '#0B1A33' }} />
            </div>
            <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#0B1A33' }}>
              {m.role}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5a6a82' }}>{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer value strip */}
      <div className="p-5 rounded-2xl scroll-reveal bg-white"
        style={{ border: '1.5px solid rgba(11,26,51,0.08)', boxShadow: '0 8px 32px rgba(11,26,51,0.04)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FOOTER_VALUES.map(({ title, sub }, i) => (
            <div key={title} className="text-center py-3"
              style={{ borderRight: i < 3 ? '1px solid rgba(11,26,51,0.08)' : 'none' }}>
              <p className="font-black text-xs tracking-widest uppercase mb-1" style={{ color: '#C9962C' }}>{title}</p>
              <p className="text-xs" style={{ color: 'rgba(11,26,51,0.65)' }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 scroll-reveal">
        <Link to="/about" className="btn-navy text-xs">
          Meet Our Full Team <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  </section>
);

export default Leadership;
