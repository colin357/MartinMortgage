/**
 * Single source of truth for the MMG site's navigation and page list.
 * Used by the header, the mobile menu, the footer and app/sitemap.ts.
 */

export type MmgLink = {
  name: string;
  href: string;
  /** Short description used in the "Buy" dropdown and on card grids. */
  blurb?: string;
};

/** The six buyer pages that hang off the "Buy" dropdown. */
export const buyPages: MmgLink[] = [
  {
    name: "First-Time Buyers",
    href: "/first-time-buyers",
    blurb: "I need someone to show me where to start.",
  },
  {
    name: "Move-Up Buyers",
    href: "/move-up-buyers",
    blurb: "I already own and need a strategy for what's next.",
  },
  {
    name: "New Construction & Renovation",
    href: "/new-construction-renovation",
    blurb: "I'm building, buying new, or renovating.",
  },
  { name: "VA Buyers", href: "/va-buyers", blurb: "I've earned this benefit." },
  {
    name: "Relocation",
    href: "/relocation",
    blurb: "I'm moving to the Triangle.",
  },
  {
    name: "Self-Employed & Investors",
    href: "/flexible-financing",
    blurb: "My income doesn't fit in a box.",
  },
];

/** Top-level nav. */
export const primaryNav: (MmgLink & { children?: MmgLink[] })[] = [
  { name: "Buy", href: "/first-time-buyers", children: buyPages },
  { name: "Homeowners", href: "/homeowners" },
  { name: "Calculators", href: "/calculators" },
  { name: "About", href: "/meet-michael" },
];

/** Every MMG route, for the sitemap. */
export const mmgRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/mmg-way", priority: 0.9 },
  { path: "/first-time-buyers", priority: 0.9 },
  { path: "/move-up-buyers", priority: 0.9 },
  { path: "/meet-michael", priority: 0.8 },
  { path: "/homeowners", priority: 0.8 },
  { path: "/calculators", priority: 0.8 },
  { path: "/new-construction-renovation", priority: 0.8 },
  { path: "/va-buyers", priority: 0.8 },
  { path: "/flexible-financing", priority: 0.8 },
  { path: "/relocation", priority: 0.7 },
  { path: "/financial-literacy", priority: 0.7 },
];

export const CONTACT = {
  phone: "919-612-9978",
  phoneDots: "919·612·9978",
  phoneHref: "tel:9196129978",
  email: "michael.martin@fairwaymc.com",
  web: "YourNCLender.com",
  webHref: "https://www.YourNCLender.com",
  preApproval: "https://fairway.tidalwave.ai/login",
  nmls: "NMLS #131445",
} as const;
