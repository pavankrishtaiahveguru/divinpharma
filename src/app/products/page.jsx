"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaCircleCheck,
  FaFlask,
  FaGlobe,
  FaMagnifyingGlass,
  FaMessage,
  FaShieldHalved,
  FaTruckFast,
  FaXmark,
} from "react-icons/fa6";
import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";

const PAGE_SIZE = 15;

const BRAND = {
  orange: "#FF7900",
  green: "#087443",
  mint: "#F5F9F6",
  border: "#E5ECE7",
  dark: "#172B24",
};

const categories = [
  { label: "All Products", value: "All" },
  { label: "Active Pharmaceutical Ingredients", value: "API" },
  { label: "Pharmaceutical Intermediates", value: "Intermediate" },
];

const benefits = [
  {
    icon: FaShieldHalved,
    title: "Quality Focus",
    text: "Quality-conscious sourcing",
  },
  {
    icon: FaTruckFast,
    title: "Supply Support",
    text: "Domestic supply solutions",
  },
  { icon: FaGlobe, title: "Global Reach", text: "International enquiries" },
  {
    icon: FaCircleCheck,
    title: "Reliable Service",
    text: "Professional coordination",
  },
];

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsCatalog />
    </Suspense>
  );
}

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("az");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // The category is derived from the URL (?category=API or ?category=Intermediate),
  // so deep links, links, and browser navigation always stay in sync.
  const urlCategory = searchParams.get("category");
  const category = categories.some((item) => item.value === urlCategory)
    ? urlCategory
    : "All";

  const handleCategoryChange = (value) => {
    setVisibleCount(PAGE_SIZE);

    const params = new URLSearchParams(searchParams.toString());
    if (value === "All") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSortChange = (value) => {
    setSort(value);
    setVisibleCount(PAGE_SIZE);
  };

  const resetAllFilters = () => {
    setSearch("");
    setSort("az");
    handleCategoryChange("All");
  };

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products
      .filter((product) => category === "All" || product.category === category)
      .filter((product) => {
        const searchable = [
          product.name,
          product.cas,
          product.category,
          ...(product.grades || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchable.includes(query);
      })
      .sort((a, b) =>
        sort === "za"
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name),
      );
  }, [search, category, sort]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const categoryCount = (value) =>
    value === "All"
      ? products.length
      : products.filter((product) => product.category === value).length;

  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="overflow-x-clip bg-white text-[#172B24]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#10291F]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,116,67,0.45),transparent_55%),linear-gradient(115deg,#10291F_0%,#173A2B_58%,#10291F_100%)]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10 sm:h-[460px] sm:w-[460px]" />
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#FF7900]/20 sm:h-[340px] sm:w-[340px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-white/65">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <FaArrowRight className="text-[10px] text-[#FF7900]" />
              <span className="text-white">Products</span>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              <FaFlask className="text-[#FF7900]" />
              Our Product Portfolio
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Pharmaceutical
              <span className="block text-[#FF7900]">Products</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Explore our portfolio of Active Pharmaceutical Ingredients (APIs)
              and pharmaceutical intermediates. Contact our team for product
              availability, grades, specifications, and supply enquiries.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#product-catalog"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FF7900] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#e66d00]"
              >
                Explore Products <FaArrowRight />
              </a>
              <a
                href="https://wa.me/919640684037?text=Hello%20DIVIN%20PHARMA%2C%20I%20would%20like%20to%20enquire%20about%20your%20product%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <FaMessage /> General Enquiry
              </a>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  animate="visible"
                  variants={reveal}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : 0.1 + index * 0.08,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-5"
                >
                  <Icon className="text-xl text-[#FF7900]" />
                  <h2 className="mt-4 text-sm font-bold text-white sm:text-base">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-white/55 sm:text-sm">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="product-catalog" className="bg-[#F5F9F6] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087443]">
                Explore Our Range
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#172B24] sm:text-4xl">
                Our Product Catalog
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64746B] sm:text-base">
                Search by product name, CAS number, or grade and send your
                enquiry directly to our team.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-[#D5E2D9] bg-white px-4 py-2 text-sm font-semibold text-[#087443] lg:hidden"
            >
              {mobileFiltersOpen ? <FaXmark /> : <FaMagnifyingGlass />}
              {mobileFiltersOpen ? "Close filters" : "Search & Filter"}
            </button>
          </div>

          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
            {/* Filters */}
            <aside
              className={`${mobileFiltersOpen ? "block" : "hidden"} rounded-2xl border border-[#E5ECE7] bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-108px)] lg:self-start lg:overflow-y-auto`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#172B24]">Product Categories</h3>
                <FaFlask className="text-[#087443]" />
              </div>

              <div className="mt-5 space-y-2">
                {categories.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      handleCategoryChange(item.value);
                      setMobileFiltersOpen(false);
                    }}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm transition-colors ${category === item.value ? "bg-[#087443] font-semibold text-white" : "text-[#52645A] hover:bg-[#F5F9F6] hover:text-[#087443]"}`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${category === item.value ? "bg-white/15 text-white" : "bg-[#F0F5F1] text-[#52645A]"}`}
                    >
                      {categoryCount(item.value)}
                    </span>
                  </button>
                ))}
              </div>

              <div className="my-6 border-t border-[#E5ECE7]" />

              <label
                htmlFor="product-search"
                className="text-sm font-bold text-[#172B24]"
              >
                Search Products
              </label>
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-[#DDE7E0] bg-white px-3 focus-within:border-[#087443]">
                <FaMagnifyingGlass className="shrink-0 text-sm text-[#819087]" />
                <input
                  id="product-search"
                  type="search"
                  value={search}
                  onChange={(event) => handleSearchChange(event.target.value)}
                  placeholder="Product, CAS, or grade"
                  className="min-w-0 w-full border-0 bg-transparent py-3 text-sm text-[#172B24] outline-none placeholder:text-[#94A39A]"
                />
              </div>

              <button
                type="button"
                onClick={resetAllFilters}
                className="mt-4 w-full rounded-xl border border-[#DDE7E0] px-4 py-3 text-sm font-semibold text-[#52645A] transition-colors hover:border-[#087443] hover:text-[#087443]"
              >
                Reset Filters
              </button>

              <div className="mt-6 rounded-xl bg-[#F5F9F6] p-4">
                <p className="text-sm font-bold text-[#172B24]">
                  Need help sourcing?
                </p>
                <p className="mt-2 text-xs leading-6 text-[#64746B]">
                  Tell us the product name and requirements. Our team can
                  discuss your enquiry.
                </p>
                <a
                  href="https://wa.me/919640684037?text=Hello%20DIVIN%20PHARMA%2C%20I%20need%20help%20sourcing%20a%20pharmaceutical%20product."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#087443] hover:text-[#FF7900]"
                >
                  Contact on WhatsApp <FaArrowRight className="text-xs" />
                </a>
              </div>
            </aside>

            {/* Product results */}
            <div className="min-w-0">
              <div className="flex flex-col gap-4 rounded-2xl border border-[#E5ECE7] bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5 lg:sticky lg:top-24 lg:z-40 lg:shadow-md">
                <div>
                  <p className="text-sm font-semibold text-[#172B24]">
                    Showing {visibleProducts.length} of{" "}
                    {filteredProducts.length}{" "}
                    {filteredProducts.length === 1 ? "product" : "products"}
                  </p>
                  <p className="mt-1 text-xs text-[#819087]">
                    Product details shown as provided in the catalog
                  </p>
                </div>

                <label className="flex items-center gap-3 text-sm text-[#64746B]">
                  <span className="shrink-0">Sort by</span>
                  <select
                    value={sort}
                    onChange={(event) => handleSortChange(event.target.value)}
                    className="min-h-10 rounded-lg border border-[#DDE7E0] bg-white px-3 text-sm font-medium text-[#172B24] outline-none focus:border-[#087443]"
                  >
                    <option value="az">Name (A–Z)</option>
                    <option value="za">Name (Z–A)</option>
                  </select>
                </label>
              </div>

              {filteredProducts.length > 0 ? (
                <>
                  <div className="mt-5 grid grid-cols-1 gap-3 min-[375px]:grid-cols-2 sm:gap-4 xl:grid-cols-3">
                    {visibleProducts.map((product, index) => (
                      <ProductCard
                        key={`${product.category}-${product.id}`}
                        product={product}
                        index={index}
                        reduceMotion={reduceMotion}
                      />
                    ))}
                  </div>

                  {/* View More / Show Less */}
                  {(visibleCount < filteredProducts.length ||
                    visibleCount > PAGE_SIZE) && (
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      {visibleCount < filteredProducts.length && (
                        <button
                          type="button"
                          onClick={() =>
                            setVisibleCount((current) =>
                              Math.min(
                                current + PAGE_SIZE,
                                filteredProducts.length,
                              ),
                            )
                          }
                          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#087443] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#065D36] sm:w-auto"
                        >
                          View More <FaArrowRight />
                        </button>
                      )}

                      {visibleCount > PAGE_SIZE && (
                        <button
                          type="button"
                          onClick={() => {
                            setVisibleCount(PAGE_SIZE);
                            document
                              .getElementById("product-catalog")
                              ?.scrollIntoView({
                                behavior: reduceMotion ? "auto" : "smooth",
                              });
                          }}
                          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#DDE7E0] bg-white px-8 py-3 text-sm font-semibold text-[#52645A] transition-colors hover:border-[#087443] hover:text-[#087443] sm:w-auto"
                        >
                          Show Less
                        </button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="mt-5 rounded-2xl border border-dashed border-[#C9D9CE] bg-white px-5 py-14 text-center sm:px-10">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF5EE] text-2xl text-[#087443]">
                    <FaFlask />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#172B24]">
                    {products.length === 0
                      ? "Product catalog ready to connect"
                      : "No matching products found"}
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#64746B]">
                    {products.length === 0
                      ? "Add the actual product names, CAS numbers, categories, and grades from your Excel spreadsheet to display your catalog here."
                      : "Try another product name, CAS number, grade, or category. You can also reset the filters."}
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={resetAllFilters}
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#DDE7E0] px-5 py-3 text-sm font-semibold text-[#52645A] hover:border-[#087443] hover:text-[#087443]"
                    >
                      Clear Filters
                    </button>
                    <a
                      href="https://wa.me/919640684037?text=Hello%20DIVIN%20PHARMA%2C%20I%20would%20like%20to%20enquire%20about%20your%20available%20APIs%20and%20pharmaceutical%20intermediates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#FF7900] px-5 py-3 text-sm font-bold text-white hover:bg-[#E66D00]"
                    >
                      Ask About Products <FaArrowRight />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#10291F] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-4 -top-12 h-48 w-48 rounded-full border border-[#FF7900]/20" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7900]">
                Have a specific requirement?
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Let&apos;s Find the Right
                <span className="block text-[#FF7900]">Product for You</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Contact DIVIN PHARMA for enquiries about APIs, pharmaceutical
                intermediates, product specifications, and domestic or
                international supply requirements.
              </p>
            </div>

            <a
              href="https://wa.me/919640684037?text=Hello%20DIVIN%20PHARMA%2C%20I%20would%20like%20to%20discuss%20a%20product%20sourcing%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#FF7900] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#E66D00]"
            >
              Send an Enquiry <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
