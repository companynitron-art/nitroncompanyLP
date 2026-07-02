import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SectionReveal from '../components/SectionReveal';

const metrics = [
  { value: 0, target: 100, suffix: '%', label: 'Resposta imediata' },
  { value: 0, target: 24, suffix: 'h', label: 'Atendimento por dia' },
  { value: 0, target: 48, suffix: 'h', label: 'Implantação máxima' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nitron-red/[0.015] to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-nitron-red text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Resultados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 leading-tight">
              Números que transformam seu atendimento
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Impacto real da automação inteligente no dia a dia da sua clínica.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, i) => (
            <SectionReveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                className="relative card-surface rounded-2xl p-10 text-center overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-nitron-red/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                    <AnimatedNumber target={metric.target} suffix={metric.suffix} />
                  </div>
                  <div className="w-8 h-px bg-nitron-red/30 mx-auto mb-4" />
                  <p className="text-gray-400 text-sm font-medium tracking-wide">{metric.label}</p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Menos tempo gasto respondendo mensagens',
              'Mais oportunidades atendidas',
              'Atendimento padronizado e profissional',
              'Zero pacientes perdidos por demora',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 bg-white/[0.02] border border-white/[0.04] rounded-xl px-5 py-4 hover:border-nitron-red/10 transition-colors duration-500"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-nitron-red shrink-0 shadow-[0_0_6px_rgba(255,26,26,0.5)]" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
