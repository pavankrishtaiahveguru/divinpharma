"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFlask,
  FaBoxes,
  FaTruck,
  FaGlobe,
  FaCheckCircle,
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import CTA from "@/components/common/CTA";
import { fadeUp, staggerContainer, smoothTransition } from "@/lib/animations";

const services = [
  {
    number: "01",
    title: "Active Pharmaceutical Ingredients (APIs) Trading & Supply",
    shortTitle: "APIs Trading & Supply",
    description:
      "Trading and supply of Active Pharmaceutical Ingredients to support pharmaceutical sourcing requirements.",
    icon: FaFlask,
    points: [
      "Active Pharmaceutical Ingredients sourcing",
      "Product and grade enquiry support",
      "Supply coordination based on requirements",
    ],
  },
  {
    number: "02",
    title: "Pharmaceutical Intermediates Trading & Supply",
    shortTitle: "Pharmaceutical Intermediates",
    description:
      "Trading and supply of pharmaceutical intermediates to support the sourcing needs of pharmaceutical businesses.",
    icon: FaBoxes,
    points: [
      "Pharmaceutical intermediates sourcing",
      "Product and CAS number enquiries",
      "Supply coordination based on requirements",
    ],
  },
  {
    number: "03",
    title: "Domestic Supply & Distribution",
    shortTitle: "Domestic Supply & Distribution",
    description:
      "Domestic pharmaceutical supply and distribution services tailored to customer product and business requirements.",
    icon: FaTruck,
    points: [
      "Domestic product supply enquiries",
      "Order and supply coordination",
      "Communication throughout the enquiry process",
    ],
  },
  {
    number: "04",
    title: "International Pharmaceutical Export",
    shortTitle: "International Pharmaceutical Export",
    description:
      "International pharmaceutical export services to support customers with their cross-border product sourcing requirements.",
    icon: FaGlobe,
    points: [
      "International product supply enquiries",
      "Export requirement coordination",
      "Communication about product and destination requirements",
    ],
  },
];

