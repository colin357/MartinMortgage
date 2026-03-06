"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Loan Programs",
    href: "#",
    children: [
      { name: "Purchase",                   href: "/purchase" },
      { name: "Refinance",                  href: "/refinance" },
      { name: "Down Payment Assistance",    href: "/down-payment-assistance" },
      { name: "Investors",                  href: "/investors" },
      { name: "New Construction",           href: "/new-construction" },
      { name: "Adams Homes",               href: "/adams-homes" },
    ],
  },
  { name: "Local Favorites", href: "/local-favorites" },
  { name: "Reviews",         href: "/#testimonials" },
];

function LogoImage() {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <Image
        src="/images/logo.png"
        alt="Martin Mortgage Group"
        width={240}
        height={64}
        priority
        className="h-14 w-auto object-contain"
        onError={() => setImgError(true)}
      />
    );
  }

  // Text fallback when no logo image is present
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white font-black text-base">M</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-black text-lg text-primary-800 tracking-tight uppercase">
          Martin Mortgage
        </span>
        <span className="text-xs text-accent-500 font-bold tracking-widest uppercase">
          Group
        </span>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* ── Top announcement bar ── */}
      <div className="bg-accent-400">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-white text-sm font-semibold">
            <Link
              href="/purchase"
              className="hover:underline tracking-wide uppercase text-xs"
            >
              Apply Now
            </Link>
            <a
              href="tel:9196129978"
              className="flex items-center gap-2 hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (919) 612-9978
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo — drop your logo.png into /public/images/logo.png */}
            <Link href="/" className="flex items-center">
              <LogoImage />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) =>
                item.children ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="text-gray-700 hover:text-primary-700 font-semibold transition-colors flex items-center gap-1 text-sm uppercase tracking-wide">
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href as any}
                            className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors font-medium text-sm"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href as any}
                    className="text-gray-700 hover:text-primary-700 font-semibold transition-colors text-sm uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link href="/purchase" className="btn-primary text-sm px-6 py-2.5">
                Get Preapproved
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-6 border-t border-gray-100 pt-4">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="space-y-1">
                    <span className="block px-3 py-2 text-xs font-bold text-accent-500 uppercase tracking-widest">
                      {item.name}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href as any}
                        className="block pl-6 pr-3 py-2 text-gray-700 hover:text-primary-700 font-medium text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href as any}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-700 font-semibold text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="mt-4 px-3">
                <Link
                  href="/purchase"
                  className="btn-primary w-full text-sm text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Preapproved
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
