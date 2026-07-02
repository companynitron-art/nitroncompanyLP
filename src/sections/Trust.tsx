import { motion } from 'framer-motion';
import { Award, Sparkles, Timer, Shield } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const items = [
  {
    icon: Award,
    title: 'Atendimento profissional',
    description: 'Cada interação reflete o padrão de qualidade que seus pacientes esperam da sua clínica.',
  },
  {
    icon: Sparkles,
    title: 'Experiência moderna para seus pacientes',
    description: 'Seus pacientes sentem a diferença de um atendimento instantâneo e bem-humorado.',
  },
  {
    icon: Timer,
    title: 'Implantação rápida',
    description: 'Sem semanas de espera. Em poucos dias tudo está funcionando e convertendo.',
  },
  {
    icon: Shield,
    title: 'Tecnologia confiável',
    description: 'Infraestrutura robusta com uptime garantido. Seu atendimento nunca para.',
  },
];

export default function Trust() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nitron-red/[0.015] to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-nitron-red text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Confiança
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 leading-tight">
              Tecnologia criada para clínicas que querem crescer
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Construímos a Nitron pensando nos desafios reais do dia a dia de clínicas de estética.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                className="group h-full card-surface rounded-2xl p-7 hover:card-surface-hover transition-all duration-700 hover:shadow-[0_8px_40px_-12px_rgba(255,26,26,0.1)]"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-nitron-red/15 to-nitron-red/5 flex items-center justify-center mb-5 group-hover:from-nitron-red/25 group-hover:to-nitron-red/10 transition-all duration-500">
                  <item.icon size={19} className="text-nitron-red" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2.5">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-[1.7]">{item.description}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
