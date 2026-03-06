import Link from "next/link";
import FAQ from "@/components/FAQ";
import { HeroImage, HeadshotImage } from "@/components/HeroImage";
import AnimateIn from "@/components/AnimateIn";
import TestimonialSlider from "@/components/TestimonialSlider";

const services = [
  {
    title: "Home Purchase",
    description:
      "Whether you're a first-time buyer or upgrading, we'll find the perfect loan for your dream home in the Triangle area.",
    href: "/purchase",
    iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Refinance",
    description:
      "Lower your rate, reduce your term, or tap into your home's equity. We'll help you find the best refinance option.",
    href: "/refinance",
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Down Payment Assistance",
    description:
      "Programs available for qualified buyers in North Carolina to help cover your down payment and closing costs.",
    href: "/down-payment-assistance",
    iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Investment Properties",
    description:
      "Financing solutions for real estate investors. DSCR loans, fix-and-flip, and rental property mortgages.",
    href: "/investors",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "New Construction",
    description:
      "Building your dream home? We offer construction-to-permanent loans and new build financing.",
    href: "/new-construction",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

const testimonials = [
  {
    name: "Amanda Viele",
    text: "Nicole Blakeman and the Michael Martin Mortgage Group are an outstanding team to work with. They are organized, communicative, and thorough—always going the extra mile to get the job done. Their processes are smooth, and they make every transaction feel seamless and well-coordinated. Nicole is incredibly professional, proactive, and dedicated to her clients' success. I highly recommend Nicole and the entire MMG team!",
  },
  {
    name: "Christian Holcomb",
    text: "As first-time homebuyers, working with Martin Mortgage Group was an incredible experience for us. The entire process was smooth, transparent, and stress-free from start to finish. The team was knowledgeable, patient, and always available to answer our questions. They made homeownership a reality for us with their professionalism, expertise, and genuine care.",
  },
  {
    name: "Kayla Beckman",
    text: "I had such a great experience working with Martin Mortgage Group! From start to finish, the process was incredibly smooth and stress-free. The team was professional, responsive, and always willing to take the time to explain everything clearly. They kept me updated every step of the way and truly cared about helping me find the best loan for my situation.",
  },
  {
    name: "Mollie Ward",
    text: "Martin Mortgage group was instrumental in helping our family purchase our first home and close within 3 weeks. We were buying in an extremely competitive market, and the team went above and beyond. Almost 3 years later, they are still regularly checking in with us. Lots of companies say you're like family, but Martin Mortgage group really does make good on their promise.",
  },
  {
    name: "Jennifer Batten",
    text: "I just had another smooth closing with Martin Mortgage Group. My husband and I just purchased a home and the process couldn't have gone any smoother. From application to closing, the communication and customer service was phenomenal. We were ready to close days before our appointment at the closing table! This team has earned a customer for life!",
  },
  {
    name: "Anthony Tramondo",
    text: "Martin Mortgage Group and Fairway Home Mortgage were great to work with. I was selling my home in Long Island and moving to North Carolina and needed a mortgage. Michael Martin, Nicole Blackman and their team worked very closely with us and made it easy. They were very attentive to our requests, answering all our questions. I would highly recommend Martin Mortgage Group.",
  },
  {
    name: "Tyler Hollett",
    text: "Michael, Nicole and Jodie are absolutely fantastic to work with. Simply put, this has been the easiest house closing I have ever gone through. The team is organized, communicative, and very easy to work with. It feels weird to say, but purchasing a home should not be this stress free!",
  },
];

const stats = [
  { value: "15+",    label: "Years of Experience" },
  { value: "2,500+", label: "Families Served" },
  { value: "4.9★",   label: "Client Rating" },
  { value: "21",     label: "Day Avg. Close" },
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
      "Getting pre-qualified with Martin Mortgage Group is quick and easy. You can start right on our website by answering a few simple questions about your financial situation, or give us a call at (919) 612-9978. Pre-qualification typically takes just a few minutes and helps you understand how much home you can afford.",
  },
  {
    question: "What credit score do I need to buy a home in Raleigh?",
    answer:
      "The minimum credit score depends on the loan type. FHA loans may accept scores as low as 580, while conventional loans typically require 620 or higher. VA and USDA loans have flexible credit requirements. Our team specializes in finding solutions for a wide range of credit profiles — contact us to discuss your specific situation.",
  },
  {
    question: "Are there down payment assistance programs available in North Carolina?",
    answer:
      "Yes! North Carolina offers several down payment assistance programs including the NC Home Advantage Mortgage with up to 5% down payment help, the NC 1st Home Advantage Down Payment, and various county-specific programs in Wake, Durham, and Orange counties. We'll help you find the programs you qualify for.",
  },
  {
    question: "How long does the mortgage process take from application to closing?",
    answer:
      "At Martin Mortgage Group, our average closing time is 21 days, though the timeline can vary based on the loan type and complexity. We leverage technology and a streamlined process to ensure your home purchase or refinance closes as quickly as possible without sacrificing attention to detail.",
  },
  {
    question: "What are current mortgage rates in Raleigh, NC?",
    answer:
      "Mortgage rates change daily based on market conditions. At Martin Mortgage Group, we take the time to understand your unique situation and find the right loan for you. Contact us today for a free, personalized consultation with no obligation. We'll walk you through your options and make sure you feel confident every step of the way.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── full-impact, dark background, animated entrance ── */}
      <section className="relative bg-primary-800 overflow-hidden min-h-[90vh] flex items-center">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />

        {/* Animated decorative blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Shimmer strip */}
        <div className="absolute top-0 left-0 right-0 h-1 animate-shimmer" />

        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left copy — staggered entrance */}
            <div>
              <span className="hero-fade-up hero-delay-1 inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/10">
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                <span className="text-accent-200 text-sm font-semibold">Proudly serving the Raleigh-Durham Triangle</span>
              </span>
              <h1 className="hero-fade-up hero-delay-2 text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Buying a Home Is Personal.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">
                  Your Lender Should Be Too.
                </span>
              </h1>
              <p className="hero-fade-up hero-delay-3 text-primary-100 text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
                I&apos;m Michael Martin, and I&apos;ve spent 15+ years helping families
                right here in the Triangle navigate one of the biggest decisions of
                their lives.
              </p>
              <p className="hero-fade-up hero-delay-3 text-primary-200 text-base leading-relaxed mb-10 max-w-xl">
                You deserve a mortgage expert who actually picks up the phone, explains
                every detail, and makes the whole process feel easy. That&apos;s exactly
                what we do.
              </p>
              <div className="hero-fade-up hero-delay-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/purchase"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent-400 text-white font-bold rounded-lg hover:bg-accent-500 transition-all duration-300 shadow-lg shadow-accent-400/25 hover:shadow-xl hover:shadow-accent-400/30 hover:-translate-y-0.5 text-base uppercase tracking-wide"
                >
                  Get Pre-Qualified
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="tel:9196129978"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-base backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (919) 612-9978
                </a>
              </div>

              {/* Trust badges */}
              <div className="hero-fade-up hero-delay-5 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-primary-300 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.9 Rating
                </div>
                <div className="w-px h-4 bg-primary-500 hidden sm:block" />
                <span>2,500+ Families Served</span>
                <div className="w-px h-4 bg-primary-500 hidden sm:block" />
                <span>21-Day Avg. Close</span>
              </div>
            </div>

            {/* Right — Michael photo with floating frame */}
            <div className="hero-scale hero-delay-3 relative flex justify-center lg:justify-end">
              {/* Decorative floating rings */}
              <div className="absolute -top-6 -right-6 w-72 h-72 border-2 border-accent-400/20 rounded-full animate-float-slow" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 border-2 border-primary-400/15 rounded-full animate-float" style={{ animationDelay: "1s" }} />

              {/* Glow behind photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-accent-400/10 rounded-full blur-2xl animate-pulse-glow" />
              </div>

              <div className="relative z-10 w-72 md:w-96">
                {/* Photo container with border effect */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                  <HeroImage
                    src="/images/michael.png"
                    alt="Michael Martin, Branch Manager — Martin Mortgage Group Raleigh NC"
                    className="w-full h-auto object-cover"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Michael Martin</p>
                    <p className="text-accent-300 text-xs">Founder &amp; Branch Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave / curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 80h1440V40C1200 70 960 10 720 40S240 70 0 40v40z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Stats ── animated counters */}
      <section className="bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} animation="fade-up" delay={i * 100}>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-black text-primary-700 mb-1 transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-semibold">{stat.label}</div>
                  <div className="mt-2 mx-auto w-12 h-0.5 bg-accent-400/40 rounded-full group-hover:w-20 transition-all duration-500" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-max">
          {/* Header */}
          <AnimateIn animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-accent-600 font-bold text-xs uppercase tracking-widest">Why Martin Mortgage Group</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
                One of Life&apos;s Biggest Decisions Deserves a True Expert
              </h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                When you&apos;re making the biggest purchase of your life, you shouldn&apos;t feel
                like just another file on someone&apos;s desk. At Martin Mortgage Group, you
                get a team that truly wants to help &mdash; and the time and attention to prove it.
              </p>
            </div>
          </AnimateIn>

          {/* Three-pillar layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "You Work with Real People",
                body: "No call centers, no runaround. When you call us, you talk to your dedicated mortgage expert who knows your name, your situation, and your goals.",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "We Make Time for You",
                body: "Have questions at 7 PM? Need something explained one more time? We\u2019re here. Your timeline is our timeline, and we never rush you through the process.",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "A Smooth, Stress-Free Close",
                body: "We handle the heavy lifting so you can focus on the exciting part \u2014 your new home. Our 21-day average close speaks for itself.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} animation="fade-up" delay={i * 150}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Michael card — horizontal, warmer feel */}
          <AnimateIn animation="fade-up" delay={100}>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-500">
              <div className="grid md:grid-cols-[auto_1fr] items-center">
                <div className="flex flex-col items-center justify-center p-8 md:p-10 bg-primary-700 relative overflow-hidden">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-20 h-20 border border-white rounded-full" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border border-white rounded-full" />
                  </div>
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-primary-500 flex items-center justify-center mb-4">
                    <HeadshotImage
                      src="/images/michael-headshot.png"
                      alt="Michael Martin"
                      fallback="MM"
                    />
                  </div>
                  <h3 className="text-xl font-black text-white">Michael Martin</h3>
                  <p className="text-accent-300 font-semibold text-sm mt-1">Founder &amp; Branch Manager</p>
                  <p className="text-primary-300 text-xs mt-1">NMLS# Insert Number</p>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-gray-600 leading-relaxed mb-3">
                    &ldquo;I started Martin Mortgage Group because I believe getting a home loan
                    should feel personal, not transactional. When you work with us, you&apos;re not
                    a number &mdash; you&apos;re family. I&apos;ll be with you from your first question
                    all the way to closing day, and I&apos;ll make sure you understand every step
                    along the way.&rdquo;
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    15+ years helping families across the Triangle achieve their homeownership dreams.
                  </p>
                  <a href="tel:9196129978" className="btn-primary text-sm">
                    Call Michael Directly
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Loan Programs ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimateIn animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-accent-600 font-bold text-xs uppercase tracking-widest">Our Programs</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
                Loan Programs for Every Situation
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                From first-time buyers to seasoned investors, we have the right financing solution for your goals.
              </p>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimateIn key={service.title} animation="fade-up" delay={i * 100}>
                <Link
                  href={service.href as any}
                  className="group bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary-300 hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-5 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-primary-700 font-bold text-sm group-hover:text-primary-600 flex items-center gap-1">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </AnimateIn>
            ))}
            <AnimateIn animation="fade-up" delay={500}>
              <div className="bg-primary-700 rounded-xl p-8 flex flex-col justify-center text-center h-full relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-24 h-24 border border-primary-500/20 rounded-full group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary-500/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-xl font-black text-white mb-3 relative">Not Sure Which Loan Is Right?</h3>
                <p className="text-primary-200 text-sm mb-6 relative">
                  Our team will analyze your situation and recommend the best program for your goals.
                </p>
                <a href="tel:9196129978" className="btn-accent mx-auto text-sm relative">
                  Talk to an Expert
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimateIn animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-accent-600 font-bold text-xs uppercase tracking-widest">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">What Our Clients Say</h2>
            </div>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={150}>
            <TestimonialSlider testimonials={testimonials} />
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={homeFAQ}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about getting a mortgage in Raleigh, NC"
      />

      {/* ── CTA ── */}
      <section id="contact" className="relative bg-primary-700 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <AnimateIn animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Start Your Home Journey?
            </h2>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={100}>
            <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto">
              Get pre-qualified in minutes. Our team is standing by to help you find the right mortgage.
            </p>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/purchase"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-400 text-white font-bold rounded-lg hover:bg-accent-500 transition-all duration-300 shadow-lg shadow-accent-400/25 hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Get Pre-Qualified Now
              </Link>
              <a
                href="tel:9196129978"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-300 text-base"
              >
                Call (919) 612-9978
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
