"use client";

export default function ChatInput({ value, onChange, onSend }) {
  return (
    <div className="flex gap-2 p-3 border-t">
      <input
        className="flex-1 px-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Ketik pesan..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />
      <button
        onClick={onSend}
        className="bg-purple-600 text-white px-4 rounded-full"
      >
        ➤
      </button>
    </div>
  );
}
