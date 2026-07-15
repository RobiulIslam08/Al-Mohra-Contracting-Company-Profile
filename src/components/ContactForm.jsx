import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const MANPOWER_CATEGORIES = [
  'Helper', 'Electrician', 'Electrician Foreman', 'Electrician Lead Man', 'BMS Technician',
  'AC Technician', 'Panel Termination', 'Pipe Fitter Fire Alarm', 'Pipe Fitter', 'Pipe Insulator',
  'Pipe Fitter Foreman', 'Plumber', 'Plumber Foreman', 'Duct Fitter-HVAC', 'Duct Insulator',
  'Steel Fixer', 'Painter Normal / Painter Epoxy', 'Mason - Plaster / Tiles Mason', 'Scaffolder (with TUV)',
  'Glass Fitter / Silicon Man', 'Aluminum Fitter / Cladding Fitter', 'Civil Engineer', 'Mechanical Engineer',
  'QA/QC Manager', 'HSE Officer', 'HSE Supervisor', 'Store Keeper', 'Project Manager',
  'Normal Welder', 'Welder X-Ray-6G', 'Welder-Tig', 'Light Driver / Heavy Driver',
  'Rigger-I', 'Rigger-II', 'Rigger-III', 'Crane Operator (mobile)', 'Steel Erector',
  'Steel Fabricator / Pipe Fabricator', 'Forklift Operator', 'Security Man – Saudi',
  'Civil Supervisor', 'Planning Engineer', 'Surveyor', 'Cook', 'Tea Boy', 'Fire Warden',
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', manpower: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Manpower Enquiry — ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nRequired Manpower: ${form.manpower}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:mohra.ariful@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const whatsappMsg = encodeURIComponent(`Hello Al Mohra Contracting Company, I need a quotation for: ${form.manpower || 'manpower/contracting services'}.`);

  return (
    <section id="contact" className="w-full py-24 relative"
      style={{ background: 'linear-gradient(135deg, #0B1A33 0%, #060e1c 100%)' }}>
      <div className="w-full h-px absolute top-0" style={{ background: 'linear-gradient(90deg, transparent, #C9962C, transparent)' }} />
      <div className="orb orb-gold absolute" style={{ width: '400px', height: '400px', top: '-50px', right: '-50px', opacity: 0.08 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 scroll-reveal">
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="section-title text-white mb-4">
            Request a <span style={{ color: '#C9962C' }}>Quotation</span>
          </h2>
          <span className="gold-divider mx-auto block mb-4" />
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Fill in the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6 scroll-reveal-left">
            <div className="p-7 rounded-2xl"
              style={{ background: 'rgba(20,36,69,0.7)', border: '1px solid rgba(201,150,44,0.15)' }}>
              <h3 className="font-bold text-white mb-6 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Details</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Phone', value: '+966 565 882 482', href: 'tel:+966565882482' },
                  { icon: Phone, label: 'Phone', value: '+966 502 475 835', href: 'tel:+966502475835' },
                  { icon: Mail,  label: 'Email', value: 'mohra.ariful@gmail.com', href: 'mailto:mohra.ariful@gmail.com' },
                  { icon: Mail,  label: 'Email', value: 'almohracc@gmail.com', href: 'mailto:almohracc@gmail.com' },
                  { icon: MapPin, label: 'Address', value: '2456 Al Wadeea, Al Olaya Dist, 12222, Riyadh, KSA', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={value} href={href}
                    className="flex items-start gap-3 group transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9962C'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <div className="p-2 rounded-lg flex-shrink-0"
                      style={{ background: 'rgba(201,150,44,0.08)', border: '1px solid rgba(201,150,44,0.15)' }}>
                      <Icon size={14} style={{ color: '#C9962C' }} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-wider mb-0.5" style={{ color: 'rgba(201,150,44,0.5)' }}>{label}</p>
                      <p className="text-xs">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp direct */}
            <a href={`https://wa.me/966565882482?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl font-bold text-sm transition-all"
              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: '#fff', boxShadow: '0 8px 24px rgba(34,197,94,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(34,197,94,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(34,197,94,0.3)'}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 scroll-reveal-right">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl space-y-5"
              style={{ background: 'rgba(20,36,69,0.7)', border: '1px solid rgba(201,150,44,0.15)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(201,150,44,0.7)' }}>Full Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange}
                    className="form-input" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(201,150,44,0.7)' }}>Company</label>
                  <input name="company" value={form.company} onChange={handleChange}
                    className="form-input" placeholder="Company name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(201,150,44,0.7)' }}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    className="form-input" placeholder="+966 XXX XXX XXX" type="tel" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(201,150,44,0.7)' }}>Email Address *</label>
                  <input name="email" required value={form.email} onChange={handleChange}
                    className="form-input" placeholder="your@email.com" type="email" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(201,150,44,0.7)' }}>Required Manpower Category</label>
                <select name="manpower" value={form.manpower} onChange={handleChange} className="form-input"
                  style={{ appearance: 'none', cursor: 'pointer' }}>
                  <option value="">Select a category...</option>
                  <option value="General Manpower">General Manpower (Multiple Categories)</option>
                  <option value="Contracting Services">Contracting Services</option>
                  <option value="Facility Management">Facility Management</option>
                  {MANPOWER_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(201,150,44,0.7)' }}>Project Details / Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                  className="form-input resize-none"
                  placeholder="Describe your project requirements, number of workers needed, duration, location..." />
              </div>
              <div className="flex gap-3">
                <button type="submit"
                  className="btn-gold flex-1 justify-center text-sm py-4"
                  style={{ opacity: sent ? 0.7 : 1 }}>
                  <Send size={16} />
                  {sent ? 'Enquiry Sent!' : 'Send Enquiry'}
                </button>
              </div>
              <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
                We respond within 24 hours. For urgent requirements: +966 565 882 482
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
