import { motion } from 'framer-motion';
import { Check, Rocket, Play } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/5512981498914?text=Ol%C3%A1!%20Vim%20pela%20landing%20da%20Nitron%20e%20quero%20uma%20demonstra%C3%A7%C3%A3o.';

function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      <div className="absolute -inset-20 bg-nitron-red/[0.025] rounded-full blur-[100px] animate-pulse-glow" />
      <div className="relative w-[260px] sm:w-[300px] mx-auto">
        <div className="bg-[#111B21] rounded-[2.4rem] p-2.5 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.8)] border border-white/[0.04]">
          <div className="bg-[#0B141A] rounded-[1.9rem] overflow-hidden">
            <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nitron-red/25 to-nitron-red/5 flex items-center justify-center">
                <span className="text-nitron-red text-[10px] font-bold">N</span>
              </div>
              <div>
                <p className="text-white text-[11px] font-semibold">Nitron Assistente</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <p className="text-[#8696A0] text-[9px]">online</p>
                </div>
              </div>
            </div>
            <div className="px-3.5 py-4 space-y-2 min-h-[240px]">
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                  <p className="text-[#E9EDEF] text-[10px] leading-relaxed">Olá! Gostaria de agendar uma avaliação.</p>
                  <p className="text-[#8696A0] text-[8px] mt-1 text-right">10:02</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#005C4B] rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                  <p className="text-[#E9EDEF] text-[10px] leading-relaxed">Olá! 😊 Claro.</p>
                  <p className="text-[#8696A0] text-[8px] mt-1 text-right">10:02</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#005C4B] rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                  <p className="text-[#E9EDEF] text-[10px] leading-relaxed">Temos horários amanhã às 14h e às 16h. Qual prefere?</p>
                  <p className="text-[#8696A0] text-[8px] mt-1 text-right">10:02</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                  <p className="text-[#E9EDEF] text-[10px] leading-relaxed">Amanhã às 14h está ótimo</p>
                  <p className="text-[#8696A0] text-[8px] mt-1 text-right">10:03</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#005C4B] rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                  <p className="text-[#E9EDEF] text-[10px] leading-relaxed">Perfeito! Agendado. Até amanhã! ✨</p>
                  <p className="text-[#8696A0] text-[8px] mt-1 text-right">10:03</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1F2C34] px-3.5 py-2 flex items-center gap-2">
              <div className="flex-1 bg-[#2A3942] rounded-full px-3 py-1">
                <p className="text-[#8696A0] text-[9px]">Digite uma mensagem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <img
          src="/nitron_logo.png"
          alt=""
          className="w-[70vw] max-w-[900px] opacity-[0.015]"
          style={{ filter: 'blur(14px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <motion.img
                src="/nitron_logo.png"
                alt="Nitron AI"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-[0_0_40px_rgba(255,26,26,0.35)]"
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03, filter: 'drop-shadow(0 0 60px rgba(255,26,26,0.6))' }}
                style={{ imageRendering: 'auto' }}
              />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight mb-6" style={{ color: '#ff1a1a' }}>
              Pare de perder pacientes por demora no WhatsApp.
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-[1.7] mb-10 max-w-lg">
              A Nitron AI responde seus pacientes automaticamente, agenda consultas e funciona 24 horas por dia para que sua clínica nunca perca oportunidades.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-white font-semibold text-[14px] animate-breathe"
              >
                <Rocket size={16} />
                Quero automatizar meu atendimento
              </motion.a>
              <a
                href="#demo"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-white font-semibold text-[14px]"
              >
                <Play size={16} fill="currentColor" />
                Ver demonstração
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {[
                'Atendimento imediato',
                'IA treinada para clínicas',
                'Configuração em até 48 horas',
                'Atendimento 24 horas',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 rounded-full bg-nitron-red/10 flex items-center justify-center">
                    <Check size={10} className="text-nitron-red" strokeWidth={3} />
                  </div>
                  <span className="text-gray-600 text-[13px]">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
