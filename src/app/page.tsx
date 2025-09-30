import React from "react";
import {
  Heart,
  Globe,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  FileText,
  Video,
  Plane,
  Home,
  Calendar,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function HampiHealthcare() {
  const steps = [
    {
      number: "01",
      title: "Submit Medical Records",
      description:
        "Share your health records via email, WhatsApp, or our secure website upload",
      icon: FileText,
      action: "Upload Documents",
    },
    {
      number: "02",
      title: "Pay Consultation Fee",
      description:
        "$40 / ₹3,500 covers complete evaluation and treatment planning",
      icon: Shield,
      action: "Pay Now",
    },
    {
      number: "03",
      title: "Expert Review",
      description:
        "Dr. Maruthesh Gowda reviews your case and consults with specialists",
      icon: Users,
      action: "Schedule Call",
    },
    {
      number: "04",
      title: "Video Consultation",
      description:
        "Meet with Dr. Gowda and relevant specialists via secure video call",
      icon: Video,
      action: "Join Meeting",
    },
    {
      number: "05",
      title: "Receive Treatment Plan",
      description:
        "Get detailed consultation letter with treatment options and cost estimates",
      icon: FileText,
      action: "View Plan",
    },
    {
      number: "06",
      title: "Travel & Treatment",
      description:
        "We arrange visa letters, flights, accommodation, and complete care coordination",
      icon: Plane,
      action: "Start Journey",
    },
  ];

  const services = [
    "Medical record review by UK-trained surgeon",
    "Video consultation with Dr. Maruthesh Gowda",
    "Multi-specialist coordination and opinions",
    "Detailed treatment plan and consultation letter",
    "Cost estimates from multiple Bangalore hospitals",
    "Visa invitation letter assistance",
    "Flight booking guidance",
    "Accommodation arrangements",
    "Ongoing follow-up care coordination",
  ];

  const conditions = [
    "Gastrointestinal Disorders",
    "Bariatric (Weight Loss) Surgery",
    "Cancer Care / Oncology",
    "Laparoscopic Procedures",
    "Cancer Surgery",
    "Cardiology",
    "Diabetes and Endocrinology",
  ];

  return (
    <>
      {/* SEO Meta Tags - Would be in Head component in Next.js */}
      <div style={{ display: "none" }}>
        <h1>
          Medical Tourism India | Affordable Healthcare Bangalore |
          International Patients
        </h1>
        <meta
          name="description"
          content="Get affordable world-class medical treatment in Bangalore, India. Save 60-80% on healthcare costs with UK-trained specialists. Medical tourism services for international patients from USA, UK,
                Canada, United Arab Emirates, Saudi Arabia, Kuwait and beyond"
        />
        <meta
          name="keywords"
          content="medical tourism India, healthcare Bangalore, affordable surgery India, international patients India, medical treatment Bangalore, bariatric surgery India, laparoscopic surgery Bangalore, cost-effective healthcare, medical tourism packages"
        />
      </div>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Navigation with SEO-friendly structure */}
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

        {/* Hero Section - SEO optimized with structured content */}
        <header className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-70"
            aria-hidden="true"
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe size={16} aria-hidden="true" />
              <span className="hidden md:block">
                Medical Tourism India - Connecting Global Patients to
                Bangalore&apos;s World-Class Healthcare
              </span>
              <span className=" md:hidden">Medical Tourism in India</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Affordable World-Class Medical Treatment in Bangalore, India
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Evidence-based medical treatment with expert care coordination for
              international patients from USA, UK, Canada, United Arab Emirates,
              Saudi Arabia, Kuwait and beyond. Access Bangalore&apos;s premier
              NABH-accredited healthcare facilities with personalized support
              from UK-trained surgeon Dr. Maruthesh Gowda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="get-started"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                aria-label="Book free initial consultation for medical tourism India"
              >
                <Phone size={20} aria-hidden="true" />
                Book Free Initial Call
              </Link>
            </div>

            {/* Trust Indicators - Structured for SEO */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle
                  className="text-green-600"
                  size={20}
                  aria-hidden="true"
                />
                <span className="font-semibold">
                  10+ Years NHS UK Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle
                  className="text-green-600"
                  size={20}
                  aria-hidden="true"
                />
                <span className="font-semibold">
                  100+ International Patients Treated
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle
                  className="text-green-600"
                  size={20}
                  aria-hidden="true"
                />
                <span className="font-semibold">
                  Complete Medical Tourism Care Coordination
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Why Choose Section - SEO keyword rich */}
        <section
          className="py-16 px-4 bg-white"
          aria-labelledby="why-bangalore"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              id="why-bangalore"
              className="text-4xl font-bold text-blue-900 text-center mb-12"
            >
              Why Choose Medical Treatment in Bangalore, India for Medical
              Tourism?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-hidden="true">
                    💰
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  60-80% Healthcare Cost Savings Compared to USA and UK
                </h3>
                <p className="text-slate-700">
                  Same quality medical treatment at a fraction of US/UK costs.
                  International patients save thousands of dollars while getting
                  world-class healthcare in India. Affordable surgery without
                  compromising on quality.
                </p>
              </article>

              <article className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award
                    className="text-green-600"
                    size={32}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  International Quality Standards - NABH Accredited Hospitals
                </h3>
                <p className="text-slate-700">
                  NABH-accredited hospitals in Bangalore with UK/US trained
                  medical specialists and cutting-edge medical technology.
                  International healthcare standards at Indian prices.
                </p>
              </article>

              <article className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock
                    className="text-purple-600"
                    size={32}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  No Wait Times for Medical Treatment
                </h3>
                <p className="text-slate-700">
                  Get medical treatment in Bangalore within weeks, not months.
                  Fast-track appointments and immediate care for international
                  patients. No NHS waiting lists.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Process Steps Section - Structured data friendly */}
        <section
          id="how-it-works"
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50"
          aria-labelledby="medical-tourism-process"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="medical-tourism-process"
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
              >
                Your Medical Tourism Journey to Bangalore in 6 Simple Steps
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Complete medical tourism package: consultation to post-treatment
                follow-up for international patients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition relative"
                  >
                    <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>

                    <div className="mb-4">
                      <Icon
                        className="text-blue-600"
                        size={40}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* What&apos;s Included Section - Value proposition for SEO */}
        <section
          className="py-16 px-4 bg-white"
          aria-labelledby="medical-tourism-package"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-12 text-white">
              <h2
                id="medical-tourism-package"
                className="text-4xl font-bold mb-6 text-center"
              >
                Complete Medical Tourism Care Package India: $40 / ₹3,500
              </h2>
              <p className="text-xl text-center mb-10 opacity-90">
                Everything international patients need for informed medical
                decisions in Bangalore
              </p>

              <ul className="grid md:grid-cols-2 gap-6" role="list">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-400 flex-shrink-0 mt-1"
                      size={24}
                      aria-hidden="true"
                    />
                    <span className="text-lg">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-10">
                <Link
                  href="get-started"
                  className="bg-white text-blue-900 px-10 py-4 rounded-lg text-xl font-bold hover:bg-blue-50 transition"
                  aria-label="Start your medical tourism journey to Bangalore"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Treated - SEO rich medical specialties */}
        <section
          className="py-16 px-4 bg-slate-50"
          aria-labelledby="medical-conditions"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="medical-conditions"
              className="text-4xl font-bold text-blue-900 text-center mb-4"
            >
              Medical Conditions Treated in Bangalore - Specialties Available
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12">
              Expert medical care across all specialties for international
              patients seeking affordable treatment in India
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map((condition, index) => (
                <article
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
                >
                  <h3 className="text-blue-900 font-semibold">{condition}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Dr. Gowda - E-A-T signals for SEO */}
        <section className="py-20 px-4 bg-white" aria-labelledby="dr-gowda">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="dr-gowda"
                className="text-4xl font-bold text-blue-900 mb-4"
              >
                Meet Dr. Maruthesh Gowda - UK-Trained Surgeon, Medical Tourism
                India Expert
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                MBBS | MRCS (Edinburgh) | FRCS (Colo) (Edinburgh) | 10+ Years
                NHS UK Experience
              </p>
            </div>

            <article className="prose prose-lg max-w-none text-slate-700">
              <p className="text-lg leading-relaxed mb-6">
                Dr. Maruthesh Gowda is a highly accomplished Laparoscopic
                Gastrointestinal, Bariatric Surgeon and Laser Proctologist with
                over 10 years of training and experience in the NHS (UK). His
                unique background bridges the gap between Western medical
                standards and affordable Indian healthcare, making him an ideal
                medical tourism coordinator for international patients.
              </p>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Medical Expertise and Qualifications - UK-Trained Specialist
                </h3>
                <ul className="space-y-3" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-blue-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      10+ years NHS UK experience with evidence-based medicine
                      approach for international patients
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-blue-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      MBBS from JJMMC Davangere, postgraduate medical training
                      in United Kingdom
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-blue-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      MRCS (Edinburgh) and FRCS (Edinburgh) certified surgeon
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-blue-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      Specialist in colorectal surgery, bariatric surgery,
                      laparoscopic surgery and GI cancer surgery
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-blue-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      Expert in LASER treatment for piles, fissure, fistula and
                      pilonidal sinus
                    </span>
                  </li>
                </ul>
              </div>

              <blockquote className="text-lg leading-relaxed italic text-center text-slate-600">
                &quot;Working in the UK for 10 years, qualities like
                evidence-based medicine, patient-centric approach, and
                high-quality care are embedded in my practice. I founded Hampi
                Healthcare to help international patients access the same
                standard of care at affordable costs through medical tourism in
                India.&quot;
              </blockquote>
            </article>
          </div>
        </section>

        <section className="py-20 px-4 bg-slate-50" aria-labelledby="supreetha">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="supreetha"
                className="text-4xl font-bold text-blue-900 mb-4"
              >
                Meet Supreetha Vijayakumar - Co-Founder, Medical Tourism Care
                Coordinator
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                B.Sc (Health Sciences) | MBA (Healthcare Administration) | NABH
                Accredited Healthcare Professional
              </p>
            </div>

            <article className="prose prose-lg max-w-none text-slate-700">
              <p className="text-lg leading-relaxed mb-6">
                Supreetha Vijayakumar brings unique healthcare administration
                expertise to Hampi Healthcare, combining formal healthcare
                management qualifications with deeply personal experience
                navigating medical care across continents. Her journey from
                coordinating her parents&apos; healthcare while living abroad to
                co-founding India&apos;s premier medical tourism service
                reflects her passionate commitment to making quality medical
                care accessible to families separated by distance.
              </p>

              <div className="bg-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  The Personal Story Behind Medical Tourism India Mission
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  During her time in the UK, she experienced firsthand the
                  anxiety and challenges of managing healthcare for aging
                  parents back in Bangalore. The countless late-night calls,
                  difficulty understanding medical reports from afar,
                  coordinating appointments across time zones - challenges
                  familiar to many international families.
                </p>
                <p className="text-lg leading-relaxed">
                  This experience opened her eyes to a gap in the healthcare
                  system - there was no reliable bridge connecting concerned
                  families abroad with the excellent medical facilities
                  available in Bangalore. She realized that thousands of other
                  families were facing the same challenges, and that her
                  professional background in healthcare administration could
                  help solve this problem through organized medical tourism
                  services.
                </p>
              </div>

              <div className="bg-green-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Professional Healthcare Administration Expertise and
                  Qualifications
                </h3>
                <ul className="space-y-3" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      Bachelor of Science in Health Sciences with focus on
                      healthcare systems and patient care management for
                      international patients
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      MBA in Healthcare Administration, specializing in hospital
                      operations and patient experience optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      NABH (National Accreditation Board for Hospitals)
                      accreditation, ensuring international quality standards
                      for medical tourism
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      Extensive experience in medical tourism care coordination,
                      hospital partnerships, and international patient advocacy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                      aria-hidden="true"
                    />
                    <span>
                      Multilingual communication skills enabling seamless
                      coordination across cultures for international patients
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Her Role at Hampi Healthcare - Medical Tourism Care
                  Coordination
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  As Co-Founder and Director of Patient Care Coordination for
                  medical tourism, she personally oversees every aspect of the
                  international patient journey. She understands that behind
                  every medical record is a worried family member, and she
                  ensures that no detail is overlooked - from the initial
                  consultation to post-treatment follow-up care.
                </p>
                <p className="text-lg leading-relaxed">
                  Her systems thinking and attention to detail ensure that
                  hospital partnerships are vetted for quality, cost estimates
                  for medical treatment are transparent and comprehensive, and
                  communication flows smoothly between doctors, patients, and
                  their families abroad. She&apos;s built a trusted network of
                  medical specialists across Bangalore&apos;s top
                  NABH-accredited hospitals, ensuring international patients
                  receive not just good care, but the right care for their
                  specific needs through organized medical tourism.
                </p>
              </div>

              <blockquote className="text-lg leading-relaxed italic text-center text-slate-600 bg-white p-6 rounded-lg">
                &quot;I know what it feels like to be thousands of miles away,
                worried about your loved ones&apos; health. That&apos;s why
                I&apos;m personally committed to treating every international
                patient like family. My mission is to ensure no one has to
                navigate the healthcare system alone, whether they&apos;re here
                in Bangalore or calling from halfway across the world. Quality
                healthcare should be accessible, affordable, and stress-free
                through medical tourism - that&apos;s the promise of Hampi
                Healthcare.&quot;
              </blockquote>
            </article>
          </div>
        </section>

        {/* Contact Section - Local SEO optimized */}
        <section
          className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
          aria-labelledby="contact-us"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="contact-us"
              className="text-4xl font-bold text-center mb-12"
            >
              Ready to Start Your Medical Tourism Journey to Bangalore, India?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Call Us for Medical Tourism India
                </h3>
                <p className="opacity-90">+91-7899121515</p>
                <p className="opacity-90 text-sm mt-2">
                  Available 24/7 for International Patients
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Email Medical Tourism Inquiries
                </h3>
                <p className="opacity-90">contact@hampihealthcare.com</p>
                <p className="opacity-90 text-sm mt-2">
                  Response within 24 hours
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-2">Visit Bangalore</h3>
                <p className="opacity-90">Bangalore, Karnataka, India</p>
                <p className="opacity-90 text-sm mt-2">
                  India&apos;s Medical Tourism Capital
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                // href="get-started"
                className="bg-white text-blue-900 px-12 py-4 rounded-lg text-xl font-bold hover:bg-blue-50 transition"
                aria-label="Book medical tourism consultation for treatment in Bangalore"
              >
                <Link href="get-started">Book Your Consultation Now</Link>
              </button>
              <p className="mt-9 opacity-90">
                Trusted medical tourism provider for patients from USA, UK,
                Canada, United Arab Emirates, Saudi Arabia, Kuwait and beyond
              </p>
            </div>
          </div>
        </section>

        {/* Footer - Schema markup friendly */}
        <footer
          className="bg-slate-900 text-white py-8 px-4"
          role="contentinfo"
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart
                className="hidden md:block text-blue-400"
                size={24}
                aria-hidden="true"
              />
              <span className="text-xl font-bold">
                Hampi Healthcare - Medical Tourism India
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Evidence-Based Medical Treatment • International Patient Education
              • Expert Medical Tourism Care Coordination
            </p>
            <p className="text-sm text-slate-500">
              Founded by UK-trained Dr. Maruthesh Gowda and Healthcare
              Administrator Supreetha V to connect global patients with
              Bangalore&apos;s world-class affordable healthcare through
              organized medical tourism services
            </p>
            <p className="text-xs text-slate-600 mt-4">
              Keywords: Medical tourism India, affordable healthcare Bangalore,
              international patients India, UK-trained surgeon India, NABH
              hospitals Bangalore, medical treatment India cost, bariatric
              surgery India, laparoscopic surgery Bangalore, healthcare savings
              India
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
