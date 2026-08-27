"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CONTACT, buyPages, primaryNav } from "@/lib/mmg-nav";

export default function MmgNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Click-outside and Escape close the "Buy" dropdown
  useEffect(() => {
    if (!dropdownOpen) return;

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setDropdownOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdownOpen]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }

  // Small grace period so the pointer can cross the gap to the panel
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 140);
  }

  // On a hover device the panel is already open by the time the click lands,
  // so a plain toggle would close it the moment you press the trigger.
  // There, click only opens; Escape and click-outside close.
  function onTriggerClick() {
    const hoverDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches;
    setDropdownOpen((open) => (hoverDevice ? true : !open));
  }

  const isCurrent = (href: string) =>
    href.startsWith("/#") ? false : pathname === href;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <nav>
        <div className="nav-inner">
          <Link className="logo logo-img" href="/">
            <Image
              src="/images/mmg/mmg-logo.png"
              alt="Martin Mortgage Group"
              width={480}
              height={173}
              priority
            />
            <span>Fairway Home Mortgage</span>
          </Link>

          <ul className="nav-links">
            {primaryNav.map((item) =>
              item.children ? (
                <li
                  key={item.name}
                  ref={dropdownRef}
                  className={`has-drop${dropdownOpen ? " open" : ""}`}
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    onClick={onTriggerClick}
                  >
                    {item.name}
                    <span className="caret" aria-hidden="true">
                      ▼
                    </span>
                  </button>
                  <ul className="dropdown">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href as never}
                          className={isCurrent(child.href) ? "is-current" : ""}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    href={item.href as never}
                    className={isCurrent(item.href) ? "is-current" : ""}
                  >
                    {item.name}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="nav-cta">
            <a className="phone" href={CONTACT.phoneHref}>
              {CONTACT.phoneDots}
            </a>
            {/* Label shortens below 640px so the nav row doesn't overflow */}
            <Link className="btn btn-primary nav-btn" href="/#contact">
              <span className="label-full">Start a Conversation</span>
              <span className="label-short">Let&apos;s Talk</span>
            </Link>
          </div>

          <button
            className="menu-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <Link href="/mmg-way">The MMG Way</Link>
        <div className="m-group">Buy</div>
        {buyPages.map((page) => (
          <Link key={page.href} className="m-sub" href={page.href as never}>
            {page.name}
          </Link>
        ))}
        <Link href="/homeowners">Homeowners</Link>
        <Link href="/calculators">Calculators</Link>
        <Link href="/financial-literacy">Learn</Link>
        <Link href="/meet-michael">About</Link>
        <Link href="/#reviews">Reviews</Link>
        <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
        <Link href="/#contact" style={{ color: "var(--forest)" }}>
          Start a Conversation →
        </Link>
      </div>
    </>
  );
}
