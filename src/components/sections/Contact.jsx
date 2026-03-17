import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { contactContent } from '../../data/content';
import { AnimatedSection } from '../../utils/animations';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-[#0D1B1E]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#B6E388]/10 text-[#B6E388] text-sm font-medium border border-[#B6E388]/20 mb-4">
            {contactContent.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            {contactContent.heading}
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            {contactContent.description}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Info Panel */}
          <AnimatedSection className="md:col-span-2 flex flex-col gap-5">
            {[
              { icon: MapPin, label: 'Address', value: contactContent.address },
              { icon: Phone, label: 'Phone', value: contactContent.phone },
              { icon: Mail, label: 'Email', value: contactContent.email },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl p-6 bg-[#1A292C] border border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#B6E388]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#B6E388]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </div>
            ))}

            {/* CTA Banner */}
            <div className="rounded-2xl p-6 bg-[#B6E388] flex-1 flex flex-col justify-between">
              <p className="text-[#0D1B1E] font-black text-xl leading-snug">
                Let's build something great together.
              </p>
              <p className="text-[#0D1B1E]/60 text-sm mt-2">
                We respond within 24 hours. We're ready when you are.
              </p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2} className="md:col-span-3">
            <div className="rounded-3xl p-8 bg-[#1A292C] border border-white/5 h-full">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                  <CheckCircle size={52} className="text-[#B6E388]" />
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-white/50">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                    className="mt-2 px-6 py-2.5 rounded-full bg-[#B6E388] text-[#0D1B1E] font-semibold text-sm hover:bg-[#c9f0a0] transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/50 text-xs font-medium uppercase tracking-widest mb-2 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#0D1B1E] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 text-sm outline-none focus:border-[#B6E388]/50 focus:ring-2 focus:ring-[#B6E388]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-medium uppercase tracking-widest mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-[#0D1B1E] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 text-sm outline-none focus:border-[#B6E388]/50 focus:ring-2 focus:ring-[#B6E388]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs font-medium uppercase tracking-widest mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full bg-[#0D1B1E] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 text-sm outline-none focus:border-[#B6E388]/50 focus:ring-2 focus:ring-[#B6E388]/10 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="self-start flex items-center gap-2 px-8 py-4 rounded-full bg-[#B6E388] text-[#0D1B1E] font-bold text-sm hover:bg-[#c9f0a0] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0D1B1E]/30 border-t-[#0D1B1E] rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
