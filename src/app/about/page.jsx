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
  FaBoxes,
  FaBullseye,
  FaEye,
} from "react-icons/fa";
import CTA from "@/components/common/CTA";
import { scaleIn, staggerContainer, smoothTransition } from "@/lib/animations";

const values = [
  {
    icon: FaShieldAlt,
    title: "Quality-Focused Approach",
    description:
      "We prioritize quality-conscious sourcing and careful coordination of pharmaceutical supply requirements.",
  },
  {
    icon: FaHandshake,
    title: "Trust & Transparency",
    description:
      "We value clear communication, professional conduct, and dependable relationships with customers and suppliers.",
  },
  {
    icon: FaGlobeAsia,
    title: "Connected Supply",
    description:
      "We support domestic supply and international trade enquiries based on product availability and applicable requirements.",
  },
  {
    icon: FaBoxes,
    title: "Product-Focused Solutions",
    description:
      "Our catalogue includes active pharmaceutical ingredients and pharmaceutical intermediates for business enquiries.",
  },
];

const commitments = [
  "API and pharmaceutical intermediate supply enquiries",
  "Product and grade information based on catalogue listings",
  "Professional communication and enquiry coordination",
  "Domestic supply and international export enquiries",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Page Hero */}
      <section className="relative isolate overflow-hidden bg-[#10291F]">
        <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-[#087443]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-[#FF7900]/15 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:gap-10 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={scaleIn}
              transition={smoothTransition}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#FF7900]" />
              <span className="text-sm font-semibold tracking-wide text-[#FFB16D]">
                ABOUT DIVIN PHARMA
              </span>
            </motion.div>

            <motion.h1
              variants={scaleIn}
              transition={smoothTransition}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Connecting Quality, Trust &{" "}
              <span className="text-[#FF9A42]">Pharmaceutical Solutions.</span>
            </motion.h1>

            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg"
            >
              We focus on pharmaceutical trading and supply, connecting
              businesses with active pharmaceutical ingredients, pharmaceutical
              intermediates, and supply solutions for domestic and international
              requirements.
            </motion.p>

            <motion.div
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/products"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#FF7900] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E86D00]"
              >
                Explore Our Products
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative mx-auto w-full max-w-xl"
          >
            <motion.div
              variants={scaleIn}
              transition={{ ...smoothTransition, duration: 0.85 }}
              className="relative aspect-5/4 overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-1.5 sm:aspect-4/3 sm:p-2"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/about-pharma.png"
                  alt="Pharmaceutical industry and supply solutions"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[68%_center] sm:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/65 via-transparent to-transparent" />
                <div className="absolute inset-x-2 bottom-2 rounded-xl border border-white/20 bg-[#10291F]/80 p-2.5 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087443] text-lg text-white sm:h-12 sm:w-12 sm:rounded-xl sm:text-xl">
                      <FaFlask />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold leading-5 text-white sm:text-base sm:leading-normal">
                        Pharmaceutical Supply Solutions
                      </p>
                      <p className="mt-0.5 text-[11px] leading-4 text-white/70 sm:mt-1 sm:text-sm sm:leading-normal">
                        APIs & pharmaceutical intermediates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              transition={{ ...smoothTransition, delay: 0.25 }}
              className="relative mt-3 flex w-fit max-w-full items-center gap-2 rounded-xl border border-[#E5ECE7] bg-white p-2.5 shadow-xl sm:absolute sm:-bottom-5 sm:-left-5 sm:mt-0 sm:gap-3 sm:p-4"
            >
              <FaHandshake className="text-2xl text-[#087443]" />
              <div>
                <p className="text-sm font-bold text-[#172B24]">
                  Trusted Partnerships
                </p>
                <p className="text-xs text-slate-500">
                  Business-focused approach
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#087443]"
            >
              Who We Are
            </motion.p>

            <motion.h2
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#172B24] sm:text-4xl lg:text-5xl"
            >
              Your Partner for{" "}
              <span className="text-[#087443]">Pharmaceutical Supply</span>
            </motion.h2>

            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-6 text-base leading-8 text-slate-600"
            >
              Divin Pharma is focused on pharmaceutical trading and supply,
              serving business requirements involving active pharmaceutical
              ingredients and pharmaceutical intermediates.
            </motion.p>

            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-4 text-base leading-8 text-slate-600"
            >
              We aim to make business coordination straightforward through
              responsive communication, product-focused enquiries, and long-term
              professional partnerships.
            </motion.p>

            <motion.div
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-7 space-y-4"
            >
              {commitments.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-lg text-[#087443]" />
                  <p className="text-sm leading-6 text-slate-600 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scaleIn}
            transition={smoothTransition}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-2xl border-2 border-[#FF7900]/30 sm:block" />
            <div className="relative aspect-5/4 overflow-hidden rounded-2xl bg-[#F5F9F6] sm:aspect-4/3">
              <Image
                src="/images/about/pharma-supply.png"
                alt="Pharmaceutical materials and supply operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[68%_center] transition-transform duration-700 hover:scale-105 sm:object-center"
              />
            </div>
            <div className="relative mt-3 w-fit max-w-full rounded-xl bg-white p-2.5 shadow-lg sm:absolute sm:-left-5 sm:top-8 sm:mt-0 sm:p-5">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087443]/10 text-lg text-[#087443] sm:h-11 sm:w-11 sm:text-xl">
                  <FaGlobeAsia />
                </div>
                <div>
                  <p className="font-bold text-[#172B24]">Domestic & Global</p>
                  <p className="text-xs text-slate-500">Supply enquiries</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-[#F5F9F6] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#087443]"
            >
              Our Direction
            </motion.p>
            <motion.h2
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-4 text-3xl font-bold tracking-tight text-[#172B24] sm:text-4xl"
            >
              Guided by Purpose & Trust
            </motion.h2>
            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-4 text-base leading-8 text-slate-600"
            >
              Our approach centers on customer requirements, professional
              partnerships, and responsible business coordination.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.article
              variants={scaleIn}
              transition={smoothTransition}
              className="rounded-2xl border border-[#E5ECE7] bg-white p-7 sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#087443]/10 text-2xl text-[#087443]">
                <FaBullseye />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#172B24]">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                To support pharmaceutical businesses with responsive sourcing
                and supply coordination, clear communication, and a
                customer-focused approach to their product requirements.
              </p>
            </motion.article>

            <motion.article
              variants={scaleIn}
              transition={smoothTransition}
              className="rounded-2xl border border-[#E5ECE7] bg-white p-7 sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF7900]/10 text-2xl text-[#FF7900]">
                <FaEye />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#172B24]">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                To build lasting business relationships and become a trusted
                partner for pharmaceutical trading and supply through
                professionalism, transparency, and dependable coordination.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#087443]"
            >
              What Matters to Us
            </motion.p>
            <motion.h2
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-4 text-3xl font-bold tracking-tight text-[#172B24] sm:text-4xl lg:text-5xl"
            >
              The Values Behind Our Work
            </motion.h2>
            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-5 text-base leading-8 text-slate-600 sm:text-lg"
            >
              We approach every business enquiry with a focus on communication,
              collaboration, and pharmaceutical supply requirements.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map(({ icon: Icon, title, description }) => (
              <motion.article
                key={title}
                variants={scaleIn}
                transition={smoothTransition}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-[#E5ECE7] bg-white p-6 transition-all duration-300 hover:border-[#087443]/30 hover:shadow-xl hover:shadow-[#172B24]/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087443]/10 text-xl text-[#087443] transition-colors duration-300 group-hover:bg-[#087443] group-hover:text-white">
                  <Icon />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-[#172B24]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reusable CTA */}
      <CTA
        eyebrow="LET'S WORK TOGETHER"
        title="Looking for a Reliable Pharmaceutical Supply Partner?"
        description="Connect with Divin Pharma to discuss APIs, pharmaceutical intermediates, and your domestic or international supply requirements."
        primaryText="Send an Enquiry"
        primaryHref="/contact"
        secondaryText="Explore Products"
        secondaryHref="/products"
      />
    </main>
  );
}
