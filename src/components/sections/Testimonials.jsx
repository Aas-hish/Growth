import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/content';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28" style={{ background: '#F2F2EC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0D1B1E]/10 text-[#0D1B1E] text-sm font-medium border border-[#0D1B1E]/15 mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0D1B1E] tracking-tight">
            Hear From Our<br />
            <span className="text-[#1A292C]/50">Happy Clients</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <StaggerItem key={t.id}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className={`rounded-3xl p-8 flex flex-col gap-6 h-full ${
                  index === 1
                    ? 'bg-[#0D1B1E] text-white'
                    : 'bg-white border border-[#0D1B1E]/8 text-[#0D1B1E]'
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={index === 1 ? 'text-[#B6E388] fill-[#B6E388]' : 'text-amber-400 fill-amber-400'}
                    />
                  ))}
                </div>

                <Quote
                  size={28}
                  className={index === 1 ? 'text-[#B6E388]/30' : 'text-[#0D1B1E]/10'}
                  fill="currentColor"
                />

                <p className={`text-base leading-relaxed flex-1 ${index === 1 ? 'text-white/80' : 'text-[#0D1B1E]/70'}`}>
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-current/10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 1 ? 'bg-[#B6E388] text-[#0D1B1E]' : 'bg-[#0D1B1E] text-white'
                    }`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${index === 1 ? 'text-white' : 'text-[#0D1B1E]'}`}>
                      {t.name}
                    </p>
                    <p className={`text-xs ${index === 1 ? 'text-white/50' : 'text-[#0D1B1E]/50'}`}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
