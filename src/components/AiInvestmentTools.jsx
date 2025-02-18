
import React, { useState } from "react";
import { motion } from "framer-motion";

const AiInvestmentTools = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Hello! How can I assist you with FinSight's investment tools?" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-200 text-white font-sans">
      {/* FinSight Animated Header */}
      <motion.div
        className="text-4xl font-bold text-green-600 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        FinSight...
      </motion.div>
      {/* Chat Box */}
      <div className="bg-green-400 rounded-lg w-full max-w-lg p-6 shadow-lg flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`p-3 rounded-lg max-w-[70%] ${
                message.sender === "user"
                  ? "bg-green-200 self-end text-green-900"
                  : "bg-green-200 self-start text-green-900"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              {message.text}
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Message FinSight..."
            className="flex-1 p-2 rounded-lg bg-green-800 text-white placeholder-white outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-green-800 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiInvestmentTools;
