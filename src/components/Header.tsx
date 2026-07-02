import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/5512981498914?text=Ol%C3%A1!%20Vim%20pela%20landing%20page%20da%20Nitron%20AI%20e%20quero%20conhecer%20a%20plataforma.';

const navLinks = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-2xl border-b border-white/[0.03]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-[64px]">
          <a href="#" className="flex items-center gap-2.5 group">
            <motion.img
              src="/nitron_logo.png"
              alt="Nitron AI"
              className="w-9 h-9 object-contain drop-shadow-[0_0_16px_rgba(255,26,26,0.35)]"
              whileHover={{ scale: 1.03, filter: 'drop-shadow(0 0 24px rgba(255,26,26,0.55))' }}
              transition={{ duration: 0.3 }}
              style={{ imageRendering: 'auto' }}
            />
            <span className="text-white font-semibold text-[15px] tracking-tight">Nitron AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[13px] text-gray-500 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-[13px] font-semibold"
            >
              Começar Agora
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/[0.04] transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/[0.03] overflow-hidden"
          >
            <div className="px-5 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/[0.03] transition-all rounded-xl text-[15px]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 rounded-full btn-primary text-white font-semibold text-[14px] mt-4"
              >
                Começar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
