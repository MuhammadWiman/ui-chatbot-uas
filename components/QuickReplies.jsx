"use client";

export default function QuickReplies({ options, onSelect }) {
  if (!options || options.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onSelect(opt)}
          className="px-4 py-1.5 rounded-full border border-purple-500 text-purple-600 text-sm hover:bg-purple-50 transition"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
