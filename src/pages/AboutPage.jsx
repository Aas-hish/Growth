import { motion } from 'framer-motion';
import { Shield, Lightbulb, Heart, Star, Users, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutContent } from '../data/content';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatCard, fadeLeft, fadeRight } from '../utils/animations';
import PageTransition from '../components/ui/PageTransition';
import PageBanner from '../components/ui/PageBanner';

const iconMap = { Shield, Lightbulb, Heart, Star, Users };

export default function AboutPage() {
  return (
    <PageTransition>
      <PageBanner 
        badge={aboutContent.badge}
        title={aboutContent.heading}
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
      />

      {/* About Content */}
      <section className="py-20 bg-[#F2F2EC]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Story */}
          <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
            <AnimatedSection variants={fadeLeft}>
              <p className="text-[#0D1B1E]/65 text-xl leading-relaxed mb-6">
                {aboutContent.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D1B1E] text-white font-semibold text-sm hover:bg-[#1A292C] transition-all duration-200"
              >
                Work With Us <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection variants={fadeRight} className="grid grid-cols-1 gap-4">
              <FloatCard className="rounded-3xl p-7 bg-[#0D1B1E]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#B6E388]/10 flex items-center justify-center">
                    <Target size={18} className="text-[#B6E388]" />
                  </div>
                  <p className="text-[#B6E388] text-xs font-bold uppercase tracking-widest">Mission</p>
                </div>
                <p className="text-white/80 leading-relaxed text-sm">{aboutContent.mission}</p>
              </FloatCard>
              <FloatCard className="rounded-3xl p-7 bg-[#B6E388]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0D1B1E]/10 flex items-center justify-center">
                    <Eye size={18} className="text-[#0D1B1E]" />
                  </div>
                  <p className="text-[#0D1B1E] text-xs font-bold uppercase tracking-widest">Vision</p>
                </div>
                <p className="text-[#0D1B1E]/80 leading-relaxed text-sm">{aboutContent.vision}</p>
              </FloatCard>
            </AnimatedSection>
          </div>

          {/* Values */}
          <AnimatedSection className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0D1B1E]/8 text-[#0D1B1E] text-sm font-medium border border-[#0D1B1E]/10 mb-3">
              Our DNA
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B1E]">Core Values</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {aboutContent.values.map((value) => {
              const Icon = iconMap[value.icon] || Star;
              return (
                <StaggerItem key={value.name}>
                  <FloatCard className="rounded-2xl p-6 bg-[#0D1B1E] flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#B6E388]/10 flex items-center justify-center">
                      <Icon size={20} className="text-[#B6E388]" />
                    </div>
                    <span className="text-white/80 text-sm font-medium text-center">{value.name}</span>
                  </FloatCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Banner */}
      <section className="py-20 bg-[#0D1B1E]">
        <AnimatedSection className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            A team driven by <span className="text-[#B6E388]">passion</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-8">
            Our engineers, designers, and strategists work as one cohesive unit to bring your vision to life.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B6E388] text-[#0D1B1E] font-bold hover:bg-[#c9f0a0] hover:scale-105 transition-all duration-200">
            Say Hello <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
