import Link from "next/link";

const loanPrograms = [
  { name: "Home Purchase", href: "/purchase" },
  { name: "Refinance", href: "/refinance" },
  { name: "Down Payment Assistance", href: "/down-payment-assistance" },
  { name: "Investor Loans", href: "/investors" },
  { name: "New Construction", href: "/new-construction" },
];

const company = [
  { name: "About Us", href: "/#about" },
  { name: "Local Favorites", href: "/local-favorites" },
  { name: "Reviews", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                <span className="text-primary-900 font-display font-bold text-lg">
                  M
                </span>
              </div>
              <div>
                <div className="font-display text-lg font-semibold leading-tight">
                  Martin Mortgage
                </div>
                <div className="text-xs text-gold-400 font-medium tracking-wider uppercase">
                  Group
                </div>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              Your trusted mortgage partner in Raleigh, NC. We&apos;re
              committed to finding the right loan for your unique situation with
              competitive rates and personalized service.
            </p>
            <p className="text-primary-300 text-sm">
              <a href="tel:9192384934" className="hover:text-gold-400 transition-colors">
                (919) 238-4934
              </a>
            </p>
          </div>

          {/* Loan Programs */}
          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Loan Programs
            </h3>
            <ul className="space-y-3">
              {loanPrograms.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href as any}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href as any}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serving Areas */}
          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Areas We Serve
            </h3>
            <ul className="space-y-3 text-sm text-primary-200">
              <li>Raleigh, NC</li>
              <li>Durham, NC</li>
              <li>Cary, NC</li>
              <li>Chapel Hill, NC</li>
              <li>Wake Forest, NC</li>
              <li>All of North Carolina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-300 text-xs">
              &copy; {new Date().getFullYear()} Martin Mortgage Group. All
              rights reserved. NMLS #{" "}
              <span className="text-primary-200">Insert NMLS#</span>. Equal
              Housing Lender.
            </p>
            <p className="text-primary-400 text-xs">
              Raleigh, North Carolina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
