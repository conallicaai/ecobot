import { useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { ChatInput } from '@/components/ChatInput';
import { MessageBubble } from '@/components/MessageBubble';
import { TypingIndicator } from '@/components/TypingIndicator';
import { useChat } from '@/hooks/useChat';
import { AlertTriangle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const { messages, isTyping, error, sendMessage, dismissError } = useChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  return (
    <div className="bg-pattern h-screen flex overflow-hidden text-slate-200">
      
      {/* Sidebar: Control de Misión */}
      <aside className="hidden lg:flex w-72 glass-panel border-r border-cyan-900/50 flex-col p-6 h-full">
          <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-tech uppercase tracking-[0.2em] text-cyan-400">Enlace Temporal</span>
              </div>
              <h2 className="text-xs font-tech text-slate-500 uppercase">Arquitecto ID</h2>
              <p className="text-sm font-semibold text-white tracking-tight">STR-4-GENESIS-21</p>
          </div>

          <div className="space-y-6">
              <div>
                  <h3 className="text-[10px] font-tech text-slate-500 uppercase mb-3">Misión ODS Activa</h3>
                  <div className="p-3 bg-emerald-900/30 border border-emerald-500/30 rounded-lg">
                      <p className="text-xs text-emerald-400 font-bold mb-1">ODS 12: Producción Responsable</p>
                      <p className="text-[11px] text-emerald-100/70 leading-relaxed">Rediseño de circuitos modulares para evitar el desperdicio de tierras raras.</p>
                  </div>
              </div>

              <div>
                  <h3 className="text-[10px] font-tech text-slate-500 uppercase mb-3">Estado de la Línea Temporal</h3>
                  <div className="space-y-2">
                      <div className="flex justify-between text-[11px]">
                          <span>Estabilidad</span>
                          <span className="text-cyan-400">94.2%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-cyan-500 h-full rounded-full" style={{ width: '94%' }}></div>
                      </div>
                  </div>
              </div>

              <div className="mt-auto">
                  <div className="p-4 rounded-xl border border-dashed border-cyan-800/50 text-center">
                      <p className="text-[10px] font-tech text-cyan-400/80 mb-2 italic">"Tu código de hoy es mi historia de mañana"</p>
                  </div>
              </div>
          </div>
      </aside>

      <main className="flex-1 flex flex-col relative min-w-0">
        <Header />

        <section
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth pb-32"
        >
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator key="typing" />}
          </AnimatePresence>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/50 border border-red-500 rounded-xl p-4 flex gap-3 items-start max-w-2xl shadow-md message-shadow ml-auto mr-auto"
            >
              <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
              <div className="flex-1">
                <h4 className="text-red-400 font-tech font-bold text-sm mb-1">Anomalía en la red</h4>
                <p className="text-sm text-red-200 leading-relaxed">{error}</p>
              </div>
              <button onClick={dismissError} className="text-red-400 hover:text-red-300">
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </section>

        <div className="absolute bottom-0 w-full">
          <ChatInput onSend={sendMessage} disabled={isTyping} />
        </div>
      </main>
    </div>
  );
}
