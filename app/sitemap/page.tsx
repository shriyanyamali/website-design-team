"use client";

import Link from "next/link";

type SitemapSection = {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
};

const sitemapSections: SitemapSection[] = [
  {
    title: "Main Pages",
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
    title: "Mental Health Resources",
    links: [
      {
        label: "Suicide & Crisis Lifeline (988)",
        href: "https://988lifeline.org",
        external: true,
      },
      {
        label: "Crisis Text Line",
        href: "https://www.crisistextline.org",
        external: true,
      },
      {
        label: "Find a Therapist",
        href: "https://www.psychologytoday.com/us/therapists",
        external: true,
      },
      {
        label: "NAMI – Mental Health Resources",
        href: "https://www.nami.org/help",
        external: true,
      },
      {
        label: "International Helplines",
        href: "https://findahelpline.com",
        external: true,
      },
      {
        label: "SAMHSA",
        href: "https://www.samhsa.gov",
        external: true,
      },
    ],
  },
  {
    title: "Self-Help & Education",
    links: [
      {
        label: "Coping Skills Library",
        href: "https://www.therapistaid.com",
        external: true,
      },
      {
        label: "Mindfulness Exercises",
        href: "https://www.mindful.org",
        external: true,
      },
      {
        label: "Mental Health Articles",
        href: "https://www.healthline.com/mental-health",
        external: true,
      },
      {
        label: "Self-Care Tools",
        href: "https://www.verywellmind.com",
        external: true,
      },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-12">
        <h1
          className="text-4xl font-semibold text-[#202020] mb-4"
          style={{ fontFamily: "Figtree" }}
        >
          Sitemap
        </h1>
        <p
          className="text-[#666666] max-w-2xl"
          style={{ fontFamily: "Figtree" }}
        >
          This page provides an overview of all pages and key resources available
          on MindMatters.
        </p>
      </header>

      <div className="grid gap-12 md:grid-cols-3">
        {sitemapSections.map((section) => (
          <section key={section.title}>
            <h2
              className="text-lg font-medium text-[#202020] mb-4"
              style={{ fontFamily: "Figtree" }}
            >
              {section.title}
            </h2>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#156d95] hover:underline"
                      style={{ fontFamily: "Figtree" }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#156d95] hover:underline"
                      style={{ fontFamily: "Figtree" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
