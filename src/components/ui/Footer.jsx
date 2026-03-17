import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { contactContent } from '../../data/content';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Clients', to: '/clients' },
  { label: 'Career', to: '/career' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1518] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="w-8 h-8 rounded-lg bg-[#B6E388] flex items-center justify-center">
                <span className="text-[#0D1B1E] font-black text-sm">GL</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Growth<span className="text-[#B6E388]">Loop</span>
              </span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              A software company based in Kathmandu, Nepal, delivering high-quality software solutions that
              drive innovation and empower businesses worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#B6E388] hover:border-[#B6E388]/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-xs font-semibold mb-4 uppercase tracking-widest">Navigation</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/45 hover:text-[#B6E388] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-xs font-semibold mb-4 uppercase tracking-widest">Contact</p>
            <ul className="flex flex-col gap-3">
              {[
                { icon: MapPin, value: contactContent.address },
                { icon: Phone, value: contactContent.phone },
                { icon: Mail, value: contactContent.email },
              ].map(({ icon: Icon, value }) => (
                <li key={value} className="flex items-start gap-2 text-white/45 text-sm">
                  <Icon size={14} className="mt-0.5 text-[#B6E388] flex-shrink-0" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">
            © {year} Growth Loop Technologies. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with ❤️ in Kathmandu, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
