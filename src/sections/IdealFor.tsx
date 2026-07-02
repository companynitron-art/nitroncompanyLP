import { motion } from 'framer-motion';
import { Sparkles, Smile, Stethoscope, User, Activity, HeartPulse } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const clinics = [
  { icon: Sparkles, name: 'Clínica de Estética' },
  { icon: Smile, name: 'Odontologia' },
  { icon: Stethoscope, name: 'Dermatologia' },
  { icon: User, name: 'Harmonização Facial' },
  { icon: Activity, name: 'Fisioterapia' },
  { icon: HeartPulse, name: 'Clínicas Médicas' },
];

export default function IdealFor() {
  return (
    <section className="py-28 sm:py-36 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-nitron-red/[0.012] rounded-full blur-[150px]" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Para quem é</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-white mb-4 leading-tight max-w-2xl mx-auto">
              Ideal para clínicas que desejam crescer sem aumentar a equipe
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clinics.map((clinic, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="glass glass-hover rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nitron-red/10 to-nitron-red/3 flex items-center justify-center">
                  <clinic.icon size={18} className="text-nitron-red" strokeWidth={1.5} />
                </div>
                <span className="text-gray-400 text-[13px] font-medium leading-tight">{clinic.name}</span>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
