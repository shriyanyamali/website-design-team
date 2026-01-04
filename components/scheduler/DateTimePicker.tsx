"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DateTimePickerProps {
  onSelectDateTime: (date: Date, time: string) => void;
  minDate?: Date;
  availableSlots?: string[];
}

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export const DateTimePicker = ({
  onSelectDateTime,
  minDate = new Date(),
  availableSlots = TIME_SLOTS,
}: DateTimePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(minDate);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onSelectDateTime(selectedDate, selectedTime);
    }
  };

  const isDisabled = !selectedDate || !selectedTime;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-[#202020] mb-4">
          Select Date
        </h3>
        <div className="inline-block">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={minDate}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#202020] mb-4">
          Select Time
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {availableSlots.map((time) => (
            <motion.button
              key={time}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTime(time)}
              className={`py-2 px-3 rounded-lg border transition-all ${
                selectedTime === time
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-[#e5e5e5] hover:border-blue-600 text-[#202020]"
              }`}
            >
              {time}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: !isDisabled ? 1.02 : 1 }}
        whileTap={{ scale: !isDisabled ? 0.98 : 1 }}
        onClick={handleConfirm}
        disabled={isDisabled}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          isDisabled
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Confirm Selection
      </motion.button>
    </div>
  );
};
