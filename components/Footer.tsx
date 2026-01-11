"use client";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterProps = {
  companyName?: string;
  tagline?: string;
  sections?: FooterSection[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
  copyrightText?: string;
};

const defaultSections: FooterSection[] = [
  {
    title: "Site Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Resources", href: "/resources" },
      { label: "Get Help", href: "/get-help" },
      { label: "Support", href: "/support" },
      { label: "Blog", href: "/blog" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Scheduler", href: "/scheduler" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Suicide & Crisis Lifeline",
        href: "https://988lifeline.org",
      },
      { label: "Crisis Text Line", href: "https://www.crisistextline.org" },
      {
        label: "Find a Therapist",
        href: "https://www.psychologytoday.com/us/therapists",
      },
      {
        label: "Mental Health Resources",
        href: "https://www.nami.org/help",
      },
      { label: "International Helplines", href: "https://findahelpline.com" },
      { label: "SAMHSA", href: "https://www.samhsa.gov/" },
    ],
  },
  {
    title: "Self-Help",
    links: [
      { label: "Coping Skills Library", href: "https://www.therapistaid.com" },
      { label: "Mindfulness Exercises", href: "https://www.mindful.org" },
      {
        label: "Mental Health Articles",
        href: "https://www.healthline.com/mental-health",
      },
      { label: "Self-Care Tools", href: "https://www.verywellmind.com" },
    ],
  }
];

export const Footer = ({
  companyName = "MindMatters",
  tagline = "This site provides general information about mental health disorders and resources. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. If you are experiencing a mental health crisis or emergency, please call 988 or go to your nearest emergency room immediately.",
  sections = defaultSections,

  copyrightText,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copyright =
    copyrightText || `© ${currentYear} ${companyName}. All rights reserved.`;
  return (
    <footer className="w-full bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="max-w-[1100px] mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-2"
          >
            <div className="mb-4">
              <h3
                className="text-2xl font-semibold text-[#202020] mb-2"
                style={{ fontFamily: "Figtree", fontWeight: "500" }}
              >
                {companyName}
              </h3>
              <p
                className="text-sm leading-5 text-[#666666] max-w-xs"
                style={{ fontFamily: "Figtree" }}
              >
                {tagline}
              </p>
            </div>
          </motion.div>

          {/* Link Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="col-span-1"
            >
              <h4
                className="text-sm font-medium text-[#202020] mb-4 uppercase tracking-wide"
                style={{ fontFamily: "Figtree", fontWeight: "500" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                      style={{ fontFamily: "Figtree" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t border-[#e5e5e5]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-sm text-[#666666]"
              style={{ fontFamily: "Figtree" }}
            >
              {copyright}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/sitemap"
                className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                style={{ fontFamily: "Figtree" }}
              >
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
