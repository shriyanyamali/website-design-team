"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface NewThreadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    category: string;
    content: string;
  }) => void;
  categories: string[];
}

export const NewThreadModal = ({
  isOpen,
  onClose,
  onSubmit,
  categories,
}: NewThreadModalProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0] || "General");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      onSubmit({ title, category, content });
      setTitle("");
      setCategory(categories[0] || "General");
      setContent("");
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-[#e5e5e5] p-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#202020]">
            Start a New Discussion
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#202020] mb-2">
              Discussion Title
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What would you like to discuss?"
              required
              className="border-[#e5e5e5]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#202020] mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#202020] mb-2">
              Message
            </label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts, experiences, or ask for advice..."
              rows={6}
              required
              className="border-[#e5e5e5]"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Be respectful and supportive. All messages are moderated for
              safety.
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!title.trim() || !content.trim() || isLoading}
              className="bg-teal-600 hover:bg-teal-700"
            >
              {isLoading ? "Posting..." : "Post Discussion"}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
