"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGlobeAsia,
  FaCheckCircle,
  FaPaperPlane,
  FaFlask,
} from "react-icons/fa";
import { scaleIn, staggerContainer, smoothTransition } from "@/lib/animations";

const contactDetails = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    detail: "+91 96406 84037",
    href: "tel:+919640684037",
    description: "Contact us for business enquiries.",
  },
  {
    icon: FaPhoneAlt,
    title: "Office Telephone",
    detail: "040-45200155",
    href: "tel:04045200155",
    description: "Reach our office by telephone.",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    detail: "divinpharmapurchase1@gmail.com",
    href: "mailto:divinpharmapurchase1@gmail.com",
    description: "Send your product or supply enquiry.",
  },
];

const businessHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "API Products",
    product: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      // Connect this form to your backend/API route before publishing.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your enquiry. Please try again.",
        );
      }

      setStatus({
        loading: false,
        error: "",
        success:
          result.message || "Your enquiry has been submitted successfully.",
      });

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        enquiryType: "API Products",
        product: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        error:
          error.message ||
          "Something went wrong. Please contact us by email or phone.",
        success: "",
      });
    }
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#10291F]">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#087443]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#FF7900]/15 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <motion.div
            variants={scaleIn}
            transition={smoothTransition}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF7900]" />
            <span className="text-sm font-semibold tracking-wide text-[#FFB16D]">
              CONTACT DIVIN PHARMA
            </span>
          </motion.div>

          <motion.h1
            variants={scaleIn}
            transition={smoothTransition}
            className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Let's Discuss Your{" "}
            <span className="text-[#FF9A42]">Pharmaceutical Requirements</span>
          </motion.h1>

          <motion.p
            variants={scaleIn}
            transition={smoothTransition}
            className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
          >
            Contact our team for enquiries about APIs, pharmaceutical
            intermediates, domestic supply, and international export
            requirements.
          </motion.p>

          <motion.div
            variants={scaleIn}
            transition={smoothTransition}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80"
          >
            <span className="inline-flex items-center gap-2">
              <FaCheckCircle className="text-[#FF9A42]" /> Product enquiries
            </span>
            <span className="inline-flex items-center gap-2">
              <FaCheckCircle className="text-[#FF9A42]" /> Business partnerships
            </span>
            <span className="inline-flex items-center gap-2">
              <FaCheckCircle className="text-[#FF9A42]" /> Supply coordination
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact details and enquiry form */}
      <section className="bg-[#F5F9F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-10">
          {/* Contact information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="text-sm font-bold uppercase tracking-[0.18em] text-[#087443]"
            >
              Get In Touch
            </motion.p>

            <motion.h2
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#172B24] sm:text-4xl"
            >
              We'd Be Happy to Hear From You
            </motion.h2>

            <motion.p
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-5 text-base leading-8 text-slate-600"
            >
              Have a product enquiry or a specific supply requirement? Contact
              us using the details below or send us a message through the form.
            </motion.p>

            <div className="mt-8 space-y-4">
              {contactDetails.map(
                ({ icon: Icon, title, detail, href, description }) => (
                  <motion.a
                    key={title}
                    variants={scaleIn}
                    transition={smoothTransition}
                    href={href}
                    className="group flex min-w-0 items-start gap-4 rounded-xl border border-[#E5ECE7] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#087443]/30 hover:shadow-lg sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#087443]/10 text-lg text-[#087443] transition-colors duration-300 group-hover:bg-[#087443] group-hover:text-white">
                      <Icon />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-[#172B24]">{title}</h3>
                      <p className="mt-1 break-words text-sm font-medium text-[#087443]">
                        {detail}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {description}
                      </p>
                    </div>
                    <FaArrowRight className="mt-1 shrink-0 text-sm text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#FF7900]" />
                  </motion.a>
                ),
              )}
            </div>

            {/* Office address */}
            <motion.div
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-5 rounded-xl border border-[#E5ECE7] bg-white p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF7900]/10 text-lg text-[#FF7900]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-semibold text-[#172B24]">Our Office</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    P.No. 128, Shivlok Complex, Jeedimetla, Phase-V, Dulapally
                    Road, Hyderabad – 500100, Telangana, India.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=P.No.+128+Shivlok+Complex+Jeedimetla+Phase-V+Dulapally+Road+Hyderabad+500100+Telangana+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#087443] transition-colors hover:text-[#FF7900]"
                  >
                    Get Directions <FaArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Business hours */}
            <motion.div
              variants={scaleIn}
              transition={smoothTransition}
              className="mt-5 rounded-xl border border-[#E5ECE7] bg-white p-5 sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#087443]/10 text-lg text-[#087443]">
                  <FaClock />
                </div>
                <h3 className="font-semibold text-[#172B24]">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map(({ day, hours }) => (
                  <div
                    key={day}
                    className="flex flex-wrap justify-between gap-2 border-b border-[#E5ECE7] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-slate-600">{day}</span>
                    <span
                      className={`text-sm font-medium ${hours === "Closed" ? "text-[#FF7900]" : "text-[#172B24]"}`}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scaleIn}
            transition={smoothTransition}
            viewport={{ once: true, amount: 0.15 }}
            className="h-fit rounded-2xl border border-[#E5ECE7] bg-white p-5 shadow-xl shadow-[#172B24]/5 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087443]/10 text-xl text-[#087443]">
                <FaPaperPlane />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-[#172B24] sm:text-3xl">
                Send Us an Enquiry
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Complete the form and tell us what products or supply solutions
                you're looking for.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#172B24]"
                  >
                    Full Name <span className="text-[#FF7900]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-[#E5ECE7] bg-white px-4 py-3 text-sm text-[#172B24] outline-none transition-all placeholder:text-slate-400 focus:border-[#087443] focus:ring-4 focus:ring-[#087443]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-[#172B24]"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full rounded-lg border border-[#E5ECE7] bg-white px-4 py-3 text-sm text-[#172B24] outline-none transition-all placeholder:text-slate-400 focus:border-[#087443] focus:ring-4 focus:ring-[#087443]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#172B24]"
                  >
                    Business Email <span className="text-[#FF7900]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-[#E5ECE7] bg-white px-4 py-3 text-sm text-[#172B24] outline-none transition-all placeholder:text-slate-400 focus:border-[#087443] focus:ring-4 focus:ring-[#087443]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#172B24]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-[#E5ECE7] bg-white px-4 py-3 text-sm text-[#172B24] outline-none transition-all placeholder:text-slate-400 focus:border-[#087443] focus:ring-4 focus:ring-[#087443]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="enquiryType"
                  className="mb-2 block text-sm font-semibold text-[#172B24]"
                >
                  Enquiry Type <span className="text-[#FF7900]">*</span>
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#E5ECE7] bg-white px-4 py-3 text-sm text-[#172B24] outline-none transition-all focus:border-[#087443] focus:ring-4 focus:ring-[#087443]/10"
                >
                  <option>API Products</option>
                  <option>Pharmaceutical Intermediates</option>
                  <option>Domestic Supply</option>
                  <option>International Exports</option>
                  <option>Business Partnership</option>
                  <option>Other Enquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="product"
                  className="mb-2 block text-sm font-semibold text-[#172B24]"
                >
                  Product Name / CAS Number
                </label>
                <input
                  id="product"
                  name="product"
                  type="text"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Enter product name or CAS number (if applicable)"
                  className="w-full rounded-lg border border-[#E5ECE7] bg-white px-4 py-3 text-sm text-[#172B24] outline-none transition-all placeholder:text-slate-400 focus:border-[#087443] focus:ring-4 focus:ring-[#087443]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#172B24]"
                >
                  Your Message <span className="text-[#FF7900]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your product, grade, quantity, or supply requirements..."
                  className="w-full resize-y rounded-lg border border-[#E5ECE7] bg-white px-4 py-3 text-sm leading-7 text-[#172B24] outline-none transition-all placeholder:text-slate-400 focus:border-[#087443] focus:ring-4 focus:ring-[#087443]/10"
                />
              </div>

              {status.error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm leading-6 text-red-700"
                >
                  {status.error}
                </p>
              )}

              {status.success && (
                <p
                  role="status"
                  className="rounded-lg border border-[#087443]/20 bg-[#087443]/5 p-3 text-sm leading-6 text-[#087443]"
                >
                  {status.success}
                </p>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#087443] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#065C35] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.loading ? "Sending Enquiry..." : "Submit Enquiry"}
                {!status.loading && (
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                Your information will be used to respond to your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleIn}
          transition={smoothTransition}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-[#10291F] p-7 sm:p-9 md:flex-row md:items-center lg:p-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#FF9A42]">
              <FaGlobeAsia /> Let's Build a Partnership
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
              Have a specific product requirement?
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
              Browse our API and pharmaceutical intermediates catalogue to
              identify products for your next enquiry.
            </p>
          </div>
          <Link
            href="/products"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#FF7900] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E86D00]"
          >
            Browse Products{" "}
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
