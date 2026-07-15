import React from 'react';

const TERMS = [
  {
    num: '01',
    title: 'Working Hours',
    body: 'The standard working duration will be 10 (Ten) hours per day, 6 days a week (26 days a month).',
  },
  {
    num: '02',
    title: 'Overtime',
    body: 'Any work performed beyond the standard 10 hours will be calculated as overtime as per Saudi Labor Law.',
  },
  {
    num: '03',
    title: 'Accommodation & Transportation',
    body: 'Clean, ventilated accommodation and site transportation will be provided by the First Party (Client). Outside Riyadh, the First Party covers all accommodation and transport costs.',
  },
  {
    num: '04',
    title: 'Food & Allowance',
    body: 'Quality food or a food allowance will be provided by the First Party (Client) for workers inside Riyadh.',
  },
  {
    num: '05',
    title: 'Medical, Insurance & Iqama',
    body: 'All costs related to Iqama renewal, medical insurance, and other government documentation will be covered by the Second Party (Al Mohra).',
  },
  {
    num: '06',
    title: 'Mobilization Timeline',
    body: 'The required manpower will be mobilized to the site within 48 to 72 hours upon receipt of the official Purchase Order (PO).',
  },
  {
    num: '07',
    title: 'Payment Terms',
    body: 'Invoices will be submitted at the end of each month. Payment must be cleared within 15 days from the date of invoice submission. VAT 15% as per Saudi law applies.',
  },
  {
    num: '08',
    title: 'Safety Equipment (PPE)',
    body: 'Standard safety shoes, helmets, and basic PPE will be provided by the Second Party (Al Mohra). Specific site-required safety gear must be provided by the Client.',
  },
];

const Terms = () => (
  <section id="terms" className="w-full py-24" style={{ background: '#FAF7F2' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-14 scroll-reveal">
        <p className="section-label mb-4">Commercial Engagement</p>
        <h2 className="section-title-dark mb-4">
          Terms of <span style={{ color: '#C9962C' }}>Engagement</span>
        </h2>
        <span className="gold-divider mx-auto block mb-4" />
        <p className="text-sm max-w-xl mx-auto" style={{ color: '#5a6a82' }}>
          Standard manpower supply conditions — transparent and fair engagement terms with every client.
        </p>
      </div>

      {/* Vertical timeline */}
      <div className="relative timeline-line pl-12 space-y-6 max-w-3xl mx-auto">
        {TERMS.map((t, i) => (
          <div key={t.num}
            className={`relative scroll-reveal stagger-${(i % 6) + 1} p-6 rounded-2xl card-light`}
            style={{ border: '1.5px solid rgba(11,26,51,0.08)', boxShadow: '0 4px 16px rgba(11,26,51,0.06)' }}>
            {/* Timeline dot */}
            <div className="absolute -left-10 top-6 w-6 h-6 rounded-full flex items-center justify-center font-black text-[10px]"
              style={{ background: '#0B1A33', color: '#C9962C', border: '2px solid #C9962C', zIndex: 2 }}>
              {i + 1}
            </div>
            <div className="flex items-start gap-4">
              <span className="font-black text-2xl opacity-15 flex-shrink-0"
                style={{ color: '#C9962C', fontFamily: 'Playfair Display, serif' }}>{t.num}</span>
              <div>
                <h3 className="font-bold mb-2" style={{ color: '#0B1A33', fontFamily: 'Playfair Display, serif' }}>{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5a6a82' }}>{t.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Commitment closing */}
      <div className="mt-12 p-8 rounded-2xl text-center scroll-reveal max-w-2xl mx-auto bg-white"
        style={{ border: '1.5px solid rgba(11,26,51,0.08)', boxShadow: '0 8px 32px rgba(11,26,51,0.04)' }}>
        <p className="font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#0B1A33' }}>Our Commitment</p>
        <p className="text-sm leading-relaxed italic" style={{ color: 'rgba(11,26,51,0.7)', fontFamily: 'Playfair Display, serif' }}>
          "We are committed to delivering reliable, skilled, and disciplined manpower with professionalism, safety, and responsibility."
        </p>
        <p className="mt-4 text-xs font-semibold" style={{ color: '#C9962C' }}>
          — Al Mohra Contracting Company — Executive Manager, Mr. Ariful Islam
        </p>
      </div>
    </div>
  </section>
);

export default Terms;
