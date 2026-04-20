import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={toggleTheme}
    className="fixed right-6 top-24 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/90 text-slate-100 shadow-lg shadow-slate-950/40 transition-colors duration-300 hover:border-accent-500 hover:text-accent-400"
    aria-label="Toggle theme"
  >
    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
  </motion.button>
);

export default ThemeToggle;
