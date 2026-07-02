import { motion } from 'framer-motion';
import { Check, Rocket, Play } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/5512981498914?text=Ol%C3%A1!%20Vim%20pela%20landing%20da%20Nitron%20e%20quero%20uma%20demonstra%C3%A7%C3%A3o.';

const INDICATORS = [
  'Atendimento imediato',
  'IA treinada para clínicas',
  'Configuração em até 48 horas',
  'Atendimento 24 horas',
];

const MESSAGES = [
  { from: 'patient', text: 'Olá! Gostaria de agendar uma avaliação.', time: '10:02' },
  { from: 'bot', text: 'Olá! 😊\nSerá um prazer ajudar.\nTemos horários amanhã às 14h ou às 16h.\nQual prefere?', time: '10:02' },
  { from: 'patient', text: '14h.', time: '10:03' },
  { from: 'bot', text: 'Perfeito!\nSeu atendimento foi agendado.', time: '10:03' },
];

function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      {/* Glow */}
      <div className="absolute -inset-24 bg-[#ff1a1a]/[0.04] rounded-full blur-[120px] animate-pulse-glow" />

      {/* Phone */}
      <div className="relative w-[280px] sm:w-[320px] mx-auto">
        <div className="bg-[#0a0a0a] rounded-[2.6rem] p-2.5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] border border-white/[0.06]">
          <div className="bg-[#0B141A] rounded-[2.1rem] overflow-hidden">
            {/* Notch */}
            <div className="relative flex justify-center pt-2 pb-1">
              <div className="w-20 h-5 bg-black rounded-full" />
            </div>

            {/* WhatsApp header */}
            <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#ff1a1a]/15 flex items-center justify-center border border-[#ff1a1a]/20">
                <span className="text-[#ff1a1a] text-[11px] font-bold">N</span>
              </div>
              <div>
                <p className="text-white text-[12px] font-semibold">Nitron AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <p className="text-[#8696A0] text-[9px]">online agora</p>
                </div>
              </div>
            </div>

            {/* Chat */}
            <div className="px-3.5 py-4 space-y-2.5 min-h-[280px] bg-[#0B141A]">
              {MESSAGES.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex ${msg.from === 'bot' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-xl px-3 py-2 max-w-[85%] ${
                      msg.from === 'bot'
                        ? 'bg-[#005C4B] rounded-tr-sm'
                        : 'bg-[#1F2C34] rounded-tl-sm'
                    }`}
                  >
                    <p className="text-[#E9EDEF] text-[10.5px] leading-[1.5] whitespace-pre-line">
                      {msg.text}
                    </p>
                    <p className="text-[#8696A0] text-[8px] mt-1 text-right">{msg.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input bar */}
            <div className="bg-[#1F2C34] px-3.5 py-2.5 flex items-center gap-2">
              <div className="flex-1 bg-[#2A3942] rounded-full px-3 py-1.5">
                <p className="text-[#8696A0] text-[9px]">Digite uma mensagem</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#ff1a1a] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
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
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)',
        }}
      />

      {/* Ambient red glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ff1a1a]/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff1a1a]/[0.025] rounded-full blur-[120px] pointer-events-none" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-10"
            >
              <motion.img
                src="/nitron_logo.png"
                alt="Nitron AI"
                className="w-20 h-20 object-contain drop-shadow-[0_0_40px_rgba(255,26,26,0.3)]"
                animate={{ scale: [1, 1.015, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03, filter: 'drop-shadow(0 0 60px rgba(255,26,26,0.5))' }}
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold leading-[1.02] tracking-tight mb-6"
              style={{ color: '#ff1a1a' }}
            >
              Pare de perder pacientes por demora no WhatsApp.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/70 text-base sm:text-lg leading-[1.6] mb-10 max-w-xl"
            >
              A Nitron AI responde automaticamente seus pacientes, agenda consultas e funciona 24 horas por dia para que sua clínica nunca perca oportunidades.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
            >
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-white font-semibold text-[14px]"
              >
                <Rocket size={16} />
                Quero automatizar meu atendimento
              </motion.a>
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-white font-semibold text-[14px] transition-all duration-400"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,26,26,0.4)',
                }}
              >
                <Play size={16} fill="currentColor" className="text-[#ff1a1a]" />
                Ver demonstração
              </motion.a>
            </motion.div>

            {/* Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-lg"
            >
              {INDICATORS.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,26,26,0.12)' }}>
                    <Check size={10} className="text-[#ff1a1a]" strokeWidth={3} />
                  </div>
                  <span className="text-gray-400 text-[13px]">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
