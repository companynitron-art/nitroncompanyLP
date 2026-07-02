import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const testimonials = [
  {
    name: 'Dra. Ana Silva',
    role: 'Clínica Beleza Real',
    text: 'A Nitron AI transformou nosso atendimento. Antes perdíamos pacientes por não responder a tempo. Agora tudo é automático e nossos agendamentos aumentaram 40%.',
    rating: 5,
  },
  {
    name: 'Dr. Carlos Mendes',
    role: 'Estética Premium',
    text: 'Implementação rápida e resultados imediatos. A IA entende perfeitamente o que nossos pacientes precisam e agenda consultas sem nossa intervenção.',
    rating: 5,
  },
  {
    name: 'Dra. Fernanda Lima',
    role: 'Clínica Renova',
    text: 'Nossa equipe finalmente pode focar no atendimento presencial. A Nitron cuida do WhatsApp 24 horas por dia com uma qualidade impressionante.',
    rating: 5,
  },
];

const logos = ['Clínica Beleza Real', 'Estética Premium', 'Renova', 'DermaCare', 'Beleza Total'];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 sm:py-36 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-nitron-red/[0.012] rounded-full blur-[150px]" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Prova Social</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
              O que dizem quem já usa
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Clínicas de estética que confiam na Nitron AI para atender seus pacientes.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {testimonials.map((t, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="glass glass-hover rounded-2xl p-8 h-full flex flex-col"
              >
                <div className="w-8 h-8 rounded-lg bg-nitron-red/8 flex items-center justify-center mb-5">
                  <Quote size={14} className="text-nitron-red" />
                </div>
                <p className="text-gray-400 text-[14px] leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={12} className="text-nitron-red fill-nitron-red" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-nitron-red/12 to-nitron-red/3 flex items-center justify-center">
                    <span className="text-nitron-red text-xs font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white text-[13px] font-medium">{t.name}</p>
                    <p className="text-gray-700 text-[11px]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="text-center mb-8">
            <p className="text-gray-700 text-[11px] tracking-[0.15em] uppercase">Confiado por clínicas de estética</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {logos.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="text-gray-700 text-[13px] font-medium tracking-wide hover:text-gray-500 transition-colors cursor-default"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
