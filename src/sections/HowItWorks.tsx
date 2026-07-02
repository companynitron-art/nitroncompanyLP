import { motion } from 'framer-motion';
import { Smartphone, Settings, Brain, TrendingUp } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const steps = [
  {
    icon: Smartphone,
    title: 'Conectamos seu WhatsApp',
    description: 'Integramos com seu número existente em minutos, sem complicação.',
  },
  {
    icon: Settings,
    title: 'Configuramos sua IA',
    description: 'Personalizamos o assistente para falar como sua clínica e conhecer seus serviços.',
  },
  {
    icon: Brain,
    title: 'Treinamos o atendimento',
    description: 'A IA aprende seus procedimentos, horários e o tom de voz da sua clínica.',
  },
  {
    icon: TrendingUp,
    title: 'Sua clínica atende automaticamente',
    description: 'A IA começa a responder, agendar e converter pacientes sem parar.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 sm:py-36 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-nitron-red/[0.012] rounded-full blur-[120px]" />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Como funciona</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
              Quatro passos para automatizar tudo
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              De configuração a resultados em poucos dias. Sem curva de aprendizado.
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-nitron-red/15 via-nitron-red/5 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex items-start gap-5 sm:gap-8"
                >
                  <div className="relative shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center z-10">
                    <step.icon size={20} className="text-nitron-red" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 pt-1 sm:pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-nitron-red text-[10px] font-semibold tracking-[0.15em]">
                        PASSO {i + 1}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="absolute left-6 sm:left-8 top-16 sm:top-20 text-nitron-red/15 hidden sm:block">
                      <svg width="12" height="32" viewBox="0 0 12 32" fill="none">
                        <path d="M6 0V28M6 28L1 23M6 28L11 23" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
