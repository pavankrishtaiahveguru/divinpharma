"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const phoneNumber = "919640684037";

const whatsappMessage = encodeURIComponent(
  "Hello DIVIN PHARMA, I would like to enquire about your pharmaceutical products and services.",
);

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DIVIN PHARMA on WhatsApp"
      className="group fixed bottom-6 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20BD5A] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      {/* Pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30"
      />

      {/* WhatsApp icon */}
      <FaWhatsapp className="relative z-10 text-[30px] sm:text-[34px]" />

      {/* Hover label */}
      <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#172B24] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </Link>
  );
}
