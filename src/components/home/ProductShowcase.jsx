"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";
import { fadeUp, staggerContainer, smoothTransition } from "@/lib/animations";

// Derived from the existing catalogue — no duplicate product data.
const featuredApis = products
  .filter((product) => product.category === "API")
  .slice(0, 3);

const featuredIntermediates = products
  .filter((product) => product.category === "Intermediate")
  .slice(0, 3);

function ShowcaseHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={smoothTransition}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE9E0] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087443] sm:text-sm">
        <span className="h-2 w-2 rounded-full bg-[#FF7900]" />
        {eyebrow}
      </span>

      <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#172B24] sm:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#64748B]">
        {description}
      </p>
    </motion.div>
  );
}

function ViewAllButton({ href, children }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={smoothTransition}
      className="mt-10 flex justify-center"
    >
      <Link
        href={href}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#087443] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#065D36]"
      >
        {children} <FaArrowRight />
      </Link>
    </motion.div>
  );
}

function ShowcaseGrid({ items }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 md:grid-cols-3 md:gap-6">
      {items.map((product, index) => (
        <ProductCard
          key={`${product.category}-${product.id}`}
          product={product}
          index={index}
          reduceMotion={reduceMotion}
        />
      ))}
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="bg-[#F5F9F6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Featured APIs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <ShowcaseHeader
            eyebrow="Pharmaceutical Ingredients"
            title={
              <>
                Active Pharmaceutical{" "}
                <span className="text-[#087443]">Ingredients (APIs)</span>
              </>
            }
            description="Explore our range of Active Pharmaceutical Ingredients (APIs) for pharmaceutical manufacturing. Contact our team for availability, grades, specifications, and supply details."
          />

          <ShowcaseGrid items={featuredApis} />

          <ViewAllButton href="/products?category=API">
            Explore All APIs
          </ViewAllButton>
        </motion.div>

        <div className="my-16 border-t border-[#E5ECE7] sm:my-20" />

        {/* Featured Pharmaceutical Intermediates */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <ShowcaseHeader
            eyebrow="Pharmaceutical Intermediates"
            title={
              <>
                Pharmaceutical{" "}
                <span className="text-[#087443]">Intermediates</span>
              </>
            }
            description="Source pharmaceutical intermediates for your manufacturing and procurement requirements. Contact our team for product specifications, availability, and supply information."
          />

          <ShowcaseGrid items={featuredIntermediates} />

          <ViewAllButton href="/products?category=Intermediate">
            Explore All Intermediates
          </ViewAllButton>
        </motion.div>
      </div>
    </section>
  );
}
