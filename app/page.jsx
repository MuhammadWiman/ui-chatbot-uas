"use client";

import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Chatbot Informasi Kesehatan
        </h1>
        <p className="text-gray-600 max-w-xl">
          Sistem chatbot berbasis Machine Learning (LSTM) untuk memberikan
          informasi kesehatan secara informatif dan interaktif.
        </p>
      </section>

      {/* Floating Chat */}
      <ChatWidget />
    </main>
  );
}
