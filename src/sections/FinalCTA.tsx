import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const WHATSAPP_LINK = 'https://wa.me/5512981498914?text=Ol%C3%A1!%20Vim%20pela%20landing%20page%20da%20Nitron%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20a%20solu%C3%A7%C3%A3o.';
const CHECKOUT_LINK = 'https://app.bolten.io/enrollment/new?product=a1882684-bdbc-4402-9d6d-29064174beb7';

export default function FinalCTA() {
  return (
    <section id="checkout" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-nitron-red/[0.035] rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-nitron-red/[0.025] rounded-full blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="glass rounded-[2rem] p-10 sm:p-14 lg:p-20 text-center glow-red">
            <span className="section-label mb-5 block">Comece Agora</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-5 leading-tight">
              Seu próximo paciente pode estar esperando uma resposta agora.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Enquanto você lê esta página, alguém pode estar procurando exatamente o serviço que sua clínica oferece. Não perca oportunidades por demora no atendimento.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full text-white font-semibold text-[15px] animate-breathe"
              >
                <Rocket size={17} />
                Quero começar agora
              </motion.a>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full text-white font-semibold text-[15px] transition-all duration-400"
                style={{ background: 'transparent', border: '1px solid rgba(255,26,26,0.4)' }}
              >
                Quero tirar minhas dúvidas
              </motion.a>
            </div>
            <p className="text-gray-700 text-[12px] mt-7">
              Sem compromisso. Conversa rápida pelo WhatsApp.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
