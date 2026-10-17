"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaShieldAlt,
  FaHandshake,
  FaGlobeAsia,
  FaBoxes,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";
import { scaleIn, staggerContainer, smoothTransition } from "@/lib/animations";

const reasons = [
  {
    number: "01",
    icon: FaShieldAlt,
    title: "Quality-Focused Sourcing",
    description:
      "We prioritize quality-conscious sourcing practices when coordinating pharmaceutical products and raw material requirements.",
  },
  {
    number: "02",
    icon: FaHandshake,
    title: "Reliable Business Partnerships",
    description:
      "We value transparency, professional communication, and long-term relationships with our customers and suppliers.",
  },
  {
    number: "03",
    icon: FaBoxes,
    title: "Product Range",
    description:
      "Our catalogue includes active pharmaceutical ingredients and pharmaceutical intermediates for business enquiries.",
  },
  {
    number: "04",
    icon: FaGlobeAsia,
    title: "Domestic & International Reach",
    description:
      "We support domestic supply requirements and international trade enquiries based on product availability and applicable requirements.",
  },
  {
    number: "05",
    icon: FaComments,
    title: "Responsive Communication",
    description:
      "We aim to make product enquiries and business coordination straightforward through clear, timely communication.",
  },
  {
    number: "06",
    icon: FaCheckCircle,
    title: "Customer-Focused Service",
    description:
      "We work to understand each customer's requirements and coordinate suitable pharmaceutical supply solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#F5F9F6] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#087443]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#FF7900]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <motion.div
            variants={scaleIn}
            transition={smoothTransition}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#087443]/15 bg-white px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF7900]" />
            <span className="text-sm font-semibold tracking-wide text-[#087443]">
              WHY DIVIN PHARMA
            </span>
          </motion.div>

          <motion.h2
            variants={scaleIn}
            transition={smoothTransition}
            className="text-3xl font-bold leading-tight tracking-tight text-[#172B24] sm:text-4xl lg:text-5xl"
          >
            A Partner You Can <span className="text-[#087443]">Count On</span>
          </motion.h2>

          <motion.p
            variants={scaleIn}
            transition={smoothTransition}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            We focus on dependable pharmaceutical sourcing, professional
            communication, and business relationships built around your supply
            requirements.
          </motion.p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map(({ number, icon: Icon, title, description }) => (
            <motion.article
              key={number}
              variants={scaleIn}
              transition={smoothTransition}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-[#E5ECE7] bg-white p-6 transition-all duration-300 hover:border-[#087443]/30 hover:shadow-xl hover:shadow-[#172B24]/5 sm:p-7"
            >
              <div className="absolute -right-3 -top-4 text-7xl font-bold text-[#087443]/[0.05] transition-colors duration-300 group-hover:text-[#FF7900]/10">
                {number}
              </div>

              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#087443]/10 text-2xl text-[#087443] transition-all duration-300 group-hover:bg-[#087443] group-hover:text-white">
                <Icon />
              </div>

              <h3 className="relative text-xl font-bold leading-snug text-[#172B24]">
                {title}
              </h3>
              <p className="relative mt-3 text-sm leading-7 text-slate-600">
                {description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-[#FF7900] transition-all duration-300 group-hover:w-20" />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom call to action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleIn}
          transition={smoothTransition}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#10291F] p-7 sm:p-9 md:flex-row md:items-center lg:p-10"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#FF9A42]">
              Let's work together
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
              Looking for a pharmaceutical supply partner?
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
              Talk to our team about your API and pharmaceutical intermediate
              requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#FF7900] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E86D00]"
          >
            Contact Us
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
