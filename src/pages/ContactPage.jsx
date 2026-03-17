import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, Globe } from 'lucide-react';
import { contactContent } from '../data/content';
import { AnimatedSection, fadeLeft, fadeRight, StaggerContainer, StaggerItem } from '../utils/animations';
import PageTransition from '../components/ui/PageTransition';
import PageBanner from '../components/ui/PageBanner';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1600);
  };

  return (
    <PageTransition>
      <PageBanner 
        badge={contactContent.badge}
        title="Connect"
        accentTitle="With Us"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2074"
        description={contactContent.heading}
      />

      {/* Contact Body */}
      <section className="py-24 bg-[#F2F2EC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Left Column: Office & Branches */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              
              {/* Head Office */}
              <AnimatedSection variants={fadeLeft}>
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-[#0D1B1E] mb-2">{contactContent.headOffice.title}</h3>
                  <p className="text-[#0D1B1E]/60 font-medium">{contactContent.headOffice.team}</p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-[#0D1B1E]/5 shadow-sm">
                    <div className="w-10 h-10 rounded-2xl bg-[#0D1B1E]/5 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#0D1B1E]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#0D1B1E]/40 mb-1">Email</p>
                      <p className="font-bold text-[#0D1B1E]">{contactContent.headOffice.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-[#0D1B1E]/5 shadow-sm">
                    <div className="w-10 h-10 rounded-2xl bg-[#0D1B1E]/5 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#0D1B1E]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#0D1B1E]/40 mb-1">Address</p>
                      <p className="font-bold text-[#0D1B1E]">{contactContent.headOffice.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-[#0D1B1E]/5 shadow-sm">
                    <div className="w-10 h-10 rounded-2xl bg-[#0D1B1E]/5 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[#0D1B1E]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#0D1B1E]/40 mb-1">Phone</p>
                      <p className="font-bold text-[#0D1B1E]">{contactContent.headOffice.phone}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Branches */}
              <AnimatedSection variants={fadeLeft} delay={0.2}>
                <div className="mb-8 p-6 bg-[#B6E388] rounded-3xl inline-block">
                   <h3 className="text-2xl font-black text-[#0D1B1E]">Our Branches</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactContent.branches.map((branch) => (
                    <div key={branch.city} className="p-6 bg-white rounded-3xl border border-[#0D1B1E]/5 shadow-sm">
                      <p className="text-[#0D1B1E] font-black text-lg mb-1">{branch.city} Branch</p>
                      <p className="text-[#0D1B1E]/40 text-xs font-bold mb-3">{branch.team}</p>
                      <div className="flex items-center gap-2 text-[#0D1B1E] font-bold text-sm">
                        <Phone size={14} />
                        {branch.phone}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Contact Form */}
            <AnimatedSection variants={fadeRight} className="lg:col-span-3">
              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-[#0D1B1E]/5 shadow-2xl relative overflow-hidden h-full">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B6E388]/10 rounded-bl-[100px] -mr-16 -mt-16" />

                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-8 py-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-24 h-24 rounded-full bg-[#B6E388]/20 flex items-center justify-center"
                    >
                      <CheckCircle size={48} className="text-[#0D1B1E]" />
                    </motion.div>
                    <div>
                      <h3 className="text-4xl font-black text-[#0D1B1E] mb-4">Message Sent!</h3>
                      <p className="text-[#0D1B1E]/50 text-lg font-medium">Thank you for reaching out. Our team will be in touch shortly.</p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="px-10 py-4 rounded-full bg-[#0D1B1E] text-white font-black hover:scale-105 transition-all shadow-xl"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-12">
                      <h3 className="text-3xl font-black text-[#0D1B1E] mb-4">Send Us a Message</h3>
                      <p className="text-[#0D1B1E]/40 font-medium">Use the form below to share details about your project or inquiry.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0D1B1E]/40 ml-4">Your Name</label>
                          <input 
                            type="text" name="name" required value={form.name} onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full bg-[#F2F2EC] border-none rounded-2xl px-6 py-4 text-[#0D1B1E] font-bold placeholder-[#0D1B1E]/20 focus:ring-2 focus:ring-[#B6E388] transition-all outline-none" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0D1B1E]/40 ml-4">Your Email</label>
                          <input 
                            type="email" name="email" required value={form.email} onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full bg-[#F2F2EC] border-none rounded-2xl px-6 py-4 text-[#0D1B1E] font-bold placeholder-[#0D1B1E]/20 focus:ring-2 focus:ring-[#B6E388] transition-all outline-none" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0D1B1E]/40 ml-4">Subject</label>
                        <input 
                          type="text" name="subject" required value={form.subject} onChange={handleChange}
                          placeholder="What is your message about?"
                          className="w-full bg-[#F2F2EC] border-none rounded-2xl px-6 py-4 text-[#0D1B1E] font-bold placeholder-[#0D1B1E]/20 focus:ring-2 focus:ring-[#B6E388] transition-all outline-none" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0D1B1E]/40 ml-4">Your Message</label>
                        <textarea 
                          name="message" required rows={5} value={form.message} onChange={handleChange}
                          placeholder="Write your message here..."
                          className="w-full bg-[#F2F2EC] border-none rounded-2xl px-6 py-4 text-[#0D1B1E] font-bold placeholder-[#0D1B1E]/20 focus:ring-2 focus:ring-[#B6E388] transition-all outline-none resize-none" 
                        />
                      </div>

                      <motion.button
                        type="submit" disabled={loading}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-[#0D1B1E] text-white font-black text-lg hover:bg-[#1A292C] transition-all disabled:opacity-70 shadow-2xl relative z-10"
                      >
                        {loading ? (
                          <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>Send Message <Send size={20} /></>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 bg-[#F2F2EC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="rounded-[2.5rem] overflow-hidden border border-[#0D1B1E]/5 shadow-2xl h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4695231003093!2d85.3450402!3d27.671879699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b530193c79%3A0x8f382040e4e9eba9!2sGrowthLoop%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1773746805082!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
