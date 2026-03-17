import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { heroContent } from '../../data/content';
import { stagger, fadeUp } from '../../utils/animations';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -20%, #1e3a1e 0%, #0D1B1E 60%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(182,227,136,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(182,227,136,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B6E388]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#B6E388]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6E388]/30 bg-[#B6E388]/10 text-[#B6E388] text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B6E388] animate-pulse" />
          {heroContent.badge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-white mb-4"
        >
          {heroContent.headline}
          <br />
          <span className="text-[#B6E388]">{heroContent.headlineAccent}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed mt-6 mb-10"
        >
          {heroContent.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#B6E388] text-[#0D1B1E] font-bold text-base hover:bg-[#c9f0a0] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#B6E388]/20"
          >
            {heroContent.primaryCta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/80 font-medium text-base hover:bg-white/5 hover:text-white transition-all duration-200"
          >
            <Play size={16} fill="currentColor" />
            {heroContent.secondaryCta}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5"
        >
          {heroContent.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-[#0D1B1E] px-6 py-6 flex flex-col items-center gap-1 hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-4xl md:text-5xl font-black text-[#B6E388]">{stat.value}</span>
              <span className="text-white/50 text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