const benefits = [
  {
    icon: FaHandshake,
    title: "Customer-Focused Approach",
    description:
      "We work to understand customer requirements and coordinate suitable supply enquiries.",
  },
  {
    icon: FaShieldAlt,
    title: "Quality-Conscious Sourcing",
    description:
      "Product requirements and applicable quality documentation can be discussed during the enquiry process.",
  },
  {
    icon: FaChartLine,
    title: "Flexible Supply Enquiries",
    description:
      "Discuss API, intermediate, domestic supply, and international export requirements with our team.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-[#10291F] px-5 py-20 sm:px-8 lg:min-h-[460px] lg:px-12">
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#071E16] via-[#0C3828] to-[#087443]" />
        <div className="absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-12 -z-10 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute bottom-0 right-0 -z-10 h-40 w-1/2 bg-gradient-to-t from-[#087443]/30 to-transparent" />

        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              transition={smoothTransition}
              className="mb-6 flex items-center gap-2 text-sm text-white/70"
            >
              <Link href="/" className="transition hover:text-[#FF7900]">
                Home
              </Link>
              <FaArrowRight className="text-[10px]" />
              <span className="font-medium text-[#FF9A43]">Services</span>
            </motion.div>

            <motion.span
              variants={fadeUp}
              transition={smoothTransition}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFB16B] sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#FF7900]" />
              What We Do
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={smoothTransition}
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Our <span className="text-[#FF7900]">Services</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={smoothTransition}
              className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8"
            >
              Connecting Quality, Trust & Pharmaceutical Solutions through
              pharmaceutical trading, supply, domestic distribution, and
              international export.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={smoothTransition}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#FF7900] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E66D00]"
              >
                Discuss Your Requirements <FaArrowRight />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Explore Products <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16"
        >
          <div>
            <motion.span
              variants={fadeUp}
              transition={smoothTransition}
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#087443]"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              variants={fadeUp}
              transition={smoothTransition}
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#172B24] sm:text-4xl lg:text-5xl"
            >
              Pharmaceutical Supply Solutions Built Around Your Needs
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            transition={smoothTransition}
            className="border-l-4 border-[#FF7900] pl-6"
          >
            <p className="text-base leading-8 text-[#64748B]">
              DIVIN PHARMA focuses on pharmaceutical ingredient trading and
              supply, domestic distribution, and international pharmaceutical
              exports. Our team welcomes product enquiries and works with
              customers to understand their specific requirements.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-[#F5F9F6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
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
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#087443]"
            >
              Our Core Services
            </motion.span>
            <motion.h2
              variants={fadeUp}
              transition={smoothTransition}
              className="mt-4 text-3xl font-extrabold leading-tight text-[#172B24] sm:text-4xl lg:text-5xl"
            >
              How We Support Your{" "}
              <span className="text-[#087443]">Business</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={smoothTransition}
              className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B]"
            >
              Explore our four core service areas and contact us to discuss your
              pharmaceutical supply requirements.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 min-[375px]:grid-cols-2 md:gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  variants={fadeUp}
                  transition={smoothTransition}
                  whileHover={{ y: -5 }}
                  className="group relative min-w-0 overflow-hidden rounded-2xl border border-[#E5ECE7] bg-white p-4 shadow-[0_8px_30px_rgba(23,43,36,0.04)] transition-shadow duration-300 hover:border-[#B9D9C5] hover:shadow-[0_18px_45px_rgba(8,116,67,0.09)] sm:p-9"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#F5F9F6] transition-colors duration-300 group-hover:bg-[#EAF5EE]" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EE] text-lg text-[#087443] transition-all duration-300 group-hover:bg-[#087443] group-hover:text-white sm:h-16 sm:w-16 sm:rounded-2xl sm:text-2xl">
                      <Icon />
                    </div>
                    <span className="text-2xl font-extrabold tracking-tight text-[#E5ECE7] sm:text-4xl">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="relative mt-5 max-w-lg text-[15px] font-bold leading-6 break-words text-[#172B24] transition-colors duration-300 group-hover:text-[#087443] sm:mt-7 sm:text-2xl sm:leading-8">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#64748B] sm:mt-4 sm:text-base sm:leading-7">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs leading-5 break-words text-[#475569] sm:gap-3 sm:text-sm sm:leading-6"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-[#087443] sm:mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-[#E5ECE7] pt-4 sm:mt-8 sm:pt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 text-sm font-bold text-[#087443] transition-all duration-300 hover:gap-4 hover:text-[#FF7900]"
                    >
                      Enquire About This Service <FaArrowRight />
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF7900] transition-all duration-300 group-hover:w-full" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Approach / Benefits */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <motion.span
              variants={fadeUp}
              transition={smoothTransition}
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#087443]"
            >
              The DIVIN PHARMA Approach
            </motion.span>
            <motion.h2
              variants={fadeUp}
              transition={smoothTransition}
              className="mt-4 text-3xl font-extrabold text-[#172B24] sm:text-4xl"
            >
              A Clear, Customer-Focused Process
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={smoothTransition}
              className="mt-5 text-base leading-7 text-[#64748B]"
            >
              We encourage direct communication to understand product
              specifications, supply needs, and enquiry details.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 min-[375px]:grid-cols-2 md:grid-cols-3 md:gap-5"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="min-w-0 rounded-2xl border border-[#E5ECE7] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9D9C5] hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F9F6] text-lg text-[#087443] sm:h-12 sm:w-12 sm:text-xl">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold break-words text-[#172B24] sm:mt-5 sm:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#64748B] sm:mt-3 sm:text-sm sm:leading-7">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <CTA
            eyebrow="Let's Work Together"
            title="Looking for a Pharmaceutical Supply Partner?"
            description="Contact DIVIN PHARMA to discuss your API, pharmaceutical intermediate, domestic supply, or international export requirements."
            primaryText="Contact Our Team"
            primaryHref="/contact"
            secondaryText="Explore Products"
            secondaryHref="/products"
          />
        </div>
      </section>
    </main>
  );
}
