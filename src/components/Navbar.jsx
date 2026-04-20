import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Layers } from 'lucide-react';
import { navItems } from '../data/portfolio';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl"
    >
      <div className="container-custom flex items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-100"
        >
          <Layers className="h-5 w-5 text-accent-500" />
          Nayeem Islam
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id ? 'text-accent-500' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 transition-colors duration-300 hover:border-accent-500 hover:text-accent-500 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id ? 'text-accent-500' : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
