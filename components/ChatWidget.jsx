"use client";
import { useState } from "react";
import axios from "axios";

import ChatHeader from "@/components/ChatHeader";
import ChatMessages from "@/components/ChatMessages";
import ChatInput from "@/components/ChatInput";

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Halo 👋 Saya chatbot informasi kesehatan.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const quickReplies = [
    "Apa itu flu?",
    "Gejala demam",
    "Cara mencegah penyakit",
  ];

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    setMessages((prev) => [...prev, { from: "user", text }]);
    setLoading(true);

    try {
      const { data } = await axios.post("/api/chat", {
        message: text,
      });

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Terjadi kesalahan server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
    className="
        fixed bottom-6 right-6
        w-[380px] h-[560px]
        bg-white shadow-2xl rounded-2xl
        flex flex-col
        max-md:bottom-0 max-md:right-0
        max-md:w-full max-md:h-full
        max-md:rounded-none
    "
    >
      <ChatHeader />

      <ChatMessages
        messages={messages}
        quickReplies={quickReplies}
        onQuickReply={sendMessage}
        loading={loading}
      />

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={() => sendMessage(input)}
      />
    </div>
  );
}
