/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Mail, ChevronRight, CheckCircle2, Heart, Coffee, Lightbulb, Cake, Plane, Utensils, Camera, Mic, Sparkles, Car, Palette, Shirt, Phone, Home, Briefcase, MessageSquare } from 'lucide-react';

import heroImage from './assets/images/event_planner_collage_1781940111652.jpg';

const SERVICES = [
  { id: 's1', title: 'Wedding', icon: Heart, category: 'Personal', desc: 'Comprehensive planning and elegant execution for your special day.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
  { id: 's2', title: 'Corporate Events', icon: Coffee, category: 'Corporate', desc: 'Professional summits, retreats, and galas reflecting your brand.', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
  { id: 's3', title: 'Branding', icon: Lightbulb, category: 'Corporate', desc: 'Immersive brand activations and product launch experiences.', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80' },
  { id: 's4', title: 'Party', icon: Cake, category: 'Personal', desc: 'Curated birthdays, anniversaries, and milestone celebrations.', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80' },
  { id: 's5', title: 'Destination Weddings', icon: Plane, category: 'Personal', desc: 'Seamless logistics for breathtaking celebrations abroad.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
  { id: 's6', title: 'Catering', icon: Utensils, category: 'Operations', desc: 'Exceptional culinary experiences and custom menu design.', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80' },
  { id: 's7', title: 'Photo & Video', icon: Camera, category: 'Media', desc: 'Capturing unforgettable moments with professional media teams.', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80' },
  { id: 's8', title: 'Sound', icon: Mic, category: 'Production', desc: 'Premium audio engineering and acoustic design for venues.', image: 'https://images.unsplash.com/photo-1470229722913-7c092bb2bb73?auto=format&fit=crop&w=800&q=80' },
  { id: 's9', title: 'Lights', icon: Sparkles, category: 'Production', desc: 'Atmospheric lighting setups that transform any environment.', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80' },
  { id: 's10', title: 'Car Rental', icon: Car, category: 'Logistics', desc: 'Luxury transportation fleets and VIP chauffeur services.', image: 'https://images.unsplash.com/photo-1502877338535-34cb0a514d48?auto=format&fit=crop&w=800&q=80' },
  { id: 's11', title: 'Makeup', icon: Palette, category: 'Personal Care', desc: 'Professional styling and makeup artists for your bridal party.', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80' },
  { id: 's12', title: 'Boutique', icon: Shirt, category: 'Apparel', desc: 'Bespoke attire curation and wardrobe consulting services.', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80' },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const filteredServices = useMemo(() => {
    const q = search.toLowerCase();
    return SERVICES.filter(s => 
      s.title.toLowerCase().includes(q) || 
      s.category.toLowerCase().includes(q)
    );
  }, [search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-gold)] font-sans selection:bg-[var(--color-brand-gold-muted)] pb-[calc(4rem+env(safe-area-inset-bottom))] sm:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--color-brand-bg)]/90 backdrop-blur-md border-b border-[var(--color-brand-gold-muted)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col items-center">
            {/* Simple CSS Crown representation */}
            <div className="flex items-end space-x-1 mb-1">
              <div className="w-1.5 h-3 bg-[var(--color-brand-gold)] transform -skew-x-12"></div>
              <div className="w-1.5 h-4 bg-[var(--color-brand-gold)]"></div>
              <div className="w-1.5 h-3 bg-[var(--color-brand-gold)] transform skew-x-12"></div>
            </div>
            <div className="font-serif text-2xl tracking-widest font-medium leading-none uppercase">Pravat</div>
            <div className="text-[10px] tracking-[0.2em] uppercase mt-1">Event Planner</div>
          </div>
          <nav className="hidden sm:flex gap-8 text-sm font-medium tracking-wide">
            <a href="#services" className="hover:text-[var(--color-brand-gold-hover)] transition-colors uppercase text-xs">Services</a>
            <a href="#inquiry" className="hover:text-[var(--color-brand-gold-hover)] transition-colors uppercase text-xs">Inquire</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full border-b border-[var(--color-brand-gold-muted)]">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Event Planner Events Collage" 
            className="w-full h-full object-cover opacity-30" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-bg)] via-[var(--color-brand-bg)]/80 to-[var(--color-brand-bg)]/40"></div>
        </div>
        <div className="relative z-10 px-6 py-24 sm:py-32 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl sm:text-6xl tracking-tight leading-tight mb-6"
          >
            Elevating Your <br/>
            <span className="italic drop-shadow-sm">Special Occasions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
          >
            We provide end-to-end event management, from intimate weddings to massive corporate brandings, with impeccable attention to detail.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center flex-col sm:flex-row gap-6"
          >
            <a href="#services" className="border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] bg-[var(--color-brand-bg)]/40 backdrop-blur-sm px-8 py-3 rounded-sm text-xs tracking-widest uppercase font-medium hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-bg)] transition-colors inline-block">
              View Services
            </a>
            <a href="#inquiry" className="bg-[var(--color-brand-gold)] text-[var(--color-brand-bg)] border border-[var(--color-brand-gold)] px-8 py-3 rounded-sm text-xs tracking-widest uppercase font-medium hover:bg-[var(--color-brand-gold-hover)] hover:border-[var(--color-brand-gold-hover)] transition-colors inline-block">
              Plan With Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services/Listing Section */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-serif text-3xl mb-3">Our Expertise</h2>
              <p className="opacity-80 text-sm tracking-wide">Everything you need under one roof.</p>
            </div>
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
              <input 
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-transparent border border-[var(--color-brand-gold-muted)] rounded-none text-sm focus:outline-none focus:border-[var(--color-brand-gold)] transition-all placeholder:text-[var(--color-brand-gold)] placeholder:opacity-40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    key={service.id} 
                    className="flex flex-col bg-[var(--color-brand-card)] border border-[var(--color-brand-gold-muted)] group hover:border-[var(--color-brand-gold)] transition-colors relative overflow-hidden shadow-xl"
                  >
                    <div className="h-48 w-full relative overflow-hidden bg-neutral-900">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90 mix-blend-luminosity" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-card)] to-transparent"></div>
                      <div className="absolute top-4 left-4 w-10 h-10 bg-[var(--color-brand-bg)] border border-[var(--color-brand-gold-muted)] rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-4 h-4 stroke-1 text-[var(--color-brand-gold)]" />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-[10px] tracking-widest uppercase opacity-60 mb-2">{service.category}</div>
                      <h3 className="font-serif text-2xl mb-3 text-white">{service.title}</h3>
                      <p className="text-sm opacity-80 leading-relaxed flex-1 mb-8">{service.desc}</p>
                      
                      <button 
                        onClick={() => {
                          const inquirySection = document.getElementById('inquiry');
                          if (inquirySection) inquirySection.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-[10px] tracking-widest uppercase border-b border-[var(--color-brand-gold-muted)] pb-1 self-start hover:text-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold)] transition-colors flex items-center"
                      >
                        Inquire Now <ChevronRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 py-20 text-center opacity-70 border border-dashed border-[var(--color-brand-gold-muted)]">
                No services found matching "{search}".
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dotted Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t-[1.5px] border-dotted border-[var(--color-brand-gold-muted)] w-full"></div>
      </div>

      {/* Inquiry Form / Query Solution */}
      <section id="inquiry" className="py-24 max-w-3xl mx-auto px-6">
        <div className="bg-[var(--color-brand-card)] p-10 sm:p-14 border border-[var(--color-brand-gold-muted)] shadow-2xl relative overflow-hidden">
          {/* Decorative corner borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[var(--color-brand-gold)] m-4"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--color-brand-gold)] m-4"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--color-brand-gold)] m-4"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[var(--color-brand-gold)] m-4"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="font-serif text-3xl mb-3">Send an Inquiry</h2>
            <p className="opacity-80 text-sm">Let us handle the details while you enjoy the event.</p>
          </div>

          {formStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 relative z-10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[var(--color-brand-gold)] mb-6">
                <CheckCircle2 className="w-8 h-8 stroke-1" />
              </div>
              <h3 className="font-serif text-2xl mb-2">Message Received</h3>
              <p className="opacity-80 mb-8 max-w-sm mx-auto text-sm leading-relaxed">Thank you for reaching out to Pravat Event Planner. We will contact you soon to discuss your requirements.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="text-xs uppercase tracking-widest border-b border-[var(--color-brand-gold)] pb-1 hover:text-[var(--color-brand-gold-hover)] transition-colors"
              >
                Submit another query
              </button>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit} 
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase opacity-80">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-transparent border border-[var(--color-brand-gold-muted)] focus:outline-none focus:border-[var(--color-brand-gold)] transition-all font-sans text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase opacity-80">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-transparent border border-[var(--color-brand-gold-muted)] focus:outline-none focus:border-[var(--color-brand-gold)] transition-all font-sans text-sm" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase opacity-80">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50 stroke-1" />
                  <input required type="email" placeholder="" className="w-full pl-11 pr-4 py-3 bg-transparent border border-[var(--color-brand-gold-muted)] focus:outline-none focus:border-[var(--color-brand-gold)] transition-all font-sans text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase opacity-80">Service Interested In</label>
                  <select required defaultValue="" className="w-full px-4 py-3 bg-[var(--color-brand-card)] border border-[var(--color-brand-gold-muted)] focus:outline-none focus:border-[var(--color-brand-gold)] transition-all appearance-none text-sm font-sans">
                    <option value="" disabled className="bg-[var(--color-brand-card)]">Select a service</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id} className="bg-[var(--color-brand-card)]">{s.title}</option>)}
                    <option value="multiple" className="bg-[var(--color-brand-card)]">Multiple Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase opacity-80">Event Date</label>
                  <input required type="date" className="w-full px-4 py-3 bg-transparent border border-[var(--color-brand-gold-muted)] focus:outline-none focus:border-[var(--color-brand-gold)] transition-all font-sans text-sm [color-scheme:dark]" />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs tracking-widest uppercase opacity-80">Additional Details</label>
                <textarea required rows={3} placeholder="Please describe your vision or specific queries..." className="w-full px-4 py-3 bg-transparent border border-[var(--color-brand-gold-muted)] focus:outline-none focus:border-[var(--color-brand-gold)] transition-all resize-none font-sans text-sm placeholder:opacity-40 placeholder:text-[var(--color-brand-gold)]"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full flex items-center justify-center py-4 bg-[var(--color-brand-gold)] text-[var(--color-brand-bg)] tracking-widest uppercase text-xs font-semibold hover:bg-[var(--color-brand-gold-hover)] transition-colors disabled:opacity-70 mt-4"
              >
                {formStatus === 'submitting' ? 'Submitting...' : 'Submit Query'}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Footer styled precisely like the image bottom */}
      <footer className="pb-16 pt-8 text-center px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm tracking-wide font-medium flex items-center justify-center flex-wrap gap-2">
            Pravat Event planner, Punkunnam, Thrissur- 680002
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium tracking-wide">
            <a href="tel:+919809028453" className="hover:text-[var(--color-brand-gold-hover)] flex items-center"><Phone className="w-3 h-3 mr-1.5" />9809028453</a>
            <span className="hidden sm:inline opacity-50">|</span>
            <a href="tel:+919645800571" className="hover:text-[var(--color-brand-gold-hover)]">9645800571</a>
            <span className="hidden sm:inline opacity-50">|</span>
            <a href="tel:+919645716555" className="hover:text-[var(--color-brand-gold-hover)]">9645716555</a>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation (App-like) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-brand-bg)]/95 backdrop-blur-lg border-t border-[var(--color-brand-gold-muted)] sm:hidden flex justify-around items-center h-16 pb-[env(safe-area-inset-bottom)] px-4">
        <a href="#" className="flex flex-col items-center justify-center w-full h-full text-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold-hover)] transition-colors mt-1">
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-medium">Home</span>
        </a>
        <a href="#services" className="flex flex-col items-center justify-center w-full h-full text-[var(--color-brand-gold)] opacity-70 hover:opacity-100 transition-opacity mt-1">
          <Briefcase className="w-5 h-5 mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-medium">Services</span>
        </a>
        <a href="#inquiry" className="flex flex-col items-center justify-center w-full h-full text-[var(--color-brand-gold)] opacity-70 hover:opacity-100 transition-opacity mt-1">
          <MessageSquare className="w-5 h-5 mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-medium">Inquire</span>
        </a>
        <a href="tel:+919809028453" className="flex flex-col items-center justify-center w-full h-full text-[var(--color-brand-gold)] opacity-70 hover:opacity-100 transition-opacity mt-1">
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-medium">Call</span>
        </a>
      </nav>
    </div>
  );
}
