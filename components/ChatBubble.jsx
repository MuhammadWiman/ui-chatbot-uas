"use client";
export default function ChatBubble({ text, from }) {
  const isUser = from === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`
          max-w-[80%] px-4 py-2 rounded-2xl text-sm
          ${isUser
            ? "bg-purple-600 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"}
        `}
      >
        {text}
      </div>
    </div>
  );
}
