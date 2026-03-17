import { motion } from 'framer-motion';
import {
  Layers,
  Code2,
  Globe,
  TrendingUp,
  Sparkles,
  Cloud,
  BarChart3,
  Palette,
} from 'lucide-react';
import { services } from '../../data/content';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';

const iconMap = { Layers, Code2, Globe, TrendingUp, Sparkles, Cloud, BarChart3, Palette };

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Layers;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-3xl p-7 border transition-all duration-300 flex flex-col gap-4 cursor-default ${
        service.accent
          ? 'bg-[#B6E388] border-[#B6E388] text-[#0D1B1E]'
          : 'bg-[#1A292C] border-white/5 text-white hover:border-[#B6E388]/20 hover:bg-[#1e3030]'
      } ${service.size === 'large' ? 'md:col-span-2 md:row-span-1' : ''}`}
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
          service.accent ? 'bg-[#0D1B1E]/15' : 'bg-[#B6E388]/10'
        }`}
      >
        <Icon size={22} className={service.accent ? 'text-[#0D1B1E]' : 'text-[#B6E388]'} />
      </div>
      <div>
        <h3
          className={`font-bold text-lg mb-2 ${
            service.accent ? 'text-[#0D1B1E]' : 'text-white'
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            service.accent ? 'text-[#0D1B1E]/70' : 'text-white/55'
          }`}
        >
          {service.description}
        </p>
      </div>
      {service.size === 'large' && (
        <span
          className={`mt-auto inline-flex items-center gap-1 text-sm font-semibold ${
            service.accent ? 'text-[#0D1B1E]' : 'text-[#B6E388]'
          }`}
        >
          Learn more →
        </span>
      )}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0D1B1E]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#B6E388]/10 text-[#B6E388] text-sm font-medium border border-[#B6E388]/20 mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Solutions Designed<br />
            <span className="text-[#B6E388]">for Your Growth</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/55 text-lg">
            From ERP to branding, we offer a complete suite of technology and digital services.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <StaggerItem key={service.id} className={service.size === 'large' ? 'md:col-span-2' : ''}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
