"use client";

import { useState } from "react";
import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";
import {
  ForumThread,
  type ForumPost,
} from "@/components/community/ForumThread";
import { NewThreadModal } from "@/components/community/NewThreadModal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";

const CATEGORIES = [
  "Anxiety & Stress",
  "Depression",
  "Relationships",
  "Work & Career",
  "Sleep & Rest",
  "Recovery Stories",
  "General Support",
];

const SAMPLE_POSTS: ForumPost[] = [
  {
    id: "1",
    title: "Struggling with anxiety at work - tips that helped me",
    author: "Alex M.",
    authorAvatar: "A",
    category: "Anxiety & Stress",
    content:
      "I've been dealing with anxiety for a while, especially during meetings. Recently discovered some breathing techniques that really help. Wanted to share in case anyone else is going through the same...",
    replies: 24,
    likes: 67,
    views: 342,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    isPinned: true,
  },
  {
    id: "2",
    title: "Anyone else dealing with seasonal depression?",
    author: "Jordan K.",
    authorAvatar: "J",
    category: "Depression",
    content:
      "As winter approaches, I feel my mood dropping. This is my third year dealing with this. Would love to connect with others who experience seasonal depression...",
    replies: 18,
    likes: 45,
    views: 251,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: "3",
    title: "First therapy session - nervous but hopeful",
    author: "Casey R.",
    authorAvatar: "C",
    category: "Recovery Stories",
    content:
      "I'm about to have my first therapy session tomorrow and I'm honestly terrified. But I'm also hopeful. If anyone's been through this transition, I'd love to hear your story...",
    replies: 31,
    likes: 89,
    views: 456,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
  {
    id: "4",
    title: "Finding balance between work and mental health",
    author: "Sam T.",
    authorAvatar: "S",
    category: "Work & Career",
    content:
      "Struggling to maintain boundaries between work and personal time. My mental health has taken a hit. Anyone have strategies that work?",
    replies: 12,
    likes: 34,
    views: 187,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
  {
    id: "5",
    title: "Sleep issues affecting my mental health",
    author: "Morgan L.",
    authorAvatar: "M",
    category: "Sleep & Rest",
    content:
      "It's become a vicious cycle - anxiety keeps me awake, lack of sleep makes anxiety worse. Has anyone found a way to break this cycle?",
    replies: 22,
    likes: 56,
    views: 298,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<ForumPost[]>(SAMPLE_POSTS);
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewThread = (data: {
    title: string;
    category: string;
    content: string;
  }) => {
    const newPost: ForumPost = {
      id: String(posts.length + 1),
      title: data.title,
      author: "You",
      authorAvatar: "U",
      category: data.category,
      content: data.content,
      replies: 0,
      likes: 0,
      views: 1,
      createdAt: new Date(),
    };
    setPosts([newPost, ...posts]);
  };

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
            <h1 className="text-[56px] leading-[60px] font-normal text-[#202020] mb-4" style={{ fontFamily: "var(--font-figtree), Figtree", fontWeight: "500" }}>
              Community Support Forum
            </h1>
            <p className="text-lg leading-7 text-[#404040] max-w-2xl" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
              A safe, moderated space to connect with others, share experiences, and support each other in your mental health journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-[20px] border border-[#e5e5e5] p-6 sticky top-24">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#156d95] hover:bg-[#156d95]/90 mb-6 gap-2"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                >
                  <Plus size={18} />
                  New Discussion
                </Button>

                <h3 className="font-normal text-[#202020] mb-4" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === null
                        ? "bg-[#e5e5e5] text-[#156d95] font-normal"
                        : "text-[#202020] hover:bg-[#fafafa]"
                    }`}
                    style={{ fontFamily: "var(--font-figtree), Figtree" }}
                  >
                    All Categories
                  </button>
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
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
                  <h4 className="font-normal text-[#202020] mb-2" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                    Community Guidelines
                  </h4>
                  <p className="text-xs text-[#404040]">
                    Be respectful, supportive, and kind. No hate speech or spam. Professional advice should come from licensed practitioners.
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
              {/* Search */}
              <div className="mb-8 relative">
                <Search
                  className="absolute left-4 top-3.5 text-[#9a9a9a]"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                />
              </div>

              {/* Threads */}
              <div className="bg-white rounded-[20px] border border-[#e5e5e5] overflow-hidden">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <ForumThread
                      key={post.id}
                      post={post}
                      onClick={() => setSelectedPost(post)}
                      featured={post.isPinned}
                    />
                  ))
                ) : (
                  <div className="p-12 text-center">
                    <p className="text-[#404040] mb-4" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                      No discussions found.
                    </p>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#156d95] hover:bg-[#156d95]/90"
                      style={{ fontFamily: "var(--font-figtree), Figtree" }}
                    >
                      Start the first one!
                    </Button>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white rounded-[20px] p-6 text-center border border-[#e5e5e5]">
                  <p className="text-3xl font-normal text-[#156d95]" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                    {posts.length}
                  </p>
                  <p className="text-sm text-[#404040] mt-2" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                    Total Discussions
                  </p>
                </div>
                <div className="bg-white rounded-[20px] p-6 text-center border border-[#e5e5e5]">
                  <p className="text-3xl font-normal text-[#10b981]" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                    {posts.reduce((sum, p) => sum + p.replies, 0)}
                  </p>
                  <p className="text-sm text-[#404040] mt-2" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                    Total Responses
                  </p>
                </div>
                <div className="bg-white rounded-[20px] p-6 text-center border border-[#e5e5e5]">
                  <p className="text-3xl font-normal text-[#156d95]" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                    2.3K+
                  </p>
                  <p className="text-sm text-[#404040] mt-2" style={{ fontFamily: "var(--font-figtree), Figtree" }}>
                    Community Members
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <NewThreadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewThread}
        categories={CATEGORIES}
      />

      <Footer />
    </>
  );
}
