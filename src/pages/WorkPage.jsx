import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatCard } from '../utils/animations';
import PageTransition from '../components/ui/PageTransition';
import PageBanner from '../components/ui/PageBanner';

export default function WorkPage() {
  return (
    <PageTransition>
      <PageBanner 
        badge="Our Work"
        title="Success"
        accentTitle="Portfolio"
        backgroundImage="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=2070"
        description="A curated selection of our most impactful work across industries."
      />

      {/* Projects Grid (LIGHT) */}
      <section className="py-24 bg-[#F2F2EC]">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <FloatCard
                  className={`rounded-3xl p-10 border cursor-pointer flex flex-col gap-6 min-h-[360px] transition-all duration-300 ${
                    index % 3 === 1
                      ? 'bg-[#0D1B1E] border-[#0D1B1E] text-white shadow-2xl'
                      : 'bg-white border-[#0D1B1E]/5 text-[#0D1B1E] hover:border-[#B6E388]/40 shadow-sm hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`text-xs font-black uppercase tracking-widest ${index % 3 === 1 ? 'text-[#B6E388]' : 'text-[#0D1B1E]/40'}`}>
                      {project.category}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center ${index % 3 === 1 ? 'border-[#B6E388]/20 text-[#B6E388]' : 'border-[#0D1B1E]/10 text-[#0D1B1E]'}`}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>
                  <h3 className={`text-3xl font-black leading-tight mt-auto ${index % 3 === 1 ? 'text-white' : 'text-[#0D1B1E]'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${index % 3 === 1 ? 'text-white/50' : 'text-[#0D1B1E]/50'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-4 py-1.5 rounded-full text-xs font-bold ${index % 3 === 1 ? 'bg-white/5 text-white/60' : 'bg-[#F2F2EC] text-[#0D1B1E]/60'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </FloatCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA (Lime) */}
      <section className="py-24 bg-[#B6E388]">
        <AnimatedSection className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0D1B1E] tracking-tight mb-4">
              Let's craft your <span className="text-[#0D1B1E]/40">success story.</span>
            </h2>
            <p className="text-[#0D1B1E]/60 text-xl font-medium">Ready to start your next big project?</p>
          </div>
          <Link to="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#0D1B1E] text-white font-bold text-lg hover:bg-[#1A292C] transition-all duration-200 shadow-2xl">
            Start a Project <ArrowRight size={20} />
          </Link>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
