import { motion } from 'framer-motion';
import { MessageSquareOff, Inbox, Users } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const problems = [
  {
    icon: MessageSquareOff,
    title: 'Pacientes desistem enquanto aguardam resposta.',
    description: 'Um potencial paciente envia mensagem e não recebe retorno. Em minutos, já procurou a concorrência.',
  },
  {
    icon: Inbox,
    title: 'Mensagens ficam esquecidas durante o dia.',
    description: 'Conversas se perdem entre dezenas de notificações. Oportunidades deixam de ser aproveitadas todos os dias.',
  },
  {
    icon: Users,
    title: 'Sua equipe perde tempo respondendo perguntas repetitivas.',
    description: 'Sua equipe divide atenção entre atender presencialmente e responder WhatsApp. Nenhum dos dois é feito bem.',
  },
];

export default function Problem() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,26,26,0.035)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-nitron-red text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              O Problema
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 leading-tight">
              Quanto dinheiro sua clínica perde todos os dias?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Cada mensagem sem resposta é um paciente que nunca volta. O custo é muito maior do que parece.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <SectionReveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                className="group h-full card-surface rounded-2xl p-8 hover:card-surface-hover transition-all duration-700 hover:shadow-[0_8px_40px_-12px_rgba(255,26,26,0.12)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nitron-red/15 to-nitron-red/5 flex items-center justify-center mb-6 group-hover:from-nitron-red/25 group-hover:to-nitron-red/10 transition-all duration-500">
                  <problem.icon size={22} className="text-nitron-red" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{problem.title}</h3>
                <p className="text-gray-400 text-sm leading-[1.7]">{problem.description}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
