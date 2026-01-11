"use client";
import { useState } from "react";
import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Users,
  BookOpen,
  Phone,
  ArrowRight,
  Shield,
  Lightbulb,
  Activity,
  Star,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    {
      number: "1 in 5",
      label: "U.S. adults experience mental illness each year",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "50%",
      label: "of mental illness begins by age 14",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      number: "75%",
      label: "of mental illness begins by age 24",
      icon: <Activity className="w-8 h-8" />,
    },
    {
      number: "24/7",
      label: "Help is available anytime you need it",
      icon: <Phone className="w-8 h-8" />,
    },
  ];

  const featuredConditions = [
    {
      name: "Anxiety Disorders",
      icon: <Activity className="w-6 h-6" />,
      description: "The most common mental health condition affecting 31% of adults",
      color: "from-teal-500 to-cyan-600",
    },
    {
      name: "Depression",
      icon: <Brain className="w-6 h-6" />,
      description: "Affects over 21 million adults in the U.S. annually",
      color: "from-teal-600 to-cyan-700",
    },
    {
      name: "PTSD",
      icon: <Shield className="w-6 h-6" />,
      description: "Develops after traumatic experiences, affecting 3.6% of adults",
      color: "from-cyan-500 to-teal-600",
    },
    {
      name: "Bipolar Disorder",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Causes extreme mood shifts in 2.8% of U.S. adults",
      color: "from-teal-400 to-cyan-500",
    },
  ];

  const keyResources = [
    {
      title: "988 Suicide & Crisis Lifeline",
      description: "24/7 free and confidential support",
      contact: "Call or text 988",
      color: "bg-teal-600",
    },
    {
      title: "Crisis Text Line",
      description: "Free support via text anytime",
      contact: "Text HOME to 741741",
      color: "bg-cyan-600",
    },
    {
      title: "NAMI Helpline",
      description: "Information and referral services",
      contact: "1-800-950-NAMI (6264)",
      color: "bg-teal-500",
    },
    {
      title: "SAMHSA National Helpline",
      description: "Treatment referral services",
      contact: "1-800-662-HELP (4357)",
      color: "bg-cyan-500",
    },
  ];

  const whyMentalHealthMatters = [
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: "Mental Health is Health",
      description: "Your mental well-being is just as important as your physical health. Both require care, attention, and sometimes professional support.",
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-600" />,
      title: "You're Not Alone",
      description: "Millions of people experience mental health challenges. Seeking help is a sign of strength, not weakness.",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Recovery is Possible",
      description: "With proper treatment and support, people with mental health conditions can and do recover, leading fulfilling lives.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-cyan-600" />,
      title: "Early Intervention Helps",
      description: "Getting help early leads to better outcomes. Don't wait until things feel unbearable to reach out for support.",
    },
  ];

  const testimonialHighlights = [
    {
      name: "Sarah M.",
      condition: "Anxiety & Depression",
      quote: "Asking for help isn't giving up—it's choosing to fight.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Marcus J.",
      condition: "PTSD",
      quote: "Healing doesn't mean the damage never existed. It means it no longer controls my life.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Jennifer L.",
      condition: "Bipolar Disorder",
      quote: "My diagnosis wasn't a limitation—it was the beginning of understanding myself.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
  ];

  return (
    <>
      <PortfolioNavbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-600 to-teal-600">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Mental Health Matters
              </h1>
              
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
                Comprehensive resources, support, and hope for understanding and managing mental health conditions
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Link
                  href="/resources"
                  className="group px-8 py-4 bg-white text-teal-700 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all shadow-lg flex items-center gap-2"
                >
                  Find Resources
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:988"
                  className="px-8 py-4 bg-teal-700 text-white rounded-xl font-bold text-lg hover:bg-teal-800 transition-colors shadow-lg border-2 border-white/30"
                >
                  Call 988 Now
                </a>
              </div>

              <div className="pt-8 text-white/90 text-sm">
                <p>If you're in crisis, help is available 24/7</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4 p-6 rounded-xl bg-teal-50 border border-teal-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full text-white">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-teal-700">{stat.number}</div>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Mental Health Matters */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Mental Health Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the importance of mental wellness in our lives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyMentalHealthMatters.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to understand and navigate mental health challenges
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/resources" className="group">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-400 transition-all h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    Comprehensive Resources
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Detailed information about mental health disorders, warning signs, treatment options, and recovery processes. Access to national organizations and crisis support.
                  </p>
                  <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                    Explore Resources
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>

              <Link href="/testimonials" className="group">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                    Real Stories of Hope
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Read inspiring testimonials from individuals who have faced mental health challenges and found their path to recovery. You're not alone in this journey.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-3 transition-all">
                    Read Stories
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  24/7 Crisis Support
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Immediate help is always available. Connect with trained counselors anytime through call, text, or online chat services.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:988"
                    className="block px-4 py-2 bg-teal-600 text-white rounded-lg text-center font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Call 988
                  </a>
                  <a
                    href="sms:741741"
                    className="block px-4 py-2 bg-cyan-600 text-white rounded-lg text-center font-semibold hover:bg-cyan-700 transition-colors"
                  >
                    Text 741741
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Conditions Overview */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Common Mental Health Conditions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn about the most prevalent mental health disorders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredConditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${condition.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                    {condition.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {condition.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {condition.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg"
              >
                View All Conditions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quick Access Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get help immediately from trusted national organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-teal-400 transition-all"
                >
                  <div className={`h-2 ${resource.color}`} />
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {resource.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {resource.description}
                    </p>
                    <div className="pt-2">
                      <p className="text-teal-700 font-bold">{resource.contact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Preview */}
        <section className="py-20 bg-gradient-to-br from-teal-500 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Stories of Recovery & Hope
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Real people sharing their journeys to wellness
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonialHighlights.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-xl"
                >
                  <div className="relative h-48">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-teal-700 font-semibold mb-4">
                      {testimonial.condition}
                    </p>
                    <blockquote className="text-gray-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-xl font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
              >
                Read More Stories
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-12 text-center border-2 border-teal-200">
              <Heart className="w-16 h-16 mx-auto text-teal-600 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Take the First Step Today
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Whether you're seeking information, support, or immediate help, 
                you've come to the right place. Mental health recovery is possible, 
                and it starts with reaching out.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/resources"
                  className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg"
                >
                  Explore Resources
                </Link>
                <a
                  href="tel:988"
                  className="px-8 py-4 bg-white text-teal-700 rounded-xl font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg border-2 border-teal-600"
                >
                  Get Help Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-16 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Remember These Important Facts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Recovery is Possible</h3>
                <p className="text-sm text-gray-700">70-90% see significant improvement with treatment</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">You're Not Alone</h3>
                <p className="text-sm text-gray-700">Millions face similar challenges every day</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Help is Available</h3>
                <p className="text-sm text-gray-700">24/7 support is just a call or text away</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Seeking Help is Strength</h3>
                <p className="text-sm text-gray-700">Taking action shows courage and self-care</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}