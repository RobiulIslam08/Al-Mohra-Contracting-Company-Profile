import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X, Building2 } from 'lucide-react';
import logoSvg from '../assets/logo.svg';

const navLinks = [
  { label: 'Home',       href: '/',           id: 'home' },
  { label: 'About Us',   href: '/about',       id: 'about' },
  { label: 'Services',   href: '/services',    id: 'services' },
  { label: 'Projects',   href: '/projects',    id: 'projects' },
  { label: 'Compliance', href: '/compliance',  id: 'compliance' },
  { label: 'Careers',    href: '/careers',     id: 'careers' },
  { label: 'Contact',    href: '/contact',     id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [isScrolled, setIsScrolled]     = useState(false);
  const [hideNav, setHideNav]           = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 50);
      setHideNav(current > 200 && current > lastScrollY.current);
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const isActive = (id) => {
    if (id === 'home') return location.pathname === '/';
    return location.pathname.startsWith(`/${id}`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          hideNav ? '-translate-y-full' : 'translate-y-0'
        } ${isScrolled ? 'nav-scrolled' : 'bg-transparent'}`}
        style={{ animation: 'slideInNavbar 0.5s ease both' }}
      >
        {/* Top Info Bar */}
        <div className={`transition-all duration-500 overflow-hidden border-b border-white/5 hidden lg:block ${
          isScrolled ? 'h-0 opacity-0 pointer-events-none' : 'h-10 opacity-100'
        }`}
          style={{ background: 'rgba(6,14,28,0.95)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center justify-end gap-6">
            <a href="tel:+966565882482"
              className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider transition-colors"
              style={{ color: 'rgba(201,150,44,0.85)' }}
            >
              <Phone size={11} />
              +966 565 882 482
            </a>
            <a href="mailto:mohra.ariful@gmail.com"
              className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider transition-colors"
              style={{ color: 'rgba(201,150,44,0.85)' }}
            >
              <Mail size={11} />
              mohra.ariful@gmail.com
            </a>
          </div>
        </div>

        {/* Main Nav */}
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className={`flex items-center justify-between max-w-7xl mx-auto transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-16 lg:h-20'
          }`}>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'rgba(201,150,44,0.2)', filter: 'blur(8px)' }} />
                <img src={logoSvg} alt="Al Mohra Contracting Company Logo"
                  className="relative w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black tracking-wider uppercase text-white"
                  style={{ fontSize: 'clamp(0.7rem, 1.4vw, 0.9rem)', fontFamily: 'Playfair Display, serif', letterSpacing: '0.08em' }}>
                  AL MOHRA <span style={{ color: '#C9962C' }}>CONTRACTING</span>
                </span>
                <span className="text-[9px] tracking-widest uppercase hidden sm:block"
                  style={{ color: 'rgba(201,150,44,0.6)' }}>
                  Building Excellence · CR: 7053500273
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1 text-xs font-bold tracking-widest uppercase">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.id} className="relative mega-dropdown-trigger"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link to={link.href}
                      className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-300 ${
                        isActive(link.id) ? 'text-yellow-400 active' : 'text-white/75 hover:text-white'
                      }`}
                      style={{ color: isActive(link.id) ? '#C9962C' : undefined }}
                    >
                      {link.label} <ChevronDown size={12} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    {/* Mega dropdown */}
                    <div className={`mega-dropdown p-6 ${servicesOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
                      style={{ transform: servicesOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(8px)' }}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {SERVICES_MENU.map((col) => (
                          <div key={col.group}>
                            <p className="text-[10px] font-black tracking-widest uppercase mb-3 pb-2 border-b"
                              style={{ color: '#C9962C', borderColor: 'rgba(201,150,44,0.2)' }}>
                              {col.group}
                            </p>
                            <ul className="space-y-2">
                              {col.items.map((item) => (
                                <li key={item.label}>
                                  <Link to={item.href}
                                    className="text-[11px] transition-colors duration-200 flex items-center gap-2 group/item"
                                    style={{ color: 'rgba(255,255,255,0.65)' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#C9962C'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                                  >
                                    <span className="w-1 h-1 rounded-full flex-shrink-0"
                                      style={{ background: 'rgba(201,150,44,0.5)' }} />
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.id} to={link.href}
                    className={`nav-link px-3 py-2 rounded-lg transition-colors duration-300 ${
                      isActive(link.id) ? 'active' : 'text-white/75 hover:text-white'
                    }`}
                    style={{ color: isActive(link.id) ? '#C9962C' : undefined }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+966565882482"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C9962C'; e.currentTarget.style.background = 'rgba(201,150,44,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <Phone size={13} style={{ color: '#C9962C' }} />
                Call Us
              </a>
              <Link to="/contact" className="btn-gold text-xs px-5 py-2.5" style={{ borderRadius: '10px' }}>
                Request Quotation
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: '#C9962C' }}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
          style={{ background: 'rgba(11,26,51,0.98)', borderTop: '1px solid rgba(201,150,44,0.1)' }}
        >
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.id} to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3.5 rounded-xl text-sm font-bold tracking-wide uppercase transition-all duration-300"
                style={{
                  color: isActive(link.id) ? '#C9962C' : 'rgba(255,255,255,0.8)',
                  background: isActive(link.id) ? 'rgba(201,150,44,0.08)' : 'transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {link.label}
                <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', color: 'rgba(201,150,44,0.5)' }} />
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a href="tel:+966565882482"
                className="flex items-center gap-2 text-sm px-3 py-2"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={14} style={{ color: '#C9962C' }} />
                +966 565 882 482
              </a>
              <a href="tel:+966502475835"
                className="flex items-center gap-2 text-sm px-3 py-2"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={14} style={{ color: '#C9962C' }} />
                +966 502 475 835
              </a>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}
                className="btn-gold w-full flex items-center justify-center text-xs py-3.5 rounded-xl"
              >
                Request Quotation
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed height spacer */}
      <div className="w-full h-16 lg:h-[120px]" />
    </>
  );
};

export default Header;