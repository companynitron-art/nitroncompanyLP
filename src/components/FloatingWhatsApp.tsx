import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/5512981498914?text=Ol%C3%A1!%20Vim%20pela%20landing%20page%20da%20Nitron%20AI%20e%20quero%20conhecer%20a%20plataforma.';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.45)] transition-shadow duration-500"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </motion.a>
  );
}
