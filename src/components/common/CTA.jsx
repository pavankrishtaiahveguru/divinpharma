"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaFlask, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { scaleIn, staggerContainer, smoothTransition } from "@/lib/animations";

export default function CTA({
  eyebrow = "LET'S WORK TOGETHER",
  title = "Looking for a Reliable Pharmaceutical Supply Partner?",
  description = "Connect with Divin Pharma to discuss your API and pharmaceutical intermediate requirements. Our team is ready to hear about your business needs.",
  primaryText = "Send an Enquiry",
  primaryHref = "/contact",
  secondaryText = "Explore Products",
  secondaryHref = "/products",
}) {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#087443]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#FF7900]/10 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#10291F] px-6 py-12 shadow-xl shadow-[#172B24]/10 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10 sm:-right-10 sm:-top-24 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -right-4 top-10 h-40 w-40 rounded-full bg-[#087443]/30 blur-3xl sm:right-20 sm:top-16" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-1 w-40 bg-[#FF7900]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          {/* CTA content */}
          <div className="max-w-3xl">
            <motion.div
              variants={scaleIn}
              transition={smoothTransition}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#FF7900]" />
              <span className="text-xs font-semibold tracking-[0.16em] text-[#FFB16D] sm:text-sm">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={scaleIn}
              transition={smoothTransition}
              className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {title.split("Reliable Pharmaceutical Supply Partner?")[0]}
              {title.includes("Reliable Pharmaceutical Supply Partner?") && (
                <span className="text-[#FF9A42]">
                  Reliable Pharmaceutical Supply Partner?
                </span>
              )}
            </motion.h2>

            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              {description}
            </motion.p>

            <motion.div
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <Link
                href={primaryHref}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#FF7900] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E86D00]"
              >
                {primaryText}
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
              >
                {secondaryText}
              </Link>
            </motion.div>
          </div>

          {/* Contact card */}
          <motion.div
            variants={scaleIn}
            transition={{ ...smoothTransition, delay: 0.15 }}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-6 lg:w-72"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#087443] text-xl text-white">
              <FaFlask />
            </div>

            <h3 className="text-lg font-bold text-white">Let's Connect</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Contact our team to discuss your pharmaceutical supply enquiries.
            </p>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
              <a
                href="tel:+919640684037"
                className="group flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-[#FF9A42]"
              >
                <FaPhoneAlt className="shrink-0 text-[#FF9A42]" />
                <span>+91 96406 84037</span>
              </a>
              <a
                href="mailto:divinpharmapurchase1@gmail.com"
                className="group flex items-start gap-3 break-all text-sm text-white/80 transition-colors hover:text-[#FF9A42]"
              >
                <FaEnvelope className="mt-1 shrink-0 text-[#FF9A42]" />
                <span>divinpharmapurchase1@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
