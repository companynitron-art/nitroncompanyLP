import { motion } from 'framer-motion';
import { Brain, Zap, Shield, TrendingUp, Smartphone, Building2 } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const items = [
  {
    icon: Brain,
    title: 'IA Inteligente',
    description: 'Modelos de linguagem avançados que entendem contexto e respondem como humanos.',
  },
  {
    icon: Zap,
    title: 'Respostas instantâneas',
    description: 'Nenhum paciente espera mais que alguns segundos por uma resposta.',
  },
  {
    icon: Shield,
    title: 'Seguro',
    description: 'Seus dados e conversas protegidos com criptografia e compliance.',
  },
  {
    icon: TrendingUp,
    title: 'Escalável',
    description: 'Atenda dezenas ou milhares de pacientes simultaneamente sem perder qualidade.',
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Oficial',
    description: 'Integração nativa com a API oficial do WhatsApp Business. Estável e confiável.',
  },
  {
    icon: Building2,
    title: 'Ideal para empresas',
    description: 'Construído para clínicas, consultórios e empresas que precisam de atendimento profissional.',
  },
];

export default function Differentials() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nitron-red/[0.02] rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Diferenciais</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Por que escolher a Nitron AI?
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tecnologia de ponta pensada para quem quer resultados reais.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="glass-card rounded-2xl p-8 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nitron-red/15 to-nitron-red/5 flex items-center justify-center mb-5">
                  <item.icon size={18} className="text-nitron-red" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
