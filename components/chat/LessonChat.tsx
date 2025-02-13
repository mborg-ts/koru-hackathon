"use client";

import { useState, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { getQuestionsAndResponses } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export function LessonChat({ topicTitle }: { topicTitle: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Clear messages when topic changes
  useEffect(() => {
    setMessages([]);
    setInput("");
  }, [topicTitle]);

  const { suggestedQuestions, sampleResponses } =
    getQuestionsAndResponses(topicTitle);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: input,
      role: "user" as const,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Improved response matching
    setTimeout(() => {
      const response =
        Object.entries(sampleResponses).find(([key]) =>
          input.toLowerCase().includes(key.toLowerCase())
        )?.[1] || sampleResponses.default;

      const botMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant" as const,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[400px] bg-white rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <h3 className="font-semibold">Lesson Assistant</h3>
        <p className="text-sm text-gray-500">Ask questions about the lesson</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Suggested questions:</p>
            {suggestedQuestions.map((question, index) => (
              <span
                key={index}
                onClick={() => setInput(question)}
                className="block text-sm text-purple-600 hover:text-purple-700"
              >
                {question}
              </span>
            ))}
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
              }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${message.role === "user"
                ? "bg-purple-600 text-white"
                : "bg-gray-100"
                }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
