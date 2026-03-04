"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Loan Programs",
    href: "#",
    children: [
      { name: "Purchase", href: "/purchase" },
      { name: "Refinance", href: "/refinance" },
      { name: "Down Payment Assistance", href: "/down-payment-assistance" },
      { name: "Investors", href: "/investors" },
      { name: "New Construction", href: "/new-construction" },
    ],
  },
  { name: "Local Favorites", href: "/local-favorites" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-warm-200 sticky top-0 z-50">
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">
                M
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-semibold text-primary-800 leading-tight">
                Martin Mortgage
              </span>
              <span className="text-xs text-gold-500 font-medium tracking-wider uppercase">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="text-primary-700 hover:text-primary-500 font-medium transition-colors flex items-center gap-1">
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-warm-200 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href as any}
                          className="block px-5 py-3 text-primary-700 hover:bg-warm-100 hover:text-primary-500 transition-colors"
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
                  className="text-primary-700 hover:text-primary-500 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link href="/purchase" className="btn-gold text-sm px-6 py-2.5">
              Get Pre-Qualified
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-primary-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-warm-200 pt-4">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="space-y-1">
                  <span className="block px-3 py-2 text-xs font-semibold text-gold-500 uppercase tracking-wider">
                    {item.name}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href as any}
                      className="block pl-6 pr-3 py-2 text-primary-700 hover:text-primary-500"
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
                  className="block px-3 py-2 text-primary-700 hover:text-primary-500 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="mt-4 px-3">
              <Link
                href="/purchase"
                className="btn-gold w-full text-sm text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Pre-Qualified
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
