import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';

const stats = [
  { value: '24h', label: 'Atendimento automático' },
  { value: '48h', label: 'Prazo de implantação' },
  { value: '100%', label: 'Automatizado' },
  { value: 'WhatsApp', label: 'Integrado' },
];

export default function Stats() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nitron-red/[0.008] to-transparent" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient mb-3">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-[13px] sm:text-[14px]">{stat.label}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
