"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navigationLinks = [
  {
    name: "Resources",
    href: "/resources",
    isExternal: true,
  },
  {
    name: "Get Help",
    href: "/get-help",
    isExternal: true,
  },
  {
    name: "Support",
    href: "/support",
    isExternal: true,
  },
  {
    name: "Blog",
    href: "/blog",
    isExternal: true,
  },
  {
    name: "Testimonials",
    href: "/testimonials ",
    isExternal: true,
  },
] as any[];

// @component: PortfolioNavbar
export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const handleLinkClick = (href: string) => {
    closeMobileMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const renderNavLink = (link: any) => {
    const baseClasses =
      "text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 relative group";
    const fontStyles = {
      fontFamily: "Figtree, sans-serif",
      fontWeight: "400",
    };

    if (link.isExternal) {
      return (
        <Link
          key={link.name}
          href={link.href}
          className={baseClasses}
          style={fontStyles}
        >
          <span>{link.name}</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
        </Link>
      );
    }

    return (
      <button
        key={link.name}
        onClick={() => handleLinkClick(link.href)}
        className={baseClasses}
        style={fontStyles}
      >
        <span>{link.name}</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
      </button>
    );
  };

  // @return
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <span
                style={{
                  fontFamily: "Figtree",
                  fontWeight: "800",
                }}
              >
                MindMatters
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks.map((link) => renderNavLink(link))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              onClick={() => handleLinkClick("#contact")}
              href="scheduler"
              className="bg-teal-600 border-2 border-white text-white px-[18px] rounded-full text-base font-semibold hover:bg-white hover:text-teal-600 hover:border-teal-600 transition-all duration-500 shadow-sm hover:shadow-md whitespace-nowrap leading-4 py-[15px]"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <span
                style={{
                  fontFamily: "Figtree",
                  fontWeight: "500",
                }}
              >
                Schedule a Session
              </span>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {navigationLinks.map((link) => {
                if (link.isExternal) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => closeMobileMenu()}
                      className="block w-full text-left text-foreground hover:text-primary py-3 text-lg font-medium transition-colors duration-200"
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      <span>{link.name}</span>
                    </Link>
                  );
                }
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="block w-full text-left text-foreground hover:text-primary py-3 text-lg font-medium transition-colors duration-200"
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    <span>{link.name}</span>
                  </button>
                );
              })}
              <Link href="/scheduler"className="pt-4 border-t border-border">
                <button
                  onClick={() => handleLinkClick("#contact")}
                  className="w-full bg-[#156d95] text-white px-[18px] py-[15px] rounded-full text-base font-semibold hover:bg-[#156d95]/90 transition-all duration-200"
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  <span>Schedule a Session</span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
