import { motion } from 'motion/react';

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-start"
    >
      <div className="flex items-center gap-2 mb-1 ml-1">
          <span className="text-[10px] font-tech text-cyan-500">Analizando impacto temporal...</span>
      </div>
      <div className="bg-[#064e3b]/50 py-3 px-6 rounded-full border border-emerald-500/20 flex gap-2 w-[72px]">
        <motion.div
          className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0 }}
        />
        <motion.div
          className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
        />
      </div>
    </motion.div>
  );
}
