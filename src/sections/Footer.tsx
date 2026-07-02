export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img
              src="/nitron_logo.png"
              alt="Nitron AI"
              className="w-7 h-7 object-contain drop-shadow-[0_0_10px_rgba(255,26,26,0.3)]"
            />
            <span className="text-white font-semibold text-[13px]">Nitron AI</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700 text-[12px] hover:text-gray-500 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-700 text-[12px] hover:text-gray-500 transition-colors">
              Termos de Uso
            </a>
            <a
              href="https://wa.me/5512981498914"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 text-[12px] hover:text-gray-500 transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/[0.02] text-center">
          <p className="text-gray-800 text-[11px]">
            © {new Date().getFullYear()} Nitron AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
