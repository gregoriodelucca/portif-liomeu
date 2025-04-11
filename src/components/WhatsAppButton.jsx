// src/components/WhatsAppButton.jsx
export default function WhatsAppButton() {
    const phoneNumber = "5511999999999"; // substitui pelo seu número com DDD
    const message = "Olá, vi seu portfólio e gostaria de conversar!";
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
        title="Fale comigo no WhatsApp"
      >
        🟢
      </a>
    );
  }
  