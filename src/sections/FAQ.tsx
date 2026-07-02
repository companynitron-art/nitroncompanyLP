import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const faqs = [
  {
    question: 'A IA responde sozinha?',
    answer: 'Sim. A Nitron AI utiliza modelos avançados de linguagem para entender a intenção do cliente e responder de forma natural e contextual, sem intervenção humana.',
  },
  {
    question: 'Funciona com WhatsApp Business?',
    answer: 'Sim. Integramos diretamente com a API oficial do WhatsApp Business, garantindo estabilidade e conformidade com as políticas do Meta.',
  },
  {
    question: 'Preciso instalar algo?',
    answer: 'Não. Tudo funciona na nuvem. Você não precisa instalar nada no seu computador ou celular.',
  },
  {
    question: 'Quanto tempo leva para configurar?',
    answer: 'A implementação completa leva até 48 horas. Configuramos a IA, treinamos com seus dados e deixamos tudo pronto para começar a atender.',
  },
  {
    question: 'Existe contrato?',
    answer: 'Não. Nossos planos são flexíveis e você pode cancelar a qualquer momento, sem multas ou taxas de rescisão.',
  },
  {
    question: 'Posso personalizar as respostas?',
    answer: 'Sim. Treinamos a IA especificamente para sua clínica, com seu tom de voz, procedimentos e regras de agendamento.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 sm:py-36 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nitron-red/[0.012] rounded-full blur-[150px]" />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
              Perguntas frequentes
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Tudo que você precisa saber antes de começar.
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <SectionReveal key={i} delay={i * 0.05}>
              <div className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-white text-[14px] sm:text-[15px] font-medium">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={16} className="text-gray-600" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
