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
    content:
      "Anxiety disorders can show up as generalized worry, social avoidance, panic attacks, or specific phobias. Track patterns like time of day, caffeine intake, social situations, and sleep quality to spot triggers. Pair awareness with grounding techniques (5-4-3-2-1 sensory check) and paced breathing. If anxiety disrupts work, school, or sleep for more than two weeks, consider a professional evaluation for GAD, social anxiety, panic disorder, or phobias.",
    author: "Dr. Sarah Johnson",
    category: "Mental Health Basics",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    readTime: 8,
    image:
      "https://images.unsplash.com/photo-1631883055788-5a5b15fae074?w=900&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "5 Mindfulness Techniques for Daily Stress",
    excerpt:
      "Simple yet powerful mindfulness practices you can incorporate into your daily routine.",
    content:
      "Start with 3-minute breathing, box breathing (4-4-4-4), and body scans to interrupt stress loops. Pair short practices with daily anchors: when you pour coffee, before emails, and after meetings. For movement-based mindfulness, try mindful walks focusing on sounds and footfalls. If racing thoughts persist, set a 10-minute timer, label thoughts without judgment, and return to breath.",
    author: "Emma Wilson",
    category: "Coping Strategies",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "3",
    title: "My Journey to Recovery: A Personal Story",
    excerpt:
      "How I overcame depression and learned to live a fulfilling life again.",
    content:
      "Recovery was not linear: good weeks followed by setbacks. What helped most was a routine built on sleep hygiene, structured mornings, and weekly therapy. Tracking mood alongside sleep and meals revealed patterns. Medication plus CBT tools (thought records, behavioral activation) helped me re-engage with hobbies. Sharing with friends reduced shame and built accountability.",
    author: "Anonymous",
    category: "Personal Stories",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    readTime: 10,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Cognitive Behavioral Therapy (CBT) Explained",
    excerpt:
      "Understanding one of the most effective therapeutic approaches for anxiety and depression.",
    content:
      "CBT links thoughts, feelings, and behaviors. Core skills include cognitive restructuring (challenging unhelpful thoughts), exposure (approaching avoided situations gradually), and behavioral activation (planning rewarding, values-based actions). Track automatic thoughts, rate belief strength, and test them against evidence. Small, repeated exposures retrain your threat response.",
    author: "Dr. Michael Chen",
    category: "Treatment Options",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    readTime: 9,
    image:
      "https://images.unsplash.com/photo-1709651669999-57741c9bf085?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Building Mental Health into Your Workday",
    excerpt:
      "Practical tips for maintaining mental wellness while managing a demanding job.",
    content:
      "Protect 10-minute buffers before/after meetings, stack similar tasks to reduce context switching, and schedule micro-breaks every 60–90 minutes. Use a daily priority list with one must-do, two should-do items. Set notification windows to limit constant pings. Pair lunch with a short walk or stretch to reset your nervous system.",
    author: "James Rodriguez",
    category: "Workplace Wellness",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "The Connection Between Sleep and Mental Health",
    excerpt:
      "Why quality sleep is crucial for your mental health and how to improve sleep hygiene.",
    content:
      "Sleep debt amplifies anxiety and lowers mood. Aim for consistent bed/wake times, a 60-minute wind-down without screens, and a cool, dark room. If you can’t sleep after 20 minutes, get up, read something calm, and return when sleepy. Track caffeine timing and daylight exposure—both strongly impact sleep drive.",
    author: "Dr. Sarah Johnson",
    category: "Mental Health Basics",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    readTime: 8,
    image:
      "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?w=900&q=80&auto=format&fit=crop",
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
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4;

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = BLOG_POSTS.filter((p) => p.featured);
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const pageSafe = Math.min(Math.max(currentPage, 1), totalPages);
  const paginatedPosts = filteredPosts.slice(
    (pageSafe - 1) * pageSize,
    pageSafe * pageSize
  );

  const handleOpenPost = (post: BlogPost) => setSelectedPost(post);
  const handleClosePost = () => setSelectedPost(null);
  const handlePageChange = (page: number) => setCurrentPage(page);

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
                  <BlogCard
                    key={post.id}
                    post={post}
                    onClick={() => handleOpenPost(post)}
                  />
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
                        ? "bg-teal-50 text-teal-700 font-normal border border-teal-200"
                        : "text-[#202020] hover:bg-[#fafafa]"
                    }`}
                    style={{ fontFamily: "var(--font-figtree), Figtree" }}
                  >
                    All Articles
                  </button>
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                        selectedCategory === category
                          ? "bg-teal-50 text-teal-700 font-normal border border-teal-200"
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
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-12 pr-4 py-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    style={{ fontFamily: "var(--font-figtree), Figtree" }}
                  />
                </div>

                <div className="flex items-center gap-2 bg-white border border-[#e5e5e5] rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-3 py-2 rounded transition-colors ${
                      viewMode === "grid"
                        ? "bg-teal-50 text-teal-700 border border-teal-200"
                        : "text-[#9a9a9a] hover:bg-[#fafafa]"
                    }`}
                  >
                    ≡≡≡
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-3 py-2 rounded transition-colors ${
                      viewMode === "list"
                        ? "bg-teal-50 text-teal-700 border border-teal-200"
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
                  {paginatedPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      onClick={() => handleOpenPost(post)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-[20px] border border-[#e5e5e5] overflow-hidden">
                  {paginatedPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      onClick={() => handleOpenPost(post)}
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
                <Button
                  variant="outline"
                  disabled={pageSafe === 1}
                  onClick={() => handlePageChange(pageSafe - 1)}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={page === pageSafe ? "default" : "outline"}
                      className={
                        page === pageSafe ? "bg-teal-600 hover:bg-teal-700" : ""
                      }
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  )
                )}
                <Button
                  variant="outline"
                  disabled={pageSafe === totalPages}
                  onClick={() => handlePageChange(pageSafe + 1)}
                >
                  Next
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-teal-500 to-cyan-600 relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-2">
                <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded">
                  {selectedPost.category}
                </span>
                <h3 className="text-3xl font-bold leading-tight">
                  {selectedPost.title}
                </h3>
                <p className="text-sm text-white/90">
                  {selectedPost.author} •{" "}
                  {selectedPost.date.toLocaleDateString()} •{" "}
                  {selectedPost.readTime} min read
                </p>
              </div>
              <button
                onClick={handleClosePost}
                className="absolute top-4 right-4 bg-white/80 text-teal-700 rounded-full px-3 py-2 text-sm font-semibold hover:bg-white"
              >
                Close
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-lg leading-relaxed text-[#202020]">
                {selectedPost.content}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#404040]">
                <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
                  <p className="font-semibold text-teal-700">Try this</p>
                  <p className="mt-2">
                    Jot one takeaway you can apply today, and schedule a
                    10-minute check-in this week to reflect on it.
                  </p>
                </div>
                <div className="bg-cyan-50 border border-cyan-100 rounded-lg p-4">
                  <p className="font-semibold text-cyan-700">
                    Need more support?
                  </p>
                  <p className="mt-2">
                    Visit our Resources or Scheduler pages to connect with a
                    counselor for personalized guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
