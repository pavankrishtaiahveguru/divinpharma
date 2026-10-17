"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCapsules,
  FaHome,
  FaSearch,
} from "react-icons/fa";
import { fadeUp, scaleIn, smoothTransition } from "@/lib/animations";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#F5F9F6] px-5 py-20 sm:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#087443]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#FF7900]/10 blur-3xl" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        transition={smoothTransition}
        className="relative z-10 mx-auto w-full max-w-3xl text-center"
      >
        {/* Brand icon */}
        <motion.div
          variants={fadeUp}
          transition={smoothTransition}
          className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-[#087443] shadow-lg shadow-[#172B24]/5 ring-1 ring-[#E5ECE7]"
        >
          <FaCapsules className="text-4xl" />
        </motion.div>

        {/* Error code */}
        <motion.p
          variants={fadeUp}
          transition={smoothTransition}
          className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FF7900]"
        >
          Page Not Found
        </motion.p>

        <motion.h1
          variants={fadeUp}
          transition={smoothTransition}
          className="text-7xl font-extrabold tracking-tight text-[#172B24] sm:text-8xl md:text-9xl"
        >
          4<span className="text-[#087443]">0</span>4
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          transition={smoothTransition}
          className="mt-5 text-2xl font-bold leading-tight text-[#172B24] sm:text-3xl md:text-4xl"
        >
          Oops! This page is{" "}
          <span className="text-[#087443]">out of stock.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={smoothTransition}
          className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#475569] sm:text-lg"
        >
          The page you are looking for may have been moved, removed, or is
          temporarily unavailable. Let us help you find the right pharmaceutical
          solutions.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={fadeUp}
          transition={smoothTransition}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#087443] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#087443]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#065D36] sm:w-auto"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            href="/products"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#D5E3D9] bg-white px-7 py-3.5 text-sm font-semibold text-[#172B24] transition-all duration-300 hover:-translate-y-1 hover:border-[#087443] hover:text-[#087443] sm:w-auto"
          >
            Explore Products
            <FaArrowRight />
          </Link>
        </motion.div>

        {/* Contact support */}
        <motion.div
          variants={fadeUp}
          transition={smoothTransition}
          className="mx-auto mt-12 flex max-w-md flex-col items-center justify-center gap-3 border-t border-[#E0E9E2] pt-7 sm:flex-row"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#087443] ring-1 ring-[#E5ECE7]">
            <FaSearch />
          </span>
          <p className="text-sm text-[#475569]">
            Need assistance?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#087443] underline-offset-4 transition hover:text-[#FF7900] hover:underline"
            >
              Contact our team
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
