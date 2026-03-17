import { motion } from 'framer-motion';
import { clients, testimonials } from '../data/content';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatCard, fadeUp } from '../utils/animations';
import PageTransition from '../components/ui/PageTransition';
import PageBanner from '../components/ui/PageBanner';
import { Quote, Star } from 'lucide-react';

export default function ClientsPage() {
  return (
    <PageTransition>
      <PageBanner 
        badge="Trust & Partnership"
        title="Trusted by"
        accentTitle="Industry Leaders"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
        description="We take pride in our collaborations with diverse businesses, from technical institutes to global trading groups."
      />

      {/* Clients Grid */}
      <section className="py-24 bg-[#F2F2EC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-black text-[#0D1B1E] mb-4">Our Partners</h2>
             <p className="text-[#0D1B1E]/50 max-w-2xl mx-auto font-medium">Powering businesses across various sectors with dedicated software solutions.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <StaggerItem key={idx}>
                <FloatCard className="h-40 rounded-3xl bg-white border border-[#0D1B1E]/5 flex items-center justify-center p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300">
                   <p className="text-[#0D1B1E] font-black text-sm uppercase tracking-wider leading-tight">
                     {client}
                   </p>
                </FloatCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials on Clients Page */}
      <section className="py-24 bg-[#0D1B1E]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex flex-col md:flex-row items-end justify-between gap-10 mb-20 text-center md:text-left">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#B6E388]/10 text-[#B6E388] text-[10px] font-black border border-[#B6E388]/20 mb-6 uppercase tracking-[0.2em]">
                Voices of Success
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What our clients <br /> <span className="text-white/20">actually say.</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((t) => (
              <StaggerItem key={t.id}>
                <FloatCard className="rounded-[2.5rem] p-12 bg-[#1A292C] border border-white/5 flex flex-col gap-8 h-full">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-[#B6E388] fill-[#B6E388]" />)}
                  </div>
                  <Quote size={48} className="text-[#B6E388]/20" fill="currentColor" />
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/80">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-[#B6E388] flex items-center justify-center font-black text-[#0D1B1E] text-xl shadow-lg shadow-[#B6E388]/20">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-white text-lg">{t.name}</p>
                      <p className="text-white/40 text-sm font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </FloatCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
