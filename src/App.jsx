import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Labs from './components/Labs';
import Certifications from './components/Certifications';
import NetworkThinking from './components/NetworkThinking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import { navItems } from './data/portfolio';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (offset >= top && offset < bottom) {
            setActiveSection(item.id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      return nextTheme;
    });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100">
      <Navbar activeSection={activeSection} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Labs />
        <Certifications />
        <NetworkThinking />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
