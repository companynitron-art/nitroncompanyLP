import { motion } from 'framer-motion';
import { Zap, Calendar, Moon, TrendingUp } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const items = [
  {
    icon: Zap,
    title: 'Responde em segundos',
    description: 'Nenhum paciente espera mais que alguns segundos por uma resposta. A IA está sempre pronta.',
  },
  {
    icon: Calendar,
    title: 'Agenda consultas automaticamente',
    description: 'A conversa se transforma em agendamento real, sem que sua equipe precise fazer nada.',
  },
  {
    icon: Moon,
    title: 'Atende mesmo fora do horário comercial',
    description: 'Madrugada, feriado, final de semana. Seus pacientes são atendidos a qualquer hora.',
  },
  {
    icon: TrendingUp,
    title: 'Nenhum paciente fica sem resposta',
    description: 'Toda mensagem é respondida. Toda oportunidade é aproveitada. Zero perdas.',
  },
];

export default function WhyAI() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nitron-red/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-nitron-red text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Conversão
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 leading-tight">
              Por que a IA aumenta seus agendamentos?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Velocidade e disponibilidade são os fatores que mais influenciam na decisão do paciente.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                className="group h-full card-surface rounded-2xl p-7 hover:card-surface-hover transition-all duration-700 hover:shadow-[0_8px_40px_-12px_rgba(255,26,26,0.12)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nitron-red/15 to-nitron-red/5 flex items-center justify-center mb-5 group-hover:from-nitron-red/25 group-hover:to-nitron-red/10 transition-all duration-500">
                  <item.icon size={20} className="text-nitron-red" strokeWidth={1.5} />
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
