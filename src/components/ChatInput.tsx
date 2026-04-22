import { SendHorizonal } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
      if (textareaRef.current) {
        textareaRef.current.style.height = '48px';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    if (e.target.value === '') e.target.style.height = '48px';
  };

  return (
    <footer className="p-4 md:p-6 bg-slate-900/50 border-t border-cyan-900/30 backdrop-blur-sm z-10 w-full relative h-[100px] flex items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto flex gap-4 w-full h-full justify-center items-center"
      >
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className="w-full bg-[#0d1b1e] border border-cyan-800/50 rounded-xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-slate-500 font-sans min-h-[52px] max-h-[120px] disabled:opacity-50 resize-none overflow-hidden block"
            placeholder="Envía una propuesta de diseño ecosocial..."
          />
        </div>
        <button
          type="submit"
          disabled={!input.trim() || disabled}
          className="bg-cyan-500 text-slate-950 font-bold px-6 md:px-8 rounded-xl glow-cyan flex items-center justify-center hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:shadow-none h-14"
          aria-label="Enviar mensaje"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </footer>
  );
}
