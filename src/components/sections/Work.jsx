import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/content';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';

export default function Work() {
  return (
    <section id="work" className="py-28 bg-[#0D1B1E]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#B6E388]/10 text-[#B6E388] text-sm font-medium border border-[#B6E388]/20 mb-4">
              Our Work
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Case Studies &<br />
              <span className="text-[#B6E388]">Success Stories</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-xs text-base md:text-right">
            A selection of projects that defined our approach to quality.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`rounded-3xl p-8 border border-white/5 cursor-pointer group flex flex-col gap-5 min-h-[280px] ${
                  index % 3 === 0
                    ? 'bg-[#1A292C] hover:border-[#B6E388]/20'
                    : index % 3 === 1
                    ? 'bg-[#B6E388] border-[#B6E388]'
                    : 'bg-[#1A292C] hover:border-[#B6E388]/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      index % 3 === 1 ? 'text-[#0D1B1E]/60' : 'text-[#B6E388]'
                    }`}
                  >
                    {project.category}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center group-hover:bg-white/10 transition-colors ${
                      index % 3 === 1 ? 'border-[#0D1B1E]/20 text-[#0D1B1E]' : 'border-white/10 text-white'
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <h3
                  className={`text-2xl font-bold leading-snug mt-auto ${
                    index % 3 === 1 ? 'text-[#0D1B1E]' : 'text-white'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    index % 3 === 1 ? 'text-[#0D1B1E]/65' : 'text-white/50'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        index % 3 === 1
                          ? 'bg-[#0D1B1E]/10 text-[#0D1B1E]'
                          : 'bg-white/5 text-white/60'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
