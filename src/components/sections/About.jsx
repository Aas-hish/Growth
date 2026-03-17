import { Shield, Lightbulb, Heart, Star, Users } from 'lucide-react';
import { aboutContent } from '../../data/content';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';
import { motion } from 'framer-motion';

const iconMap = { Shield, Lightbulb, Heart, Star, Users };

export default function About() {
  return (
    <section id="about" className="py-28" style={{ background: '#F2F2EC' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0D1B1E]/10 text-[#0D1B1E] text-sm font-medium border border-[#0D1B1E]/15 mb-6">
              {aboutContent.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0D1B1E] leading-[1.1] tracking-tight mb-6">
              {aboutContent.heading}
            </h2>
            <p className="text-[#0D1B1E]/65 text-lg leading-relaxed">
              {aboutContent.description}
            </p>
          </AnimatedSection>

          {/* Mission & Vision Cards */}
          <AnimatedSection delay={0.2} className="grid grid-cols-1 gap-4">
            <div className="rounded-3xl p-7 bg-[#0D1B1E] border border-[#0D1B1E]/10">
              <p className="text-[#B6E388] text-xs font-bold uppercase tracking-widest mb-3">Mission</p>
              <p className="text-white/80 leading-relaxed">{aboutContent.mission}</p>
            </div>
            <div className="rounded-3xl p-7 bg-[#B6E388] border border-[#B6E388]">
              <p className="text-[#0D1B1E] text-xs font-bold uppercase tracking-widest mb-3">Vision</p>
              <p className="text-[#0D1B1E]/80 leading-relaxed">{aboutContent.vision}</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <AnimatedSection className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#0D1B1E]">Our Core Values</h3>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {aboutContent.values.map((value) => {
            const Icon = iconMap[value.icon] || Star;
            return (
              <StaggerItem key={value.name}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="rounded-2xl p-5 bg-[#0D1B1E] flex flex-col items-center gap-3 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B6E388]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#B6E388]" />
                  </div>
                  <span className="text-white/80 text-sm font-medium text-center">{value.name}</span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
