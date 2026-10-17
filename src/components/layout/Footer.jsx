"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaChevronRight,
  FaGlobe,
} from "react-icons/fa";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "APIs Trading & Supply", href: "/services/apis" },
  { name: "Pharmaceutical Intermediates", href: "/services/intermediates" },
  { name: "Domestic Supply & Distribution", href: "/services/domestic-supply" },
  { name: "International Exports", href: "/services/exports" },
];

const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91 96406 84037",
    href: "tel:+919640684037",
  },
  {
    icon: FaPhoneAlt,
    label: "Telephone",
    value: "040-45200155",
    href: "tel:04045200155",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "divinpharmapurchase1@gmail.com",
    href: "mailto:divinpharmapurchase1@gmail.com",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: "easeOut" };

  return (
    <footer className="relative isolate overflow-hidden bg-[#10291F] text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#087443]/20 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-72 w-72 rounded-full bg-[#FF7900]/10 blur-3xl sm:h-80 sm:w-80" />

      {/* Responsive Footer Columns */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10">
          {/* Company Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            transition={transition}
            className="min-w-0 text-center sm:col-span-2 lg:col-span-4 lg:text-left"
          >
            <Link
              href="/"
              onClick={(event) => {
                if (pathname === "/") {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="inline-flex max-w-full items-center gap-3"
            >
              <Image
                src="/logo/logo.png"
                alt="DIVIN PHARMA logo"
                width={64}
                height={64}
                className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
              />
              <div className="min-w-0">
                <span className="block text-xl font-extrabold tracking-wide sm:text-2xl">
                  DIVIN <span className="text-[#FF7900]">PHARMA</span>
                </span>
                <span className="mt-1 block text-[9px] font-medium leading-4 tracking-[0.08em] text-white/60 sm:text-[10px] sm:tracking-[0.1em]">
                  APIs & PHARMACEUTICAL INTERMEDIATES
                </span>
              </div>
            </Link>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/65 lg:mx-0">
              DIVIN PHARMA is a Hyderabad-based pharmaceutical trading and
              supply business focused on APIs and pharmaceutical intermediates,
              serving domestic and international markets.
            </p>

            <div className="mt-5 flex flex-col items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center sm:flex-row sm:items-start sm:text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#087443]/30 text-[#66D69B]">
                <FaShieldAlt size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">
                  Quality. Trust. Reliability.
                </h3>
                <p className="mt-1 text-xs leading-6 text-white/55">
                  Building long-term pharmaceutical business relationships.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
            className="min-w-0 text-center lg:col-span-2 lg:text-left"
          >
            <h3 className="text-base font-bold">Quick Links</h3>
            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[#FF7900] lg:mx-0" />
            <ul className="mt-5 flex flex-col items-center space-y-3.5 lg:items-start">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex max-w-full items-start gap-2 text-sm leading-6 text-white/65 transition-colors hover:text-[#FF9A40]"
                  >
                    <FaChevronRight
                      size={11}
                      className="mt-1.5 shrink-0 text-[#FF7900] transition-transform group-hover:translate-x-1"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.14 }}
            className="min-w-0 text-center lg:col-span-3 lg:text-left"
          >
            <h3 className="text-base font-bold">Our Services</h3>
            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[#FF7900] lg:mx-0" />
            <ul className="mt-5 flex flex-col items-center space-y-3.5 lg:items-start">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-start gap-2 text-sm leading-6 text-white/65 transition-colors hover:text-[#FF9A40]"
                  >
                    <FaExternalLinkAlt
                      size={11}
                      className="mt-1.5 shrink-0 text-[#FF7900] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.2 }}
            className="min-w-0 text-center sm:col-span-2 lg:col-span-3 lg:text-left"
          >
            <h3 className="text-base font-bold">Contact Information</h3>
            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[#FF7900] lg:mx-0" />

            <ul className="mt-5 grid grid-cols-1 justify-items-center gap-4 min-[420px]:grid-cols-2 sm:grid-cols-2 lg:justify-items-stretch lg:grid-cols-1">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.label}
                    className="flex min-w-0 flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#FF9A40]">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <p className="text-xs text-white/45">{item.label}</p>
                      <a
                        href={item.href}
                        className="mt-1 block break-words text-sm leading-6 text-white/80 transition-colors hover:text-[#FF9A40]"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#FF9A40]">
                <FaClock size={16} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold">Business Hours</h4>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
                <p className="mt-1 text-xs text-white/45">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Address */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center sm:mt-12 sm:flex-row sm:items-start sm:gap-4 sm:pt-8 sm:text-left">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#FF9A40]">
            <FaMapMarkerAlt size={18} />
          </div>
          <div className="flex min-w-0 flex-col items-center sm:items-start">
            <h3 className="text-sm font-semibold">Our Office</h3>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-white/60">
              P.No. 128, Shivlok Complex, Jeedimetla, Phase-V, Dulapally Road,
              Hyderabad – 500100, Telangana, India.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Shivlok+Complex+Jeedimetla+Phase+V+Dulapally+Road+Hyderabad+500100"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#FF9A40] transition-colors hover:text-[#FF7900]"
            >
              View Location
              <FaExternalLinkAlt size={11} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-xs leading-6 text-white/50 sm:text-sm">
            © {currentYear}{" "}
            <span className="font-semibold text-white/80">DIVIN PHARMA</span>.
            All rights reserved.
          </p>
          {/* Developed by StaffArc */}
          <DevelopedByStaffArc />

          <p className="flex max-w-sm items-start justify-center gap-2 text-center text-xs leading-6 text-white/50 sm:text-sm md:justify-start md:text-left">
            <FaGlobe size={14} className="mt-1 shrink-0 text-[#FF7900]" />
            <span>Connecting Quality, Trust & Pharmaceutical Solutions.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
