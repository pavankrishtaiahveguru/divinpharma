"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaFlask,
  FaGlobeAsia,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";
import { scaleIn, staggerContainer, smoothTransition } from "@/lib/animations";

const strengths = [
  {
    icon: FaShieldAlt,
    title: "Quality-Focused Sourcing",
    description:
      "We prioritize dependable sourcing practices to support pharmaceutical supply requirements.",
  },
  {
    icon: FaHandshake,
    title: "Trusted Partnerships",
    description:
      "We value transparent communication and long-term relationships with our business partners.",
  },
  {
    icon: FaGlobeAsia,
    title: "Supply Network",
    description:
      "We support domestic distribution and international export requirements.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F5F9F6] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#087443]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Image section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <motion.div
            variants={scaleIn}
            transition={smoothTransition}
            className="relative"
          >
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl border-2 border-[#FF7900]/30 sm:-bottom-6 sm:-left-6 sm:h-40 sm:w-40" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl shadow-[#172B24]/10">
              <Image
                src="/images/home/about.png"
                alt="Pharmaceutical industry and quality-focused supply operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="absolute -bottom-6 right-3 max-w-[260px] rounded-xl border border-[#E5ECE7] bg-white p-4 shadow-xl sm:-bottom-8 sm:right-0 sm:p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#087443]/10 text-xl text-[#087443]">
                <FaFlask />
              </div>
              <div>
                <p className="font-bold text-[#172B24]">
                  Pharma Supply Solutions
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  APIs & intermediates
                </p>
              </div>
            </div>
          </motion.div>

          <div className="absolute -right-2 -top-4 -z-10 h-24 w-24 rounded-full bg-[#FF7900]/10 sm:-right-5 sm:-top-6 sm:h-32 sm:w-32" />
        </motion.div>

        {/* Content section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={scaleIn}
            transition={smoothTransition}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#087443]/15 bg-white px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF7900]" />
            <span className="text-sm font-semibold tracking-wide text-[#087443]">
              ABOUT DIVIN PHARMA
            </span>
          </motion.div>

          <motion.h2
            variants={scaleIn}
            transition={smoothTransition}
            className="text-3xl font-bold leading-tight tracking-tight text-[#172B24] sm:text-4xl lg:text-5xl"
          >
            Your Partner in{" "}
            <span className="text-[#087443]">Pharmaceutical Supply</span>{" "}
            Solutions
          </motion.h2>

          <motion.p
            variants={scaleIn}
            transition={smoothTransition}
            className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
          >
            Divin Pharma focuses on pharmaceutical trading and supply,
            connecting businesses with APIs, pharmaceutical intermediates, and
            dependable sourcing solutions for domestic and international
            requirements.
          </motion.p>

          <motion.p
            variants={scaleIn}
            transition={smoothTransition}
            className="mt-4 text-base leading-8 text-slate-600"
          >
            We aim to build lasting business relationships through responsive
            service, consistent communication, and a commitment to supporting
            our partners' pharmaceutical supply needs.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-8 grid gap-5 sm:grid-cols-2"
          >
            {strengths.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={scaleIn}
                transition={smoothTransition}
                className="group rounded-xl border border-[#E5ECE7] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#087443]/30 hover:shadow-lg hover:shadow-[#172B24]/5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#087443]/10 text-lg text-[#087443] transition-colors duration-300 group-hover:bg-[#087443] group-hover:text-white">
                  <Icon />
                </div>
                <h3 className="font-semibold text-[#172B24]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scaleIn}
            transition={smoothTransition}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/about"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#087443] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#065C35]"
            >
              Discover Divin Pharma
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <FaCheckCircle className="shrink-0 text-[#087443]" />
              <span>Focused on dependable supply partnerships</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
