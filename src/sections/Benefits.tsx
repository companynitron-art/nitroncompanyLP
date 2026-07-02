import { motion } from 'framer-motion';
import { Moon, Zap, CalendarCheck, Users, Hand, Timer } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const benefits = [
  {
    icon: Moon,
    title: 'Atendimento 24 horas',
    description: 'Seus pacientes são atendidos a qualquer hora, mesmo enquanto você dorme.',
  },
  {
    icon: Zap,
    title: 'Respostas instantâneas',
    description: 'Nenhum paciente espera mais que alguns segundos por uma resposta.',
  },
  {
    icon: CalendarCheck,
    title: 'Agendamentos automáticos',
    description: 'A IA identifica a intenção e agenda consultas diretamente, sem intervenção.',
  },
  {
    icon: Users,
    title: 'Mais pacientes atendidos',
    description: 'Cada mensagem é respondida. Nenhuma oportunidade é perdida.',
  },
  {
    icon: Hand,
    title: 'Menos trabalho manual',
    description: 'Sua equipe deixa de perder tempo com mensagens repetitivas no WhatsApp.',
  },
  {
    icon: Timer,
    title: 'Implementação rápida',
    description: 'Do primeiro contato ao assistente ativo em até 48 horas. Sem equipe técnica.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-28 sm:py-36 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nitron-red/[0.012] rounded-full blur-[150px]" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Benefícios</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
              O que muda com a Nitron AI
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Cada benefício traduzido em mais pacientes e menos trabalho para sua clínica.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="glass glass-hover rounded-2xl p-8 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nitron-red/10 to-nitron-red/3 flex items-center justify-center mb-5">
                  <benefit.icon size={18} className="text-nitron-red" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed">{benefit.description}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
