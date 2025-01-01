import React, { useState } from 'react';
import ChatMessage from '../components/ai/ChatMessage';
import ChatInput from '../components/ai/ChatInput';
import { Bot } from 'lucide-react';
import "./FinanceAi.css";

const GEMINI_API_KEY = 'AIzaSyD0qJDWPhazLwYSoQbZigAfz-KlAVdOUcI';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m your financial assistant. Ask me about economics, market trends, or financial planning.',
    isBot: true,
  },
];

export default function FinanceAI() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  // Function to clean the text by removing asterisks
  const cleanResponseText = (text: string): string => {
    return text.replace(/\*\*/g, '');
  };

  const fetchGeminiResponse = async (query: string): Promise<string> => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: query
              }]
            }]
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error Response:', errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        // Clean the response text before returning
        return cleanResponseText(data.candidates[0].content.parts[0].text);
      }

      return 'I couldn\'t generate a proper response. Please try again.';

    } catch (error) {
      console.error('Error details:', error);
      return 'There was an error processing your request. Please try again later.';
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const botResponse = await fetchGeminiResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error while sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        isBot: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 finance-ai">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center gap-2">
          <Bot className="w-6 h-6 text-primary-600" />
          <h2 className="text-xl font-semibold">Financial Assistant</h2>
        </div>
        <div className="h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message.text} isBot={message.isBot} />
            ))}
            {isLoading && (
              <div className="text-center text-gray-500 text-sm">Assistant is thinking...</div>
            )}
          </div>
          <div className="p-4 border-t">
            <ChatInput onSend={handleSendMessage} disabled={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}