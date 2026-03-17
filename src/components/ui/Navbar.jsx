import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Clients', to: '/clients' },
  { label: 'Career', to: '/career' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // All our page banners (Home hero and inner PageBanner) are dark now.
  const shouldBeLightNav = !scrolled;
  const textColorClass = shouldBeLightNav ? 'text-white' : 'text-[#0D1B1E]';
  const logoColorClass = shouldBeLightNav ? 'text-white' : 'text-[#0D1B1E]';
  const buttonBgClass = shouldBeLightNav ? 'bg-white text-[#0D1B1E]' : 'bg-[#0D1B1E] text-white';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-[#0D1B1E]/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300 ${
              shouldBeLightNav ? 'bg-[#B6E388] shadow-[#B6E388]/20' : 'bg-[#0D1B1E] shadow-[#0D1B1E]/10'
            }`}
          >
            <span className={`font-black text-sm transition-colors duration-300 ${shouldBeLightNav ? 'text-[#0D1B1E]' : 'text-[#B6E388]'}`}>GL</span>
          </motion.div>
          <span className={`font-black text-xl tracking-tighter transition-colors duration-300 ${logoColorClass}`}>
            Growth<span className="opacity-40">Loop</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-5 py-2 text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? logoColorClass
                    : `${shouldBeLightNav ? 'text-white/40 hover:text-white' : 'text-[#0D1B1E]/40 hover:text-[#0D1B1E]'}`
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full -z-10 border transition-colors duration-300 ${
                        shouldBeLightNav 
                          ? 'border-white/10 bg-white/5' 
                          : 'border-[#0D1B1E]/5 bg-[#0D1B1E]/10'
                      }`}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/contact"
            className={`px-6 py-3 rounded-full font-black text-sm hover:scale-105 transition-all duration-300 shadow-xl ${buttonBgClass}`}
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#0D1B1E] border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <nav className="px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block px-6 py-4 rounded-2xl transition-all text-base font-bold ${
                        isActive
                          ? 'text-[#B6E388] bg-white/5'
                          : 'text-white/40 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pt-4">
                <NavLink
                  to="/contact"
                  className="block px-6 py-5 text-center rounded-2xl bg-white text-[#0D1B1E] font-black text-base shadow-xl"
                >
                  Get Started
                </NavLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
