import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const without = [
  'Pacientes esperando',
  'Atendimento manual',
  'Horário limitado',
  'Clientes desistindo',
  'Equipe sobrecarregada',
];

const withNitron = [
  'Resposta imediata',
  'Atendimento automático',
  'IA disponível 24 horas',
  'Mais agendamentos',
  'Mais eficiência',
];

export default function Comparison() {
  return (
    <section className="py-28 sm:py-36 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-nitron-red/[0.012] rounded-full blur-[150px]" />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Comparação</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
              A diferença é clara
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Veja o que muda quando você adota a Nitron AI no seu atendimento.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-5">
          <SectionReveal delay={0}>
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-white/[0.03] flex items-center justify-center">
                  <X size={14} className="text-gray-600" strokeWidth={2.5} />
                </div>
                <h3 className="text-gray-500 font-semibold text-[15px]">Sem Nitron</h3>
              </div>
              <div className="space-y-5">
                {without.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500/8 flex items-center justify-center shrink-0">
                      <X size={10} className="text-red-500/50" strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 text-[14px]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="glass rounded-2xl p-8 h-full" style={{ border: '1px solid rgba(255,26,26,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-nitron-red/10 flex items-center justify-center">
                  <Check size={14} className="text-nitron-red" strokeWidth={2.5} />
                </div>
                <h3 className="text-white font-semibold text-[15px]">Com Nitron AI</h3>
              </div>
              <div className="space-y-5">
                {withNitron.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-nitron-red/10 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-nitron-red" strokeWidth={3} />
                    </div>
                    <span className="text-gray-400 text-[14px]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
