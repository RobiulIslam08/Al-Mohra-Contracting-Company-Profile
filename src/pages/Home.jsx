import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import About from '../components/About';
import Stats from '../components/Stats';
import VisionMission from '../components/VisionMission';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Manpower from '../components/Manpower';
import Vision2030 from '../components/Vision2030';
import HSE from '../components/HSE';
import CompetitiveEdge from '../components/CompetitiveEdge';
import ContactForm from '../components/ContactForm';
import Terms from '../components/Terms';
import WhatsAppButton from '../components/WhatsAppButton';
import Equipment from '../components/Equipment';

// PDF Download Section
const PDFDownloadSection = () => (
  <section className="w-full py-16 relative" style={{ background: '#FAF7F2' }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-10 rounded-2xl text-center scroll-reveal"
        style={{ background: 'linear-gradient(135deg, #0B1A33, #142445)', border: '1px solid rgba(201,150,44,0.2)' }}>
        <p className="section-label mb-4" style={{ color: '#C9962C' }}>Company Profile 2026</p>
        <h2 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          Al Mohra Contracting Company Profile
        </h2>
        <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
          65 Pages · Full Company Profile · Quality | Strength | Trust
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-8 text-xs font-bold"
          style={{ background: 'rgba(201,150,44,0.1)', color: '#C9962C', border: '1px solid rgba(201,150,44,0.2)' }}>
          📄 65 Pages · Full Company Profile
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button disabled
            className="px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-not-allowed opacity-60"
            style={{ background: 'rgba(201,150,44,0.15)', color: '#C9962C', border: '1px solid rgba(201,150,44,0.2)' }}>
            📥 Download PDF (Coming Soon)
          </button>
          <a href="mailto:mohra.ariful@gmail.com?subject=Request for Company Profile"
            className="btn-outline-gold text-xs px-8 py-3">
            Request Profile via Email
          </a>
        </div>
        <p className="text-[10px] mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Updated profile PDF will be available upon client approval. Contact us to receive the full digital profile.
        </p>
      </div>
    </div>
  </section>
);

// Building Future CTA Section
const BuildingFutureCTA = () => {
  const VALUES = [
    { title: 'Commitment to Quality', desc: 'Uncompromising standards in every task we undertake.' },
    { title: 'Expertise You Can Rely On', desc: 'Decades of combined industry experience and knowledge.' },
    { title: 'Partnership Built on Trust', desc: 'Long-term relationships forged through consistent delivery.' },
    { title: 'Delivering Value for Tomorrow', desc: 'Solutions that create lasting impact for Saudi Arabia.' },
  ];
  return (
    <section className="w-full py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060e1c, #0B1A33)' }}>
      <div className="orb orb-gold absolute" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.06 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 scroll-reveal">
          <p className="section-label mb-4">Together We Build</p>
          <h2 className="section-title text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Building the Future <span style={{ color: '#C9962C' }}>Together</span>
          </h2>
          <span className="gold-divider mx-auto block mb-6" />
          <p className="text-base leading-relaxed max-w-2xl mx-auto italic" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Playfair Display, serif' }}>
            "At Al Mohra Contracting Company, every project is a partnership. We bring expertise, dedication, and an uncompromising standard of quality to everything we do. Partner with us to turn your visionary projects into reality."
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {VALUES.map((v, i) => (
            <div key={v.title}
              className={`p-6 rounded-2xl text-center card-dark scroll-reveal stagger-${i+1}`}
              style={{ background: 'rgba(20,36,69,0.7)', border: '1px solid rgba(201,150,44,0.12)' }}>
              <div className="w-2 h-2 rounded-full mx-auto mb-4 animate-gold-pulse" style={{ background: '#C9962C' }} />
              <h3 className="font-bold text-white text-sm mb-2">{v.title}</h3>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center scroll-reveal">
          <a href="/contact" className="btn-gold">
            Thank You for Trusting Al Mohra
          </a>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const classes = ['.scroll-reveal', '.scroll-reveal-left', '.scroll-reveal-right', '.scroll-reveal-scale', '.img-reveal'];
    const els = document.querySelectorAll(classes.join(','));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Loader loaded={loaded} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Prestigious Clients Marquee */}
      <Clients />

      {/* 3. About Us (company overview + CEO/Deputy quotes) */}
      <About />

      {/* 4. Animated Stats Counter */}
      <Stats />

      {/* 5. Vision, Mission & Values */}
      <VisionMission />

      {/* 6. Core Service Divisions */}
      <Services />

      {/* 7. PDF Download Block */}
      <PDFDownloadSection />

      {/* 8. 60+ Manpower Categories */}
      <Manpower />

      {/* 9. Saudi Vision 2030 */}
      <Vision2030 />

      {/* 10. Project Portfolio */}
      <Portfolio />

      {/* 11. Key Management */}
      <Equipment />

      {/* 12. HSE Commitment */}
      <HSE />

      {/* 13. Building the Future Together CTA */}
      <BuildingFutureCTA />

      {/* 14. Competitive Edge */}
      <CompetitiveEdge />

      {/* 15. Terms of Engagement */}
      <Terms />

      {/* 16. Contact / Quotation Form */}
      <ContactForm />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;