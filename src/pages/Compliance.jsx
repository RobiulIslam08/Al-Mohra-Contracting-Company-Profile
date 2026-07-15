import React, { useEffect } from 'react';
import HSE from '../components/HSE';
import Terms from '../components/Terms';
import ContactForm from '../components/ContactForm';
import { Shield, Award, FileText, Building, CreditCard } from 'lucide-react';

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
  </section>
);

const LegalDocuments = () => {
  const LEGAL_ITEMS = [
    {
      icon: FileText,
      title: 'Commercial Registration',
      fields: [
        { label: 'Company Name', value: 'Al Mohra Contracting Company' },
        { label: 'National Number (CR)', value: '7053500273' },
        { label: 'Release Date', value: '26/01/2026' },
        { label: 'Entity Type', value: 'Company Limited Liability (One Person)' },
        { label: 'Status', value: 'Active' },
      ],
    },
    {
      icon: Shield,
      title: 'VAT Registration (ZATCA)',
      fields: [
        { label: 'Taxpayer Name', value: 'Al Mohra Contracting Company' },
        { label: 'VAT Registration No.', value: '314593295200003' },
        { label: 'Effective Date', value: '2026/02/01' },
        { label: 'Address', value: 'Riyadh, Al Olaya Dist., 12222' },
        { label: 'Tax Period', value: 'Quarterly' },
        { label: 'TIN', value: '3145932952' },
      ],
    },
    {
      icon: Award,
      title: 'Chamber of Commerce',
      fields: [
        { label: 'Membership No.', value: '1253910' },
        { label: 'Membership Class', value: 'First' },
        { label: 'Date of Issue', value: '26/01/2026' },
        { label: 'Expires', value: '25/01/2027' },
        { label: 'National Address', value: '2456 Al Wadeea St., Al Olaya Dist., PC 12222, Riyadh, KSA' },
      ],
    },
    {
      icon: Building,
      title: 'Commercial Extract (Ministry of Commerce)',
      fields: [
        { label: 'Trade Name', value: 'Al Mohra Contracting Company (شركة آل موهরা كونتراكتينج)' },
        { label: 'Entity Type', value: 'Limited Liability Company (One Person)' },
        { label: 'Capital', value: 'SAR 3,000,000.00' },
        { label: 'Activity', value: 'Building General Construction for Residential Buildings (Code: 410010)' },
        { label: 'Owner', value: 'Al Sira Contracting Company Sh. w Sh.' },
        { label: 'Manager', value: 'Arif Aslam Mohammed Mostafa (عريف اسلام محمد مصطفى)' },
      ],
    },
    {
      icon: FileText,
      title: 'GOSI (Social Insurance)',
      fields: [
        { label: 'Establishment', value: 'Al Mohra Contracting Company' },
        { label: 'Subscription No.', value: '659485508' },
        { label: 'Unified National Number', value: '7053500273' },
        { label: 'Address', value: 'Postal Code 12222, Saudi Arabia' },
        { label: 'Certificate Valid Until', value: '19/12/1447H' },
      ],
    },
    {
      icon: CreditCard,
      title: 'Corporate Banking Details',
      fields: [
        { label: 'Saudi National Bank (SNB)', value: 'Account: 22400000189201' },
        { label: 'SNB IBAN', value: 'SA4110000022400000189201' },
        { label: 'SNB SWIFT', value: 'NCBKSAJE' },
        { label: 'Al Rajhi Bank', value: 'Account: 282100010006089647816' },
        { label: 'Al Rajhi IBAN', value: 'SA7180000282608019647816' },
      ],
    },
  ];

  return (
    <section id="legal" className="w-full py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6"
            style={{ background: 'rgba(11,26,51,0.06)', border: '1px solid rgba(11,26,51,0.1)' }}>
            <Shield size={14} style={{ color: '#C9962C' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#C9962C' }}>Certified · Verified · Trusted</span>
          </div>
          <p className="section-label mb-4">Legal & Compliance</p>
          <h2 className="section-title-dark mb-4">
            Legal Documents &<br />
            <span style={{ color: '#C9962C' }}>Certifications</span>
          </h2>
          <span className="gold-divider mx-auto block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEGAL_ITEMS.map((item, i) => (
            <div key={item.title}
              className={`p-7 rounded-2xl scroll-reveal stagger-${(i % 6) + 1} card-light`}
              style={{ border: '1.5px solid rgba(11,26,51,0.08)', boxShadow: '0 8px 32px rgba(11,26,51,0.06)', background: '#FAF7F2' }}>
              <div className="flex items-center gap-3 mb-5 pb-4"
                style={{ borderBottom: '1px solid rgba(11,26,51,0.06)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(201,150,44,0.15)', border: '1px solid rgba(201,150,44,0.3)' }}>
                  <item.icon size={18} style={{ color: '#C9962C' }} />
                </div>
                <h3 className="font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif', color: '#0B1A33' }}>
                  {item.title}
                </h3>
              </div>
              <div className="space-y-2.5">
                {item.fields.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[9px] uppercase font-bold tracking-wider mb-0.5" style={{ color: '#C9962C' }}>{label}</p>
                    <p className="text-xs font-medium" style={{ color: '#0B1A33' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QualityAssurance = () => (
  <section id="qa-qc" className="w-full py-24 relative"
    style={{ background: '#FAF7F2' }}>
    <div className="w-full h-px absolute top-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,150,44,0.3), transparent)' }} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14 scroll-reveal">
        <p className="section-label mb-4">QA / QC</p>
        <h2 className="section-title-dark mb-4">
          Quality Assurance &<br />
          <span style={{ color: '#C9962C' }}>Excellence in Every Detail</span>
        </h2>
        <span className="gold-divider mx-auto block" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Rigorous Skill Vetting & Trade Testing', desc: 'We ensure every worker is tested, verified, and fit for the job before deployment to any project.' },
          { title: 'Continuous Performance Monitoring', desc: 'Ongoing evaluation to maintain high productivity and workmanship standards across all active sites.' },
          { title: 'International Quality Standards Compliance', desc: 'We adhere to globally recognized QA/QC processes and benchmark best practices in every engagement.' },
        ].map((c, i) => (
          <div key={c.title}
            className={`p-7 rounded-2xl scroll-reveal stagger-${i+1}`}
            style={{ background: '#ffffff', border: '1.5px solid rgba(11,26,51,0.08)', boxShadow: '0 8px 32px rgba(11,26,51,0.04)' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center mb-5"
              style={{ background: 'rgba(201,150,44,0.15)', border: '1px solid rgba(201,150,44,0.3)' }}>
              <span className="font-black text-sm" style={{ color: '#C9962C' }}>{i+1}</span>
            </div>
            <h3 className="font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#0B1A33' }}>{c.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(11,26,51,0.65)' }}>{c.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-10 scroll-reveal">
        {['Precision', 'Integrity', 'Excellence', 'Commitment'].map(tag => (
          <span key={tag} className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl"
            style={{ background: 'rgba(201,150,44,0.1)', color: '#C9962C', border: '1px solid rgba(201,150,44,0.2)' }}>
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full h-px mt-14" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,150,44,0.3), transparent)' }} />
    </div>
  </section>
);

const CompliancePage = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
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
        label="Compliance & Certifications"
        title="Fully Certified, Legally Compliant"
        sub="Al Mohra Contracting Company operates under strict legal and regulatory compliance — CR, VAT, GOSI, Chamber of Commerce, and international HSE standards."
      />
      <HSE />
      <QualityAssurance />
      <LegalDocuments />
      <Terms />
      <ContactForm />
    </div>
  );
};

export default CompliancePage;
