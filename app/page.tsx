import Link from "next/link";
import FAQ from "@/components/FAQ";

const services = [
  {
    title: "Home Purchase",
    description:
      "Whether you\u2019re a first-time buyer or upgrading, we\u2019ll find the perfect loan for your dream home in the Triangle area.",
    href: "/purchase",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Refinance",
    description:
      "Lower your rate, reduce your term, or tap into your home\u2019s equity. We\u2019ll help you find the best refinance option.",
    href: "/refinance",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Down Payment Assistance",
    description:
      "Programs available for qualified buyers in North Carolina to help cover your down payment and closing costs.",
    href: "/down-payment-assistance",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Investment Properties",
    description:
      "Financing solutions for real estate investors. DSCR loans, fix-and-flip, and rental property mortgages.",
    href: "/investors",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "New Construction",
    description:
      "Building your dream home? We offer construction-to-permanent loans and new build financing.",
    href: "/new-construction",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Sarah & James P.",
    text: "Michael and his team made our first home purchase so smooth. They walked us through every step and found us an incredible rate. We couldn\u2019t be happier!",
    location: "Cary, NC",
  },
  {
    name: "David T.",
    text: "I\u2019ve refinanced twice with Martin Mortgage Group. Their process is fast, transparent, and they always find ways to save me money. Highly recommend.",
    location: "Raleigh, NC",
  },
  {
    name: "Amanda R.",
    text: "As a first-time buyer, I was overwhelmed. The Martin Mortgage team made it easy, explained everything clearly, and got me into my dream home with down payment assistance!",
    location: "Durham, NC",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "2,500+", label: "Families Served" },
  { value: "4.9\u2605", label: "Client Rating" },
  { value: "21", label: "Day Avg. Close" },
];

const homeFAQ = [
  {
    question: "What types of home loans does Martin Mortgage Group offer in Raleigh, NC?",
    answer:
      "Martin Mortgage Group offers a comprehensive range of mortgage products including conventional loans, FHA loans, VA loans, USDA loans, jumbo loans, new construction financing, investment property loans, and down payment assistance programs. We serve all of North Carolina with a focus on the Raleigh-Durham Triangle area.",
  },
  {
    question: "How do I get pre-qualified for a mortgage in North Carolina?",
    answer:
      "Getting pre-qualified with Martin Mortgage Group is quick and easy. You can start right on our website by answering a few simple questions about your financial situation, or give us a call at (919) 238-4934. Pre-qualification typically takes just a few minutes and helps you understand how much home you can afford.",
  },
  {
    question: "What credit score do I need to buy a home in Raleigh?",
    answer:
      "The minimum credit score depends on the loan type. FHA loans may accept scores as low as 580, while conventional loans typically require 620 or higher. VA and USDA loans have flexible credit requirements. Our team specializes in finding solutions for a wide range of credit profiles \u2014 contact us to discuss your specific situation.",
  },
  {
    question: "Are there down payment assistance programs available in North Carolina?",
    answer:
      "Yes! North Carolina offers several down payment assistance programs including the NC Home Advantage Mortgage with up to 5% down payment help, the NC 1st Home Advantage Down Payment, and various county-specific programs in Wake, Durham, and Orange counties. We\u2019ll help you find the programs you qualify for.",
  },
  {
    question: "How long does the mortgage process take from application to closing?",
    answer:
      "At Martin Mortgage Group, our average closing time is 21 days, though the timeline can vary based on the loan type and complexity. We leverage technology and a streamlined process to ensure your home purchase or refinance closes as quickly as possible without sacrificing attention to detail.",
  },
  {
    question: "What are current mortgage rates in Raleigh, NC?",
    answer:
      "Mortgage rates change daily based on market conditions. At Martin Mortgage Group, we shop multiple lenders to ensure you get the most competitive rate available. Contact us today for a free, personalized rate quote with no obligation. We\u2019ll show you exactly what you qualify for.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-400/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-gold-400 rounded-full" />
              <span className="text-gold-300 text-sm font-medium">
                Raleigh&apos;s Trusted Mortgage Team
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Home Financing
              <span className="block text-gold-400">Made Simple.</span>
            </h1>
            <p className="text-primary-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Martin Mortgage Group delivers competitive rates, personalized
              guidance, and a streamlined process so you can focus on what
              matters \u2014 finding your perfect home in the Triangle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/purchase" className="btn-gold text-base">
                Get Pre-Qualified Today
              </Link>
              <a href="tel:9192384934" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white text-base">
                Call (919) 238-4934
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-warm-200">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Us */}
      <section id="about" className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-800 mt-2 mb-6">
                A Mortgage Experience Built Around You
              </h2>
              <p className="text-primary-600 leading-relaxed mb-6">
                Led by Michael Martin, the Martin Mortgage Group has been
                helping families across the Triangle achieve their
                homeownership dreams for over 15 years. We believe every
                borrower deserves transparent, honest guidance and access to
                the most competitive rates in the market.
              </p>
              <p className="text-primary-600 leading-relaxed mb-8">
                Whether you&apos;re buying your first home in Raleigh,
                refinancing in Durham, or investing in property across North
                Carolina, our team provides the expertise and personal touch
                that makes all the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-800 text-sm">Competitive Rates</div>
                    <div className="text-primary-500 text-sm">We shop multiple lenders for you</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-800 text-sm">Fast Closings</div>
                    <div className="text-primary-500 text-sm">21-day average close time</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-warm-100 rounded-2xl p-8 md:p-12">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="w-24 h-24 bg-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-display text-3xl font-bold">MM</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary-800">
                    Michael Martin
                  </h3>
                  <p className="text-gold-500 font-medium text-sm mt-1">
                    Founder & Senior Loan Officer
                  </p>
                  <p className="text-primary-500 text-sm mt-3">NMLS# Insert Number</p>
                  <a
                    href="tel:9192384934"
                    className="btn-primary mt-6 w-full text-sm"
                  >
                    Call Michael Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Loan Programs */}
      <section className="section-padding bg-warm-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              Our Programs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-800 mt-2 mb-4">
              Loan Programs for Every Situation
            </h2>
            <p className="text-primary-500 text-lg max-w-2xl mx-auto">
              From first-time buyers to seasoned investors, we have the right
              financing solution for your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href as any}
                className="group bg-white rounded-xl border border-warm-200 p-8 hover:shadow-xl hover:border-gold-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-5 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-gold-500 font-medium text-sm group-hover:text-gold-600 flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}

            {/* CTA Card */}
            <div className="bg-primary-700 rounded-xl p-8 flex flex-col justify-center text-center">
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                Not Sure Which Loan Is Right?
              </h3>
              <p className="text-primary-200 text-sm mb-6">
                Our team will analyze your situation and recommend the best
                program for your goals.
              </p>
              <a href="tel:9192384934" className="btn-gold mx-auto text-sm">
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-800 mt-2 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-warm-50 rounded-xl p-8 border border-warm-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-primary-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-primary-800 text-sm">
                    {t.name}
                  </div>
                  <div className="text-primary-400 text-xs">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={homeFAQ}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about getting a mortgage in Raleigh, NC"
      />

      {/* Contact / CTA */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Home Journey?
          </h2>
          <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto">
            Get pre-qualified in minutes. Our team is standing by to help you
            find the right mortgage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/purchase" className="btn-gold text-base">
              Get Pre-Qualified Now
            </Link>
            <a href="tel:9192384934" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white text-base">
              Call (919) 238-4934
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
