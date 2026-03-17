import { motion } from 'framer-motion';
import {
  Layers, Code2, Globe, TrendingUp, Sparkles, Cloud, BarChart3, Palette,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/content';
import { AnimatedSection, FloatCard, StaggerContainer, StaggerItem } from '../utils/animations';
import PageTransition from '../components/ui/PageTransition';
import PageBanner from '../components/ui/PageBanner';

const iconMap = { Layers, Code2, Globe, TrendingUp, Sparkles, Cloud, BarChart3, Palette };

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Layers;
  return (
    <FloatCard
      className={`rounded-3xl p-8 border flex flex-col gap-5 ${
        service.accent
          ? 'bg-[#0D1B1E] border-[#0D1B1E] text-white'
          : 'bg-white border-[#0D1B1E]/5 text-[#0D1B1E] hover:border-[#B6E388]/40 shadow-sm hover:shadow-xl'
      } ${service.size === 'large' ? 'md:col-span-2' : ''}`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.accent ? 'bg-[#B6E388]/10' : 'bg-[#F2F2EC]'}`}>
        <Icon size={22} className={service.accent ? 'text-[#B6E388]' : 'text-[#0D1B1E]'} />
      </div>
      <div>
        <h3 className={`font-black text-xl mb-3 ${service.accent ? 'text-white' : 'text-[#0D1B1E]'}`}>
          {service.title}
        </h3>
        <p className={`text-sm leading-relaxed ${service.accent ? 'text-white/60' : 'text-[#0D1B1E]/50'}`}>
          {service.description}
        </p>
      </div>
      <motion.span
        whileHover={{ x: 4 }}
        className={`mt-auto inline-flex items-center gap-1 text-sm font-bold ${service.accent ? 'text-[#B6E388]' : 'text-[#0D1B1E]'}`}
      >
        Learn more <ArrowRight size={14} />
      </motion.span>
    </FloatCard>
  );
}

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageBanner 
        badge="What We Do"
        title="Solutions Designed"
        accentTitle="for Your Growth"
        backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
        description="From ERP to branding — a complete suite of technology and digital services."
      />

      {/* Services Grid */}
      <section className="py-24 bg-[#F2F2EC]">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.id} className={service.size === 'large' ? 'md:col-span-2' : ''}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1518] border-t border-white/5">
        <AnimatedSection className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Got a project in mind?
          </h2>
          <p className="text-white/50 mb-8">Tell us about your goals and we'll tailor the perfect solution.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B6E388] text-[#0D1B1E] font-bold hover:bg-[#c9f0a0] hover:scale-105 transition-all duration-200">
            Start a Project <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
