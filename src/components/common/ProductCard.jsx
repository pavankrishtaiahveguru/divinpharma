"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaCapsules, FaFlask, FaMessage } from "react-icons/fa6";

export function buildWhatsAppLink(product) {
  const details = [
    `Hello DIVIN PHARMA, I would like to enquire about ${product.name}.`,
    product.cas ? `CAS Number: ${product.cas}.` : "",
    product.grades?.length ? `Grade: ${product.grades.join(", ")}.` : "",
    "Please share availability, pricing, specifications, and supply details.",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/919640684037?text=${encodeURIComponent(details)}`;
}

export default function ProductCard({
  product,
  index = 0,
  reduceMotion = false,
}) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.4,
        delay: reduceMotion ? 0 : Math.min(index % 6, 5) * 0.04,
      }}
      className="group flex h-full min-w-0 flex-col rounded-2xl border border-[#E5ECE7] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#B7D4C1] hover:shadow-[0_16px_40px_rgba(23,43,36,0.08)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF5EE] text-lg text-[#087443] transition-colors group-hover:bg-[#087443] group-hover:text-white sm:h-12 sm:w-12 sm:rounded-xl sm:text-xl">
          {product.category === "API" ? <FaCapsules /> : <FaFlask />}
        </div>
        <span className="rounded-full bg-[#F0F7F2] px-1.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#087443] sm:px-3 sm:py-1.5 sm:text-[10px]">
          {product.category === "API" ? "API" : "Intermediate"}
        </span>
      </div>

      <h3 className="mt-4 text-sm font-bold leading-5 break-words text-[#172B24] sm:mt-6 sm:text-lg sm:leading-7">
        {product.name}
      </h3>

      <div className="mt-4 flex-1 space-y-3 border-t border-[#EAF0EC] pt-4">
        {product.cas && (
          <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1 text-sm">
            <span className="text-[#819087]">CAS Number</span>
            <span className="font-semibold break-all text-right text-[#34483D]">
              {product.cas}
            </span>
          </div>
        )}

        {product.grades?.length > 0 && (
          <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1 text-sm">
            <span className="text-[#819087]">Grade</span>
            <span className="font-semibold text-right text-[#34483D]">
              {product.grades.join(", ")}
            </span>
          </div>
        )}

        {!product.cas && !product.grades?.length && (
          <p className="text-sm text-[#819087]">
            Contact us for product specifications.
          </p>
        )}
      </div>

      <a
        href={buildWhatsAppLink(product)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-[#087443] px-2 py-2 text-[11px] font-bold text-white transition-colors hover:bg-[#065D36] sm:mt-6 sm:min-h-11 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
      >
        <FaMessage className="shrink-0" />
        <span className="truncate sm:hidden">Enquire</span>
        <span className="hidden sm:inline">Enquire on WhatsApp</span>
        <FaArrowRight className="shrink-0 text-xs" />
      </a>
    </motion.article>
  );
}
