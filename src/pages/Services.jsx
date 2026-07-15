import React, { useEffect } from 'react';
import Services from '../components/Services';
import Manpower from '../components/Manpower';
import Terms from '../components/Terms';
import ContactForm from '../components/ContactForm';

const PageHero = ({ title, sub, label }) => (
  <section className="w-full py-20 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #060e1c 0%, #0B1A33 60%, #142445 100%)' }}>
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: 'linear-gradient(rgba(201,150,44,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,44,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    <div className="orb orb-gold absolute" style={{ width: '400px', height: '400px', top: '-100px', right: '-50px', opacity: 0.1 }} />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="section-label mb-4">{label}</p>
      <h1 className="text-white font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
        {title}
      </h1>
      <p className="text-sm max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>{sub}</p>
    </div>
    <div className="section-divider-wave">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '50px' }}>
        <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#FAF7F2" />
      </svg>
    </div>
  </section>
);

// Full 103-category manpower list
const FULL_LIST = [
  'Helper', 'Electrician', 'Electrician Foreman', 'Electrician Lead Man', 'BMS Technician', 'AC Technician',
  'Panel Termination', 'Pipe Fitter Fire Alarm', 'Pipe Fitter', 'Pipe Insulator', 'Pipe Fitter Foreman',
  'Pipe Fitter Lead Man', 'Plumber', 'Plumber Foreman', 'Plumber Lead Man', 'Duct Fitter-HVAC', 'Duct Insulator',
  'Duct Foreman', 'Duct Fitter Lead Man', 'Steel Fixer', 'Painter Normal / Painter Epoxy',
  'Mason - Plaster / Tiles Mason', 'Interlock', 'Painter - Spray', 'Finishing / Shuttering Carpenter',
  'Gypsum board Carpenter', 'Civil Foreman', 'Civil – Lead Man', 'Scaffolder (with TUV)',
  'Glass Fitter / Silicon Man', 'Aluminum Fitter / Cladding Fitter', 'Electrical Engineer', 'Civil Engineer',
  'Senior Civil Engineer', 'Civil QC Engineer', 'Mechanical Engineer', 'Senior Mechanical Engineer',
  'Mechanical QC Engineer', 'Civil QC Inspector', 'Electrical QC / QC Engineer', 'Mechanical QC Inspector',
  'QA/QC Manager', 'HSE Officer', 'HSE Supervisor', 'Civil Draftman', 'Electrical Draftman',
  'Logistic Foreman', 'Logistic Supervisor', 'Store Keeper', 'Store Assistant', 'Electrical Supervisor',
  'Civil Supervisor', 'Junior Planning Engineer', 'Senior Planning Engineer', 'Planning Engineer',
  'Project Manager', 'Construction Manager', 'Warehouse Supervisor', 'Procurements Engineer',
  'Procurements Officer', 'Road Engineer', 'Material Engineer', 'Surveyor', 'Lead Surveyor',
  'Civil/MEP Qty Surveyor', 'Environments Officer', 'Planning Manager', 'Cook', 'Civil Site Supervisor',
  'Tea Boy', 'Surveyor Helper', 'Flagman', 'Fire Warden / Fire Watcher', 'Store Helper', 'Safety Helper',
  'Assistant Surveyor', 'Normal Welder', 'Welder X-Ray-6G', 'Welder 3G–4G', 'Welder-Tig', 'Welder Copper',
  'Light Driver / Heavy Driver', 'Rigger-I', 'Rigger-II', 'Rigger-III', 'Lifting Supervisor',
  'Logistic Superintendent and Lead', 'Scaffolding Inspector', 'Traffic Supervisor', 'IT Technician',
  'IT Engineer', 'Male Nurse / General – Doctor', 'Glass Fitter / Silicon Man', 'Aluminum Fitter / Cladding',
  'Man Lift Operator', 'Forklift Operator', 'Scissor Lift Operator', 'Equipment Inspector',
  'Crane Operator (mobile)', 'Steel Erector', 'Steel Fabricator / Pipe Fabricator', 'Security Man – Saudi',
];

const FullCategoryList = () => (
  <section className="w-full py-24" style={{ background: '#FAF7F2' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 scroll-reveal">
        <p className="section-label mb-4">Complete Workforce Catalog</p>
        <h2 className="section-title-dark mb-4">
          Full Manpower <span style={{ color: '#C9962C' }}>Category List</span>
        </h2>
        <span className="gold-divider mx-auto block mb-4" />
        <p className="text-sm" style={{ color: '#5a6a82' }}>
          {FULL_LIST.length} categories available — rates on request (B2B quotation basis)
        </p>
      </div>
      <div className="p-8 rounded-2xl scroll-reveal"
        style={{ background: '#ffffff', border: '1.5px solid rgba(11,26,51,0.08)', boxShadow: '0 8px 32px rgba(11,26,51,0.06)' }}>
        <div className="flex flex-wrap gap-2">
          {FULL_LIST.map((cat, i) => (
            <span key={i}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-default"
              style={{ background: 'rgba(11,26,51,0.05)', border: '1px solid rgba(11,26,51,0.08)', color: '#0B1A33' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,150,44,0.1)'; e.currentTarget.style.borderColor = 'rgba(201,150,44,0.3)'; e.currentTarget.style.color = '#C9962C'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(11,26,51,0.05)'; e.currentTarget.style.borderColor = 'rgba(11,26,51,0.08)'; e.currentTarget.style.color = '#0B1A33'; }}
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t flex flex-wrap gap-3 items-center"
          style={{ borderColor: 'rgba(11,26,51,0.08)' }}>
          <p className="text-xs font-bold" style={{ color: '#5a6a82' }}>
            Working Hours: 10 hrs/day · 6 days/week · 26 days/month
          </p>
          <a href="mailto:mohra.ariful@gmail.com?subject=Manpower Quotation Request"
            className="btn-gold text-xs px-5 py-2.5 ml-auto">
            Request Quotation
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ServicesPage = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <PageHero
        label="Our Services"
        title="Comprehensive Service Divisions"
        sub="Three integrated service divisions — Manpower Solutions, Contracting Services, and Facility Management — delivering end-to-end solutions across Saudi Arabia."
      />
      <Services />
      <Manpower />
      <FullCategoryList />
      <Terms />
      <ContactForm />
    </div>
  );
};

export default ServicesPage;
