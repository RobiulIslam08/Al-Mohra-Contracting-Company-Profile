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
  const [focusedField, setFocusedField] = useState(null);

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
    <section id="contact" className="w-full py-16 lg:py-24 relative bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Info (Light Premium Card) */}
          <div className="lg:col-span-4 space-y-6 scroll-reveal-left">
            <div className="p-8 rounded-3xl relative overflow-hidden bg-white"
              style={{ 
                border: '1px solid rgba(11,26,51,0.05)',
                boxShadow: '0 25px 50px -12px rgba(11,26,51, 0.1)'
              }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9962C] rounded-full mix-blend-overlay filter blur-[60px] opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C9962C] rounded-full mix-blend-overlay filter blur-[60px] opacity-10"></div>
              
              <h3 className="font-bold text-[#0B1A33] mb-8 text-2xl relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
                Contact <span style={{ color: '#C9962C', fontStyle: 'italic' }}>Details</span>
              </h3>
              
              <div className="space-y-6 relative z-10">
                {[
                  { icon: Phone, label: 'Primary Phone', value: '+966 565 882 482', href: 'tel:+966565882482' },
                  { icon: Phone, label: 'Secondary Phone', value: '+966 502 475 835', href: 'tel:+966502475835' },
                  { icon: Mail,  label: 'Email', value: 'mohra.ariful@gmail.com', href: 'mailto:mohra.ariful@gmail.com' },
                  { icon: MapPin, label: 'Head Office', value: 'Al Olaya Dist, Riyadh, KSA', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={value} href={href}
                    className="flex items-center gap-4 group transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gray-50"
                      style={{ border: '1px solid rgba(201,150,44,0.15)' }}>
                      <Icon size={18} style={{ color: '#C9962C' }} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest mb-1 transition-colors duration-300 group-hover:text-[#C9962C]" style={{ color: 'rgba(11,26,51,0.5)' }}>{label}</p>
                      <p className="text-sm font-medium text-[#0B1A33] transition-colors duration-300">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct */}
            <a href={`https://wa.me/966565882482?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full p-5 rounded-2xl font-bold text-sm transition-all duration-300 overflow-hidden relative"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)', color: '#fff', boxShadow: '0 10px 30px rgba(16,185,129,0.2)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 15px 40px rgba(16,185,129,0.3)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 10px 30px rgba(16,185,129,0.2)'}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <MessageCircle size={20} className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Chat on WhatsApp</span>
            </a>
          </div>

          {/* Contact Form (Light Premium Card) */}
          <div className="lg:col-span-8 scroll-reveal-right">
            <form onSubmit={handleSubmit} className="p-8 lg:p-10 rounded-3xl space-y-6 relative bg-white"
              style={{ border: '1px solid rgba(11,26,51,0.05)', boxShadow: '0 25px 50px -12px rgba(11,26,51, 0.1)' }}>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0B1A33] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Send a Message</h3>
                <p className="text-sm text-gray-500">Fill in the form below and our team will get back to you within 24 hours.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Doe', required: true },
                  { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corp', required: false },
                  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+966 5X XXX XXXX', required: false },
                  { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@example.com', required: true },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-2 text-gray-500">{field.label}</label>
                    <input 
                      name={field.name} 
                      type={field.type}
                      required={field.required}
                      value={form[field.name]} 
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-[#0B1A33] outline-none transition-all duration-300 focus:bg-white"
                      style={{ 
                        borderColor: focusedField === field.name ? '#C9962C' : 'rgba(229, 231, 235, 1)',
                        boxShadow: focusedField === field.name ? '0 0 0 4px rgba(201,150,44,0.1)' : 'none'
                      }}
                      placeholder={field.placeholder} 
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider mb-2 text-gray-500">Required Manpower Category</label>
                <div className="relative">
                  <select name="manpower" value={form.manpower} onChange={handleChange} 
                    onFocus={() => setFocusedField('manpower')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-[#0B1A33] outline-none transition-all duration-300 focus:bg-white appearance-none"
                    style={{ 
                      borderColor: focusedField === 'manpower' ? '#C9962C' : 'rgba(229, 231, 235, 1)',
                      boxShadow: focusedField === 'manpower' ? '0 0 0 4px rgba(201,150,44,0.1)' : 'none'
                    }}>
                    <option value="">Select a service category...</option>
                    <option value="General Manpower">General Manpower (Multiple Categories)</option>
                    <option value="Contracting Services">Contracting Services</option>
                    <option value="Facility Management">Facility Management</option>
                    {MANPOWER_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider mb-2 text-gray-500">Project Details / Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-[#0B1A33] outline-none transition-all duration-300 focus:bg-white resize-none"
                  style={{ 
                    borderColor: focusedField === 'message' ? '#C9962C' : 'rgba(229, 231, 235, 1)',
                    boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(201,150,44,0.1)' : 'none'
                  }}
                  placeholder="Describe your project requirements, number of workers needed, duration, location..." />
              </div>

              <div className="pt-2">
                <button type="submit"
                  className="w-full group relative overflow-hidden rounded-xl bg-[#0B1A33] text-white text-sm font-bold tracking-wide py-4 flex items-center justify-center gap-2 transition-all duration-300"
                  style={{ 
                    boxShadow: '0 10px 25px rgba(11,26,51,0.2)',
                    opacity: sent ? 0.8 : 1 
                  }}>
                  <div className="absolute inset-0 bg-[#C9962C] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <Send size={16} className={`relative z-10 transition-transform duration-300 ${sent ? 'translate-x-2 -translate-y-2 opacity-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                  <span className="relative z-10">{sent ? 'Enquiry Sent Successfully!' : 'Send Enquiry'}</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
