import { motion } from 'framer-motion';

/**
 * Reusable page-banner block for inner pages.
 * Supports light and dark modes to match the design flow.
 * Now includes a mandatory background image (requested).
 */
export default function PageBanner({ 
  badge, 
  title, 
  accentTitle, 
  description, 
  backgroundImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
  light = false // Banners usually look better dark with background images
}) {
  return (
    <section className={`relative pt-44 pb-32 overflow-hidden bg-[#0D1B1E]`}>
      
      {/* Background image overlay */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B1E] via-[#0D1B1E]/60 to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 bg-[#B6E388]/10 text-[#B6E388] border border-[#B6E388]/20"
          >
            {badge}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] text-white"
        >
          {title}
          {accentTitle && (
            <>
              <br />
              <span className="text-[#B6F09C]">{accentTitle}</span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="max-w-2xl mx-auto text-lg md:text-2xl font-medium mt-10 leading-relaxed text-white/60"
          >
            {description}
          </motion.p>
        )}
      </div>
      
      {/* Decorative line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-white/5"
      />
    </section>
  );
}
