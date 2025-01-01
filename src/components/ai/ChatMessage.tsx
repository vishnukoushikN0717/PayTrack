import React from 'react';
import { Bot, User } from 'lucide-react';

type Props = {
  message: string;
  isBot: boolean;
};

export default function ChatMessage({ message, isBot }: Props) {
  return (
    <div className={`flex gap-3 ${isBot ? 'chat-gradient' : ''} p-4 rounded-lg fade-in`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transform transition-transform hover:scale-110 ${
        isBot ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600'
      }`}>
        {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      <div className="flex-1">
        <p className="text-gray-800 whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
}