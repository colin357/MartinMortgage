import type { Metadata } from "next";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Leave a Review | Michael Martin - Martin Mortgage Group",
  description:
    "Share your experience working with Michael Martin. Leave a review on Google or Zillow.",
};

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header card */}
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Leave Michael a Review
          </h1>
          <p className="text-gray-500 mb-8">
            Your feedback means the world. Choose a platform below to share your
            experience working with Michael Martin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://share.google/fpKBI5f031gvpmByk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all font-semibold text-gray-800 bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-7 h-7 shrink-0"
              >
                <path
                  fill="#4285F4"
                  d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                />
                <path
                  fill="#EA4335"
                  d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                />
              </svg>
              Review on Google
            </a>

            <a
              href="https://www.zillow.com/lender-profile/martinmortgagegroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all font-semibold text-gray-800 bg-white"
            >
              <Image
                src="/images/zillow-logo.svg"
                alt="Zillow"
                width={80}
                height={18}
                className="shrink-0"
              />
              Leave a Review
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Thank you for trusting Martin Mortgage Group with your home financing
            journey.
          </p>
        </div>

        {/* Testimonials grid */}
        <h2 className="text-2xl font-black text-gray-900 text-center mb-6">
          What Our Clients Say
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <p className="text-gray-900 font-bold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
