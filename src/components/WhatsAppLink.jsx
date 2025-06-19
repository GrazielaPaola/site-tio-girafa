// src/components/WhatsAppLink.jsx

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppLink() {
  return (
    <div className="flex items-center gap-2 text-orange-600">
      <FaWhatsapp className="w-5 h-5" />
      <a
        href="https://wa.me/5516912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        WhatsApp
      </a>
    </div>
  );
}
