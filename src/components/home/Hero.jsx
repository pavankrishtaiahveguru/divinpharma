"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaFlask,
  FaGlobeAsia,
  FaShieldAlt,
} from "react-icons/fa";
import { scaleIn, staggerContainer, smoothTransition } from "@/lib/animations";

const highlights = [
  { icon: FaCheckCircle, text: "Quality-focused sourcing" },
  { icon: FaShieldAlt, text: "Reliable supply network" },
  { icon: FaGlobeAsia, text: "Domestic & global reach" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute left-0 top-[6%] h-80 w-80 rounded-full bg-[#087443]/10 blur-[100px] sm:left-[2%] sm:top-[8%] sm:h-[28rem] sm:w-[28rem] sm:blur-[120px] lg:left-[1%] lg:top-[10%] lg:h-[34rem] lg:w-[34rem] lg:blur-[130px]" />
      <div className="pointer-events-none absolute -right-12 top-[50%] h-80 w-80 rounded-full bg-[#FF7900]/20 blur-[100px] sm:right-0 sm:top-[40%] sm:h-[30rem] sm:w-[30rem] sm:blur-[120px] lg:right-[4%] lg:top-[7%] lg:h-[38rem] lg:w-[38rem] lg:blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-16 lg:min-h-[650px] lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        {/* Hero content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div
            variants={scaleIn}
            transition={smoothTransition}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#087443]/15 bg-[#F5F9F6] px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF7900]" />
            <span className="text-xs font-semibold tracking-wide text-[#087443] sm:text-sm">
              YOUR TRUSTED PHARMA PARTNER
            </span>
          </motion.div>

          <motion.h1
            variants={scaleIn}
            transition={smoothTransition}
            className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-[#172B24] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Connecting Quality, Trust &{" "}
            <span className="text-[#087443]">Pharmaceutical Solutions.</span>
          </motion.h1>

          <motion.p
            variants={scaleIn}
            transition={smoothTransition}
            className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Divin Pharma supports pharmaceutical businesses with dependable API
            sourcing, pharmaceutical intermediates, and domestic and
            international supply solutions.
          </motion.p>

          <motion.div
            variants={scaleIn}
            transition={smoothTransition}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#087443] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#087443]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#065C35]"
            >
              Discuss Your Requirements
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#E5ECE7] bg-white px-6 py-3 text-sm font-semibold text-[#172B24] transition duration-300 hover:border-[#FF7900] hover:text-[#087443]"
            >
              Explore Our Products
            </Link>
          </motion.div>

          <motion.div
            variants={scaleIn}
            transition={smoothTransition}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {highlights.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <Icon className="shrink-0 text-[#087443]" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <motion.div
            variants={scaleIn}
            transition={{ ...smoothTransition, duration: 0.85 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#087443]/15 via-transparent to-[#FF7900]/20 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl border border-[#E5ECE7] bg-[#F5F9F6] p-2 shadow-2xl shadow-[#172B24]/10 sm:p-4">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-white sm:aspect-[4/3]">
                <Image
                  src="/images/home/hero.png"
                  alt="Pharmaceutical research and quality-focused pharmaceutical supply"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[68%_center] sm:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/65 via-transparent to-transparent" />

                <div className="absolute inset-x-2 bottom-2 rounded-xl border border-white/30 bg-white/95 p-2.5 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-5">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087443]/10 text-lg text-[#087443] sm:h-11 sm:w-11 sm:rounded-xl sm:text-xl">
                      <FaFlask />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold leading-5 text-[#172B24] sm:text-base sm:leading-normal">
                        Pharmaceutical Supply Solutions
                      </p>
                      <p className="mt-0.5 text-[11px] leading-4 text-slate-600 sm:mt-1 sm:text-sm sm:leading-6">
                        APIs, intermediates and trusted sourcing support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            transition={{ ...smoothTransition, delay: 0.25 }}
            className="absolute -left-2 top-8 hidden items-center gap-3 rounded-xl border border-[#E5ECE7] bg-white p-3 shadow-lg sm:-left-6 sm:top-12 sm:flex sm:p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#087443]/10 text-lg text-[#087443]">
              <FaShieldAlt />
            </div>
            <div>
              <p className="text-sm font-bold text-[#172B24]">Quality Focus</p>
              <p className="text-xs text-slate-500">Reliable sourcing</p>
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            transition={{ ...smoothTransition, delay: 0.4 }}
            className="absolute -bottom-5 right-3 hidden items-center gap-3 rounded-xl border border-[#E5ECE7] bg-white p-3 shadow-lg sm:-right-5 sm:flex sm:p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF7900]/10 text-lg text-[#FF7900]">
              <FaGlobeAsia />
            </div>
            <div>
              <p className="text-sm font-bold text-[#172B24]">Global Reach</p>
              <p className="text-xs text-slate-500">Domestic & exports</p>
            </div>
          </motion.div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
            <div className="flex min-w-0 items-center gap-2 rounded-xl border border-[#E5ECE7] bg-white p-2 shadow-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#087443]/10 text-sm text-[#087443]">
                <FaShieldAlt />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold leading-4 text-[#172B24]">
                  Quality Focus
                </p>
                <p className="text-[10px] leading-4 text-slate-500">
                  Reliable sourcing
                </p>
              </div>
            </div>
            <div className="flex min-w-0 items-center gap-2 rounded-xl border border-[#E5ECE7] bg-white p-2 shadow-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF7900]/10 text-sm text-[#FF7900]">
                <FaGlobeAsia />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold leading-4 text-[#172B24]">
                  Global Reach
                </p>
                <p className="text-[10px] leading-4 text-slate-500">
                  Domestic & exports
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
