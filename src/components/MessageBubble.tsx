import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { ChatMessage } from '@/services/geminiService';

interface MessageBubbleProps {
  message: ChatMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isBot = message.role === 'model';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'flex flex-col max-w-2xl w-full',
        !isBot ? 'items-end ml-auto' : 'items-start'
      )}
    >
      <div className={cn("flex items-center gap-2 mb-1", isBot ? 'ml-1' : 'mr-1')}>
        <span className={cn(
          "text-[10px] font-tech",
          isBot ? 'text-cyan-500' : 'text-slate-500'
        )}>
          {isBot ? 'Eco-Arqueólogo [Origen: Nueva Amazonia]' : 'Arquitecto [Línea temporal local]'}
        </span>
      </div>
      <div
        className={cn(
          'p-5 text-sm leading-relaxed message-shadow',
          isBot
            ? 'bg-[#064e3b] rounded-2xl rounded-tl-none border border-emerald-500/30'
            : 'bg-[#1e3a8a] rounded-2xl rounded-tr-none border border-blue-500/30'
        )}
      >
        <div className="prose prose-invert prose-sm md:prose-base max-w-none text-slate-200 prose-p:leading-relaxed prose-pre:bg-slate-900 prose-pre:border-l-4 prose-pre:border-cyan-500">
          <Markdown>{message.content}</Markdown>
        </div>
      </div>
    </motion.div>
  );
}
