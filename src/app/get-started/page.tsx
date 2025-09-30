import { Heart } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <>
      <nav
        className="hidden md:block bg-white shadow-md sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Heart className="text-blue-600" size={32} aria-hidden="true" />
              <span className="text-2xl font-bold text-blue-900">
                Hampi Healthcare - Medical Tourism Bangalore
              </span>
            </div>
          </Link>
          <div className="flex gap-4">
            <Link
              href="#how-it-works"
              className="px-6 py-2 text-blue-900 font-semibold hover:bg-blue-50 rounded-lg transition"
              aria-label="Learn how our medical tourism process works"
            >
              How It Works
            </Link>

            <Link
              href="get-started"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              aria-label="Get started with affordable medical treatment in Bangalore"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <nav
        className=" md:hidden bg-white shadow-md sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              {/* <Heart className="text-blue-600" size={32} aria-hidden="true" /> */}
              <Heart className="text-blue-600" size={32} aria-hidden="true" />
              <span className="text-xl font-bold text-blue-900">
                Hampi Healthcare
              </span>
            </div>
          </Link>
          <div className="flex gap-4">
            <Link
              href="get-started"
              className="px-2 white-space: nowrap py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-700 transition"
              aria-label="Get started with affordable medical treatment in Bangalore"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Book Your Consultation
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Start your journey towards <strong>Medical Freedom</strong> with
              Hampi Healthcare
            </p>
          </div>

          {/* Appointment Booking Options */}
          <div className="text-center mb-12">
            <div className="max-w-xl mx-auto">
              {/* Phone Call Option */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Call Us
                </h3>
                <p className="text-slate-600 mb-6">
                  Speak directly with our team for immediate assistance.
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors w-full"
                >
                  +91 8123941239
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
