"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export interface Counselor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  reviews: number;
  image: string;
  bio: string;
}

interface CounselorCardProps {
  counselor: Counselor;
  onSelect: (counselorId: string) => void;
}

export const CounselorCard = ({ counselor, onSelect }: CounselorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border border-[#e5e5e5] rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl">
          {counselor.name.charAt(0)}
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#202020]">
            {counselor.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {counselor.title}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < Math.floor(counselor.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {counselor.rating} ({counselor.reviews} reviews)
            </span>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-4">
            {counselor.specialties.slice(0, 3).map((specialty) => (
              <span
                key={specialty}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
              >
                {specialty}
              </span>
            ))}
          </div>

          {/* Button */}
          <Button
            onClick={() => onSelect(counselor.id)}
            variant="default"
            size="sm"
            className="w-full"
          >
            Schedule with {counselor.name.split(" ")[0]}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
