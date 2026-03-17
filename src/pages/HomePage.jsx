import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { heroContent } from '../data/content';
import { fadeUp, AnimatedSection, StaggerContainer, StaggerItem, FloatCard } from '../utils/animations';
import PageTransition from '../components/ui/PageTransition';

const backgroundImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
];

const quickServices = [
  { title: 'ERP & Mobile App', icon: '🏗️', description: 'Enterprise-grade resource planning for growth.' },
  { title: 'Web Development', icon: '🌐', description: 'High-performance, scalable web ecosystems.' },
  { title: 'Digital Marketing', icon: '📈', description: 'Data-driven growth and visibility strategies.' },
  { title: 'Cloud Solutions', icon: '☁️', description: 'Secure and resilient cloud infrastructure.' },
];

export default function HomePage() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      {/* ── Hero (Single Column, Background Slider) ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0D1B1E] text-center">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBg}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
            />
          </AnimatePresence>
          {/* Gradients to ensure text readability and smooth transition to next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B1E]/80 via-transparent to-[#F2F2EC] z-[1]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full py-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6E388]/30 bg-[#B6E388]/10 text-[#B6E388] text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6E388] animate-pulse" />
            {heroContent.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-black leading-[1] tracking-tight text-white mb-8"
          >
            {heroContent.headline}
            <br />
            <span className="text-[#B6E388]">{heroContent.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-2xl text-white/70 text-lg md:text-2xl leading-relaxed mb-12 font-medium"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#0D1B1E] font-black text-lg hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/work"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all duration-200"
            >
              <Play size={18} fill="currentColor" />
              View Portfolio
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-[#0D1B1E]/40 text-sm font-bold uppercase tracking-widest"
          >
             <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#B6E388]" /> Instant Impact</div>
             <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0D1B1E]/60" /> Data Driven</div>
             <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0D1B1E]/60" /> Scalable Logic</div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#0D1B1E]/30"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#0D1B1E]/20 to-transparent" />
        </motion.div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="py-20 bg-[#F2F2EC] border-b border-[#0D1B1E]/5">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {heroContent.stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="text-5xl md:text-6xl font-black text-[#0D1B1E] mb-2">{stat.value}</p>
                <p className="text-[#0D1B1E]/40 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Quick Services Preview (LIGHT) ── */}
      <section className="py-32 bg-[#F2F2EC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex flex-col md:flex-row items-end justify-between gap-10 mb-20 text-center md:text-left">
            <div className="max-w-3xl mx-auto md:mx-0">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0D1B1E]/5 text-[#0D1B1E] text-[10px] font-black border border-[#0D1B1E]/10 mb-6 uppercase tracking-[0.2em]">
                Excellence
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-[#0D1B1E] tracking-tighter leading-[0.9]">
                Software engineered <br /> <span className="text-[#0D1B1E]/20">for impact.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#0D1B1E] text-white font-black text-base hover:bg-[#1A292C] transition-all duration-300 shadow-xl"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickServices.map((s) => (
              <StaggerItem key={s.title}>
                <FloatCard className="rounded-[2.5rem] p-10 bg-white border border-[#0D1B1E]/5 flex flex-col gap-8 cursor-default h-full shadow-sm hover:shadow-2xl transition-all duration-300">
                   <div className="w-16 h-16 rounded-3xl bg-[#F2F2EC] flex items-center justify-center text-3xl shadow-inner">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-[#0D1B1E] font-black text-xl mb-3 tracking-tight">{s.title}</h3>
                    <p className="text-[#0D1B1E]/50 text-base leading-relaxed font-medium">{s.description}</p>
                  </div>
                </FloatCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Why Partner With Us? (Replaces Testimonials) ── */}
      <section className="py-32 bg-[#0D1B1E]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#B6E388]/10 text-[#B6E388] text-[10px] font-black border border-[#B6E388]/20 mb-6 uppercase tracking-[0.2em]">
              The GrowthLoop Edge
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              Why Partner <br /> <span className="text-white/20">With Us?</span>
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-medium leading-relaxed">
              We may be a young company, but our passion, expertise, and dedication set us apart. 
              Combining innovation, practical industry understanding, and a customer-first mindset.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Proven Expertise', 
                description: 'Even with just one year in the industry, we’ve successfully delivered smart, reliable systems that meet real business needs.',
                icon: '🏗️' 
              },
              { 
                title: 'Client-Focused', 
                description: 'Your goals are our priority. We work closely with you to understand your vision and exceed your expectations.',
                icon: '🤝' 
              },
              { 
                title: 'Innovation Driven', 
                description: 'We stay ahead of the curve, leveraging the latest technologies to give you a competitive edge.',
                icon: '🚀' 
              }
            ].map((point, idx) => (
              <StaggerItem key={idx}>
                <FloatCard className="rounded-[2.5rem] p-12 bg-[#1A292C] border border-white/5 flex flex-col gap-8 h-full shadow-lg hover:shadow-[#B6E388]/5 transition-all duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-[#B6E388]/10 flex items-center justify-center text-3xl shadow-inner">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-black text-2xl mb-4 tracking-tight">{point.title}</h3>
                    <p className="text-white/50 text-base leading-relaxed font-medium">{point.description}</p>
                  </div>
                </FloatCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA Strip (Lime Impact) ── */}
      <section className="py-32 bg-[#B6E388]">
        <AnimatedSection className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-black text-[#0D1B1E] tracking-tighter leading-[1] mb-8">
              Innovate without <br /> <span className="text-[#0D1B1E]/30">compromise.</span>
            </h2>
            <p className="text-[#0D1B1E]/60 text-xl md:text-3xl font-bold tracking-tight">Your vision, our architecture. Together, we scale.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-[#0D1B1E] text-white font-black text-xl hover:bg-[#1A292C] transition-all duration-300 shadow-2xl"
            >
              Start Your Project <ArrowRight size={24} />
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
