"use client";

import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";
import { BlogCard, type BlogPost } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const CATEGORIES = [
  "Mental Health Basics",
  "Coping Strategies",
  "Personal Stories",
  "Treatment Options",
  "Workplace Wellness",
];

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Anxiety: Types and Triggers",
    excerpt:
      "A comprehensive guide to different types of anxiety disorders and how to identify your personal triggers.",
    content: "",
    author: "Dr. Sarah Johnson",
    category: "Mental Health Basics",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    readTime: 8,
    image: "",
    featured: true,
  },
  {
    id: "2",
    title: "5 Mindfulness Techniques for Daily Stress",
    excerpt:
      "Simple yet powerful mindfulness practices you can incorporate into your daily routine.",
    content: "",
    author: "Emma Wilson",
    category: "Coping Strategies",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    readTime: 6,
    image: "",
    featured: true,
  },
  {
    id: "3",
    title: "My Journey to Recovery: A Personal Story",
    excerpt:
      "How I overcame depression and learned to live a fulfilling life again.",
    content: "",
    author: "Anonymous",
    category: "Personal Stories",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    readTime: 10,
    image: "",
  },
  {
    id: "4",
    title: "Cognitive Behavioral Therapy (CBT) Explained",
    excerpt:
      "Understanding one of the most effective therapeutic approaches for anxiety and depression.",
    content: "",
    author: "Dr. Michael Chen",
    category: "Treatment Options",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    readTime: 9,
    image: "",
  },
  {
    id: "5",
    title: "Building Mental Health into Your Workday",
    excerpt:
      "Practical tips for maintaining mental wellness while managing a demanding job.",
    content: "",
    author: "James Rodriguez",
    category: "Workplace Wellness",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    readTime: 7,
    image: "",
  },
  {
    id: "6",
    title: "The Connection Between Sleep and Mental Health",
    excerpt:
      "Why quality sleep is crucial for your mental health and how to improve sleep hygiene.",
    content: "",
    author: "Dr. Sarah Johnson",
    category: "Mental Health Basics",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    readTime: 8,
    image: "",
  },
];

interface BlogPost2 {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  date: Date;
  readTime: number;
  image: string;
  featured?: boolean;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = BLOG_POSTS.filter((p) => p.featured);

  return (
    <>
      <PortfolioNavbar />
      <main className="w-full bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
            className="mb-12"
          >
            <h1
              className="text-6xl py-10 text-center font-normal text-[#202020] mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "500",
              }}
            >
              Mental Health Blog
            </h1>

          </motion.div>

          {/* Featured Section */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2
                className="text-[40px] leading-tight font-normal text-[#202020] mb-6"
                style={{ fontFamily: "var(--font-figtree), Figtree" }}
              >
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} onClick={() => {}} />
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-[20px] border border-[#e5e5e5] p-6 sticky top-24">
                <h3
                  className="font-normal text-[#202020] mb-4"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                >
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                      selectedCategory === null
                        ? "bg-[#e5e5e5] text-[#156d95] font-normal"
                        : "text-[#202020] hover:bg-[#fafafa]"
                    }`}
                    style={{ fontFamily: "var(--font-figtree), Figtree" }}
                  >
                    All Articles
                  </button>
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                        selectedCategory === category
                          ? "bg-[#e5e5e5] text-[#156d95] font-normal"
                          : "text-[#202020] hover:bg-[#fafafa]"
                      }`}
                      style={{ fontFamily: "var(--font-figtree), Figtree" }}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-[#fafafa] rounded-[12px] border border-[#e5e5e5]">
                  <h4
                    className="font-normal text-[#202020] mb-2"
                    style={{ fontFamily: "var(--font-figtree), Figtree" }}
                  >
                    💡 Tip
                  </h4>
                  <p className="text-xs text-[#404040]">
                    Combine reading with professional help for the best results.
                    Consider scheduling a session with our counselors.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              {/* Controls */}
              <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="w-full sm:flex-1 relative">
                  <Search
                    className="absolute left-4 top-3.5 text-[#9a9a9a]"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                    style={{ fontFamily: "var(--font-figtree), Figtree" }}
                  />
                </div>

                <div className="flex items-center gap-2 bg-white border border-[#e5e5e5] rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-3 py-2 rounded transition-colors ${
                      viewMode === "grid"
                        ? "bg-[#e5e5e5] text-[#156d95]"
                        : "text-[#9a9a9a] hover:bg-[#fafafa]"
                    }`}
                  >
                    ≡≡≡
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-3 py-2 rounded transition-colors ${
                      viewMode === "list"
                        ? "bg-[#e5e5e5] text-[#156d95]"
                        : "text-[#9a9a9a] hover:bg-[#fafafa]"
                    }`}
                  >
                    ≡
                  </button>
                </div>
              </div>

              {/* Articles */}
              {viewMode === "grid" ? (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} onClick={() => {}} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-[20px] border border-[#e5e5e5] overflow-hidden">
                  {filteredPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      onClick={() => {}}
                      variant="list"
                    />
                  ))}
                </div>
              )}

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p
                    className="text-[#404040] mb-4"
                    style={{ fontFamily: "var(--font-figtree), Figtree" }}
                  >
                    No articles found matching your search.
                  </p>
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                <Button variant="outline">Previous</Button>
                <Button
                  className="bg-[#156d95] hover:bg-[#156d95]/90"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                >
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
