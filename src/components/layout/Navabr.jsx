"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  const enterTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: "easeOut" };

  const linkClass =
    "relative py-2 text-sm font-semibold text-[#263B30] transition-colors duration-300 hover:text-[#087443]";

  return (
    <motion.header
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={enterTransition}
      className="sticky top-0 z-50 w-full border-b border-[#E5ECE7] bg-white/95 shadow-sm backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: reduceMotion ? 1 : 1.025 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <Link
            href="/"
            onClick={(event) => {
              closeMenu();
              if (pathname === "/") {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <Image
              src="/logo/logo.png"
              alt="Divin Pharma logo"
              width={60}
              height={60}
              priority
              className="h-11 w-11 object-contain sm:h-14 sm:w-14"
            />
            <div className="leading-tight">
              <span className="block text-lg font-extrabold tracking-wide text-[#087443] sm:text-2xl">
                DIVIN <span className="text-[#FF7900]">PHARMA</span>
              </span>
              <span className="mt-1 block text-[8px] font-medium tracking-[0.1em] text-[#64746B] sm:text-[10px] sm:tracking-[0.13em]">
                APIs & PHARMACEUTICAL INTERMEDIATES
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...enterTransition,
                delay: reduceMotion ? 0 : 0.1 + index * 0.08,
              }}
            >
              <Link href={link.href} className={`${linkClass} group`}>
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-[#FF7900]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.a
          href="tel:+919640684037"
          whileHover={{
            y: reduceMotion ? 0 : -2,
            scale: reduceMotion ? 1 : 1.025,
          }}
          whileTap={{ scale: reduceMotion ? 1 : 0.97 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="hidden items-center gap-2 rounded-lg bg-[#087443] px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-green-900/10 transition-colors hover:bg-[#065B35] lg:inline-flex xl:px-5"
        >
          <Phone size={16} />
          Talk to Us
          <ArrowUpRight size={15} className="text-orange-200" />
        </motion.a>

        {/* Mobile Toggle */}
        <motion.button
          type="button"
          whileTap={{ scale: reduceMotion ? 1 : 0.9 }}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5ECE7] text-[#087443] lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "menu"}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.15 }}
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.28,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-[#E5ECE7] bg-white lg:hidden"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -5 }}
              className="mx-auto flex max-w-7xl flex-col px-4 pb-5 pt-3 sm:px-6"
            >
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.2,
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-3 text-sm font-semibold text-[#263B30] transition-colors hover:bg-[#F5F9F6] hover:text-[#087443]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="tel:+919640684037"
                onClick={closeMenu}
                whileTap={{ scale: reduceMotion ? 1 : 0.98 }}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#087443] px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#065B35]"
              >
                <Phone size={17} />
                Call +91 96406 84037
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
