import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Check } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const features = [
  'Atendimento automático',
  'IA personalizada',
  'Respostas instantâneas',
  'Integração com WhatsApp',
  'Mais vendas',
];

export default function Video() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-28 sm:py-36 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-nitron-red/[0.02] rounded-full blur-[150px]" />
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Demonstração</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-4 leading-tight">
              Veja a Nitron AI funcionando na prática
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Em menos de dois minutos você entende como automatizar completamente seu atendimento.
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <SectionReveal className="lg:col-span-3">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.04] bg-[#0A0A0A] group">
              {!playing ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-black" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      onClick={() => setPlaying(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative w-20 h-20 rounded-full bg-gradient-to-br from-nitron-red to-red-700 flex items-center justify-center shadow-[0_0_60px_rgba(255,26,26,0.3)]"
                    >
                      <Play size={28} fill="white" className="text-white ml-1" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-6 left-6 text-gray-700 text-sm">
                    Clique para assistir a demonstração
                  </p>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]">
                  <p className="text-gray-700 text-sm">Vídeo em breve</p>
                </div>
              )}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="lg:col-span-2">
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-nitron-red/10 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-nitron-red" strokeWidth={3} />
                  </div>
                  <span className="text-gray-500 text-[14px]">{feature}</span>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
