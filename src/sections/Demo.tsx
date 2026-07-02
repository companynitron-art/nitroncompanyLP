import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';

const messages = [
  { sender: 'patient', text: 'Olá! Gostaria de marcar uma avaliação.', time: '09:41' },
  { sender: 'ai', text: 'Olá! Será um prazer ajudar.\n\nQual procedimento você deseja realizar?', time: '09:41' },
  { sender: 'patient', text: 'Botox.', time: '09:42' },
  { sender: 'ai', text: 'Perfeito!\n\nTemos horários disponíveis amanhã às 14h ou quinta-feira às 10h.\n\nQual prefere?', time: '09:42' },
  { sender: 'patient', text: 'Amanhã.', time: '09:43' },
  { sender: 'ai', text: 'Ótimo!\n\nSua solicitação foi registrada. Nossa equipe confirmará seu agendamento em instantes.', time: '09:43' },
];

export default function Demo() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,26,26,0.04)_0%,_transparent_60%)]" />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-nitron-red text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Demonstração
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 leading-tight">
              Veja como a Nitron conversa com seus pacientes
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Uma conversa natural, profissional e que converte. Assim como um atendente experiente.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-b from-nitron-red/[0.06] to-transparent rounded-[2.5rem] blur-2xl" />
            <div className="relative bg-[#111B21] rounded-[2rem] border border-white/[0.06] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="bg-[#1F2C34] px-5 py-4 flex items-center gap-3 border-b border-white/[0.04]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nitron-red/30 to-nitron-red/10 flex items-center justify-center">
                  <span className="text-nitron-red text-sm font-bold">N</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Nitron Assistente</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <p className="text-[#8696A0] text-xs">online</p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-6 space-y-3 bg-[#0B141A] min-h-[380px]">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`flex ${msg.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                        msg.sender === 'patient'
                          ? 'bg-[#005C4B] rounded-tr-sm'
                          : 'bg-[#1F2C34] rounded-tl-sm'
                      }`}
                    >
                      <p className="text-[#E9EDEF] text-[13px] leading-relaxed whitespace-pre-line">
                        {msg.text}
                      </p>
                      <p className={`text-[10px] mt-1.5 ${msg.sender === 'patient' ? 'text-[#8696A0] text-right' : 'text-[#8696A0]'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3 border-t border-white/[0.04]">
                <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2">
                  <p className="text-[#8696A0] text-xs">Digite uma mensagem</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nitron-red/30 to-nitron-red/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-nitron-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
