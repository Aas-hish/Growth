import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Lightbulb, Users, Heart } from 'lucide-react';
import { careerContent } from '../data/content';
import { AnimatedSection, fadeUp, StaggerContainer, StaggerItem, FloatCard } from '../utils/animations';
import PageTransition from '../components/ui/PageTransition';
import PageBanner from '../components/ui/PageBanner';

export default function CareerPage() {
  const iconMap = {
    Users: <Users />,
    Lightbulb: <Lightbulb />,
    Heart: <Heart />
  };

  return (
    <PageTransition>
      <PageBanner 
        badge={careerContent.badge}
        title="Join Our"
        accentTitle="Evolution"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
        description={careerContent.description}
      />

      {/* Culture Section */}
      <section className="py-32 bg-[#F2F2EC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <AnimatedSection variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0D1B1E]/5 text-[#0D1B1E] text-[10px] font-black border border-[#0D1B1E]/10 mb-6 uppercase tracking-[0.2em]">
                {careerContent.culture.title}
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-[#0D1B1E] tracking-tighter leading-[0.9] mb-8">
                A culture built <br /> <span className="text-[#0D1B1E]/20">on empowerment.</span>
              </h2>
              <p className="text-[#0D1B1E]/60 text-xl font-medium leading-relaxed max-w-xl">
                {careerContent.culture.description}
              </p>
            </AnimatedSection>
            
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {careerContent.culture.values.map((v, i) => (
                <StaggerItem key={i}>
                  <FloatCard className="p-8 bg-white border border-[#0D1B1E]/5 rounded-[2rem] shadow-sm hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2F2EC] flex items-center justify-center text-[#0D1B1E] mb-6">
                      {iconMap[v.icon]}
                    </div>
                    <h3 className="text-[#0D1B1E] font-black text-xl mb-3">{v.title}</h3>
                    <p className="text-[#0D1B1E]/40 text-sm font-medium">{v.description}</p>
                  </FloatCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Openings Section */}
          <div>
            <AnimatedSection className="mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-[#0D1B1E] tracking-tighter">
                Current Openings
              </h2>
            </AnimatedSection>

            <StaggerContainer className="flex flex-col gap-4">
              {careerContent.openings.map((job) => (
                <StaggerItem key={job.id}>
                  <motion.div
                    whileHover={{ x: 10, backgroundColor: '#ffffff' }}
                    className="group p-8 rounded-[2rem] border border-[#0D1B1E]/5 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-2xl"
                  >
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#B6E388] bg-[#0D1B1E] px-3 py-1 rounded-full w-fit">
                        {job.department}
                      </span>
                      <h3 className="text-2xl font-black text-[#0D1B1E]">{job.title}</h3>
                      <div className="flex flex-wrap gap-6 mt-2">
                        <div className="flex items-center gap-2 text-[#0D1B1E]/40 font-bold text-sm">
                          <MapPin size={16} /> {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-[#0D1B1E]/40 font-bold text-sm">
                          <Clock size={16} /> {job.type}
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#0D1B1E] text-white font-black text-sm group-hover:bg-[#B6E388] group-hover:text-[#0D1B1E] transition-all">
                      Apply Now <ArrowRight size={18} />
                    </button>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#0D1B1E]">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 italic">
                Don't see a role for you?
              </h2>
              <p className="text-white/40 text-xl font-medium mb-12 max-w-2xl mx-auto">
                We're always looking for exceptional talent. Send your resume to our support team and we'll keep you in mind.
              </p>
              <a 
                href="mailto:support@growthloop.com"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#B6E388] text-[#0D1B1E] font-black text-lg hover:scale-105 transition-all shadow-2xl"
              >
                Send Your Resume
              </a>
           </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
