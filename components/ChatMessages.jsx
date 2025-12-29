"use client";
import { useEffect, useRef } from "react";
import ChatBubble from "@/components/ChatBubble";
import QuickReplies from "@/components/QuickReplies";

export default function ChatMessages({
  messages,
  quickReplies,
  onQuickReply,
  loading,
}) {
  const bottomRef = useRef(null);

  // 🔽 AUTO SCROLL KE PESAN TERAKHIR
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((msg, idx) => (
        <ChatBubble
          key={idx}
          text={msg.text}
          from={msg.from}
        />
      ))}

      {loading && (
        <ChatBubble text="Mengetik..." from="bot" />
      )}

      <QuickReplies
        options={quickReplies}
        onSelect={onQuickReply}
      />

      {/* Anchor untuk auto scroll */}
      <div ref={bottomRef} />
    </div>
  );
}
