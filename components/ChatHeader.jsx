"use client";
export default function ChatHeader() {
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <div>
        <div className="font-semibold text-purple-700">
          Chatbot Kesehatan
        </div>
        <div className="text-xs text-green-500 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Online
        </div>
      </div>

      <button
        className="text-gray-400 hover:text-gray-600"
        title="Refresh chat"
        onClick={() => window.location.reload()}
      >
        ⟳
      </button>
    </div>
  );
}
