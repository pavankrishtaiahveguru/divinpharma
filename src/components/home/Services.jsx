"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGlobe,
  FaFlask,
  FaBoxesStacked,
  FaTruckFast,
} from "react-icons/fa6";
import { fadeUp, staggerContainer, smoothTransition } from "@/lib/animations";

const services = [
  {
    number: "01",
    title: "Active Pharmaceutical Ingredients (APIs) Trading & Supply",
    description:
      "Trading and supply of Active Pharmaceutical Ingredients to support pharmaceutical sourcing requirements.",
    icon: FaFlask,
  },
  {
    number: "02",
    title: "Pharmaceutical Intermediates Trading & Supply",
    description:
      "Reliable sourcing and supply of pharmaceutical intermediates for industry requirements.",
    icon: FaBoxesStacked,
  },
  {
    number: "03",
    title: "Domestic Supply & Distribution",
    description:
      "Domestic pharmaceutical supply and distribution to support business requirements across India.",
    icon: FaTruckFast,
  },
  {
    number: "04",
    title: "International Pharmaceutical Export",
    description:
      "International pharmaceutical export services for global sourcing and supply requirements.",
    icon: FaGlobe,
  },
];

export default function Services() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            transition={smoothTransition}
            className="inline-flex items-center gap-2 rounded-full border border-[#DCE9E0] bg-[#F5F9F6] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087443] sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF7900]" />
            What We Offer
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={smoothTransition}
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#172B24] sm:text-4xl lg:text-5xl"
          >
            Our Pharmaceutical <span className="text-[#087443]">Services</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={smoothTransition}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg"
          >
            Connecting quality, trust and pharmaceutical solutions through our
            trading, supply, distribution and export services.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={fadeUp}
                transition={smoothTransition}
                whileHover={{ y: -7 }}
                className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E5ECE7] bg-white p-5 shadow-[0_5px_25px_rgba(23,43,36,0.04)] transition-shadow duration-300 hover:border-[#B9D9C5] hover:shadow-[0_18px_45px_rgba(8,116,67,0.10)] sm:p-7 lg:p-6"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#F5F9F6] transition-colors duration-300 group-hover:bg-[#E8F4EC]" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EE] text-xl text-[#087443] transition-all duration-300 group-hover:bg-[#087443] group-hover:text-white sm:h-14 sm:w-14 sm:text-2xl">
                    <Icon />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-[#B7C9BE]">
                    {service.number}
                  </span>
                </div>

                <h3 className="relative mt-6 text-[15px] font-bold leading-6 break-words text-[#172B24] transition-colors duration-300 group-hover:text-[#087443] sm:mt-7 sm:text-lg sm:leading-7">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-[13px] leading-6 text-[#64748B] sm:text-sm">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  aria-label={`Learn more about ${service.title}`}
                  className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#087443] transition-all duration-300 hover:gap-3 hover:text-[#FF7900]"
                >
                  Learn More <FaArrowRight className="text-xs" />
                </Link>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF7900] transition-all duration-300 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={smoothTransition}
          className="relative mt-12 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-[#10291F] p-7 sm:p-9 md:flex-row md:items-center lg:px-12 lg:py-10"
        >
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-12 h-44 w-44 rounded-full border border-white/10" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF9A43]">
              Your Pharmaceutical Supply Partner
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Looking for Pharmaceutical Supply Solutions?
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              Contact our team to discuss your API, pharmaceutical intermediate,
              domestic supply or export requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="relative z-10 inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#FF7900] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E66D00]"
          >
            Enquire Now <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
