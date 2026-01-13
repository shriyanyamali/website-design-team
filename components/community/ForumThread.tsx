"use client";

import { MessageCircle, ThumbsUp, Flag } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";

export interface ForumPost {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  category: string;
  content: string;
  replies: number;
  likes: number;
  views: number;
  createdAt: Date;
  isPinned?: boolean;
}

interface ForumThreadProps {
  post: ForumPost;
  onClick: () => void;
  featured?: boolean;
}

export const ForumThread = ({
  post,
  onClick,
  featured = false,
}: ForumThreadProps) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: featured ? undefined : "#f9fafb" }}
      onClick={onClick}
      className={`border-b border-[#e5e5e5] p-6 cursor-pointer transition-colors last:border-0 ${
        featured ? "bg-teal-50 border-l-4 border-l-teal-600" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex-shrink-0 flex items-center justify-center text-white font-bold">
          {post.authorAvatar}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              {post.isPinned && (
                <span className="inline-block text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded mb-2">
                  📌 PINNED
                </span>
              )}
              <h3 className="text-lg font-semibold text-[#202020] hover:text-teal-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                <span className="font-medium text-[#202020]">
                  {post.author}
                </span>
                <span className="text-xs">in</span>
                <span className="bg-teal-50 text-teal-700 px-2 py-1 rounded border border-teal-200">
                  {post.category}
                </span>
                <span className="text-xs">
                  {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                </span>
              </div>
            </div>
          </div>

          {/* Preview */}
          <p className="text-[#202020] mt-3 line-clamp-2 text-sm">
            {post.content}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 hover:text-teal-600 transition-colors">
              <MessageCircle size={16} />
              <span>{post.replies} replies</span>
            </div>
            <div className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <ThumbsUp size={16} />
              <span>{post.likes} likes</span>
            </div>
            <span>{post.views} views</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
