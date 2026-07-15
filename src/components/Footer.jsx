import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Phone, MessageSquare, MapPin, Shield, Award, FileText } from 'lucide-react';
import logoSvg from '../assets/logo.svg';

const quickLinks = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about' },
  { label: 'Services',    href: '/services' },
  { label: 'Projects',    href: '/projects' },
  { label: 'Compliance',  href: '/compliance' },
  { label: 'Contact Us',  href: '/contact' },
];

const Footer = () => {
  const whatsappMsg = encodeURIComponent('Hello Al Mohra Contracting Company, I am interested in your services. Please get in touch.');
  const whatsappLink = `https://wa.me/966565882482?text=${whatsappMsg}`;

  return (
    <footer className="w-full relative overflow-hidden" style={{ background: '#060e1c', borderTop: '1px solid rgba(201,150,44,0.15)' }}>
      {/* Background orbs */}
      <div className="orb orb-gold w-96 h-96 -top-20 -left-20 opacity-10" style={{ animationDuration: '18s' }} />
      <div className="orb orb-navy w-80 h-80 bottom-0 right-0 opacity-30" />

      {/* Gold top line */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9962C, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Column 1: Brand */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img src={logoSvg} alt="Al Mohra Logo" className="w-12 h-12 object-contain rounded-xl" />
              <div>
                <div className="font-black tracking-wider uppercase text-white"
                  style={{ fontSize: '1rem', fontFamily: 'Playfair Display, serif', letterSpacing: '0.06em' }}>
                  AL MOHRA <span style={{ color: '#C9962C' }}>CONTRACTING</span>
                </div>
                <div className="text-[9px] tracking-widest uppercase mt-0.5" style={{ color: 'rgba(201,150,44,0.5)' }}>
                  شركة المهرة للمقاولات
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Premier contracting and manpower supply firm in Riyadh, KSA. Supplying 60+ skilled manpower categories across Steel, MEP, Civil & Facility Management sectors — aligned with Saudi Vision 2030.
            </p>

            <div className="flex items-start gap-3 pt-2">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#C9962C' }} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#C9962C' }}>Head Office</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  2456 Al Wadeea, Al Olaya Dist.<br />
                  Postal Code 12222, Riyadh, KSA
                </p>
              </div>
            </div>

            {/* Vision 2030 badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl"
              style={{ background: 'rgba(201,150,44,0.08)', border: '1px solid rgba(201,150,44,0.2)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(201,150,44,0.15)', border: '1px solid rgba(201,150,44,0.3)' }}>
                <span className="text-[9px] font-black" style={{ color: '#C9962C' }}>2030</span>
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Aligned With</p>
                <p className="text-xs font-black uppercase tracking-wider" style={{ color: '#C9962C', fontFamily: 'Playfair Display, serif' }}>Saudi Vision 2030</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-xs font-black tracking-widest uppercase pl-3"
              style={{ color: '#C9962C', borderLeft: '2px solid #C9962C' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((lnk) => (
                <li key={lnk.label}>
                  <Link to={lnk.href}
                    className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9962C'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <span className="w-1.5 h-1.5 rotate-45 flex-shrink-0" style={{ background: '#C9962C', display: 'inline-block' }} />
                    {lnk.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-xs font-black tracking-widest uppercase pl-3"
              style={{ color: '#C9962C', borderLeft: '2px solid #C9962C' }}>Contact Details</h4>
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Mobile', value: '+966 565 882 482', href: 'tel:+966565882482' },
                { icon: Phone, label: 'Mobile', value: '+966 502 475 835', href: 'tel:+966502475835' },
                { icon: Mail,  label: 'Email',  value: 'mohra.ariful@gmail.com', href: 'mailto:mohra.ariful@gmail.com' },
                { icon: Mail,  label: 'Email',  value: 'almohracc@gmail.com', href: 'mailto:almohracc@gmail.com' },
                { icon: Globe, label: 'Website', value: 'www.almohracontracting.com', href: 'https://www.almohracontracting.com' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={href} href={href}
                  className="flex items-center gap-3 group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C9962C'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="p-2 rounded-lg flex-shrink-0 transition-all duration-300"
                    style={{ background: 'rgba(201,150,44,0.08)', border: '1px solid rgba(201,150,44,0.15)' }}>
                    <Icon size={14} style={{ color: '#C9962C' }} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider" style={{ color: 'rgba(201,150,44,0.5)' }}>{label}</p>
                    <p className="text-xs font-medium transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="py-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {[
              { icon: FileText, label: 'CR', value: '7053500273' },
              { icon: Shield,   label: 'VAT', value: '314593295200003' },
              { icon: Award,    label: 'Chamber', value: '1253910 (1st Class)' },
              { icon: FileText, label: 'GOSI', value: '659485508' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{ background: 'rgba(201,150,44,0.06)', border: '1px solid rgba(201,150,44,0.12)' }}>
                <Icon size={12} style={{ color: '#C9962C' }} />
                <span className="text-[10px] font-bold tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}:</span>
                <span className="text-[10px] font-bold" style={{ color: 'rgba(255,255,255,0.7)' }}>{value}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
              style={{ background: '#16a34a', color: '#fff' }}
              onMouseEnter={e => e.currentTarget.style.background = '#15803d'}
              onMouseLeave={e => e.currentTarget.style.background = '#16a34a'}
            >
              <MessageSquare size={14} />
              WhatsApp Us
            </a>
            <a href="tel:+966565882482"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
              style={{ background: 'rgba(201,150,44,0.1)', border: '1px solid rgba(201,150,44,0.25)', color: '#C9962C' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,150,44,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,150,44,0.1)'; }}
            >
              <Phone size={14} />
              +966 565 882 482
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
              © {new Date().getFullYear()} <span style={{ color: 'rgba(201,150,44,0.7)' }}>Al Mohra Contracting Company</span>. All Rights Reserved.
            </p>
            <p className="text-[10px] tracking-wider" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Quality · Strength · Trust — Building Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;