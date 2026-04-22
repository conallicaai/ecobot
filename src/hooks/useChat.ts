import { useState } from 'react';
import { ChatMessage, streamMessageToGemini } from '@/services/geminiService';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      content: 'Saludos, Arquitectos de la Gran Transición. He logrado estabilizar la señal cuántica para comunicarme con el siglo XXI. Estoy aquí para ayudaros a diseñar las tecnologías que salvarán nuestro hogar común. ¿Qué proyecto ecosocial vamos a construir hoy?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);
    setError(null);

    const botMessageId = (Date.now() + 1).toString();
    
    // Add empty message placeholder that we will update
    setMessages(prev => [
      ...prev,
      { id: botMessageId, role: 'model', content: '' }
    ]);
    
    try {
      const stream = streamMessageToGemini(messages, text);
      setIsTyping(false); // Stop typing indicator since we started streaming

      for await (const chunkText of stream) {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === botMessageId 
              ? { ...msg, content: msg.content + chunkText } 
              : msg
          )
        );
      }
    } catch (err: any) {
      console.error(err);
      setError('Interferencia cuántica detectada: La conexión temporal se ha perdido temporalmente. ¿Podrías reiterar tus planos de diseño?');
      setIsTyping(false);
      // Remove empty message if it failed before starting
      setMessages(prev => {
        const lastMsg = prev[prev.length - 1];
        if (lastMsg.id === botMessageId && lastMsg.content === '') {
          return prev.slice(0, -1);
        }
        return prev;
      });
    }
  };

  const dismissError = () => setError(null);

  return {
    messages,
    isTyping,
    error,
    sendMessage,
    dismissError
  };
}
