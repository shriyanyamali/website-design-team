"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface BlogPost {
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

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
  variant?: "grid" | "list";
}

export const BlogCard = ({
  post,
  onClick,
  variant = "grid",
}: BlogCardProps) => {
  if (variant === "list") {
    return (
      <motion.div
        whileHover={{ backgroundColor: "#f9fafb" }}
        onClick={onClick}
        className="border-b border-[#e5e5e5] p-6 cursor-pointer transition-colors last:border-0 flex gap-6 items-start group"
      >
        <div className="h-28 w-40 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex-shrink-0" />

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-1 rounded border border-teal-200">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.readTime} min read
            </span>
          </div>

          <h3 className="text-xl font-semibold text-[#202020] group-hover:text-teal-600 transition-colors mb-2">
            {post.title}
          </h3>

          <p className="text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{post.date.toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <ArrowRight
          className="text-gray-300 group-hover:text-teal-600 transition-colors flex-shrink-0"
          size={20}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="bg-white rounded-lg border border-[#e5e5e5] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500" />

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-1 rounded border border-teal-200">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {post.readTime} min
          </span>
        </div>

        <h3 className="text-lg font-semibold text-[#202020] mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-[#e5e5e5]">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{post.date.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
