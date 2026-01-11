"use client";

import { useState } from "react";
import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";
import {
  CounselorCard,
  type Counselor,
} from "@/components/scheduler/CounselorCard";
import { DateTimePicker } from "@/components/scheduler/DateTimePicker";
import { BookingForm } from "@/components/scheduler/BookingForm";
import { motion } from "framer-motion";

type BookingStep = "counselor" | "datetime" | "form" | "confirmation";

const COUNSELORS: Counselor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Clinical Psychologist",
    specialties: ["Anxiety", "Depression", "Stress Management"],
    rating: 4.9,
    reviews: 127,
    image: "S",
    bio: "15+ years of experience in clinical psychology",
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Licensed Counselor",
    specialties: ["Trauma", "PTSD", "Grief Counseling"],
    rating: 4.8,
    reviews: 95,
    image: "M",
    bio: "Specializes in trauma-informed care",
  },
  {
    id: "3",
    name: "Emma Wilson",
    title: "Mental Health Therapist",
    specialties: ["Relationship Issues", "Bipolar Disorder", "Self-Esteem"],
    rating: 4.9,
    reviews: 112,
    image: "E",
    bio: "Passionate about holistic mental health",
  },
  {
    id: "4",
    name: "James Rodriguez",
    title: "Licensed Therapist",
    specialties: ["OCD", "Anxiety Disorders", "CBT Specialist"],
    rating: 4.7,
    reviews: 88,
    image: "J",
    bio: "Expert in cognitive-behavioral therapy",
  },
];

interface BookingData {
  counselorId: string;
  counselorName: string;
  date: Date;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  concerns: string;
  preferredCommunication: "video" | "phone" | "chat";
}

export default function SchedulerPage() {
  const [step, setStep] = useState<BookingStep>("counselor");
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleCounselorSelect = (counselorId: string) => {
    const counselor = COUNSELORS.find((c) => c.id === counselorId);
    setBookingData({
      ...bookingData,
      counselorId,
      counselorName: counselor?.name,
    });
    setStep("datetime");
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    setBookingData({
      ...bookingData,
      date,
      time,
    });
    setStep("form");
  };

  const handleFormSubmit = async (formData: any) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setBookingData({
        ...bookingData,
        ...formData,
      });
      setStep("confirmation");
    } catch (error) {
      console.error("Booking failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookAnother = () => {
    setBookingData({});
    setStep("counselor");
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
            className="text-center mb-16"
          >
            <h1
              className="text-6xl py-10 text-center font-normal text-[#202020] mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "500",
              }}
            >
              Book a Counseling Session
            </h1>
            <p
              className="text-lg leading-7 text-[#404040] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-figtree), Figtree" }}
            >
              Connect with our licensed counselors and therapists. All sessions
              are confidential and tailored to your needs.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4">
              {(["counselor", "datetime", "form", "confirmation"] as const).map(
                (s, index) => (
                  <div key={s} className="flex items-center">
                    <motion.div
                      animate={{
                        backgroundColor:
                          step === s
                            ? "#156d95"
                            : [
                                  "counselor",
                                  "datetime",
                                  "form",
                                  "confirmation",
                                ].indexOf(step) > index
                              ? "#10b981"
                              : "#e5e5e5",
                      }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    >
                      {index + 1}
                    </motion.div>
                    {index < 3 && (
                      <div className="w-12 h-0.5 bg-[#e5e5e5] mx-2" />
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {step === "counselor" && (
              <div>
                <h2
                  className="text-[40px] leading-tight font-normal text-[#202020] mb-8"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                >
                  Choose Your Counselor
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {COUNSELORS.map((counselor) => (
                    <CounselorCard
                      key={counselor.id}
                      counselor={counselor}
                      onSelect={handleCounselorSelect}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === "datetime" && (
              <div className="bg-white rounded-[20px] border border-[#e5e5e5] p-8 lg:p-12">
                <h2
                  className="text-[40px] leading-tight font-normal text-[#202020] mb-8"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                >
                  Schedule with {bookingData.counselorName}
                </h2>
                <DateTimePicker onSelectDateTime={handleDateTimeSelect} />
              </div>
            )}

            {step === "form" && (
              <div className="bg-white rounded-[20px] border border-[#e5e5e5] p-8 lg:p-12">
                <h2
                  className="text-[40px] leading-tight font-normal text-[#202020] mb-8"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                >
                  Complete Your Booking
                </h2>
                <BookingForm
                  counselorName={bookingData.counselorName || ""}
                  appointmentDateTime={
                    bookingData.date && bookingData.time
                      ? `${bookingData.date.toLocaleDateString()} at ${bookingData.time}`
                      : ""
                  }
                  onSubmit={handleFormSubmit}
                  isLoading={isLoading}
                />
              </div>
            )}

            {step === "confirmation" && (
              <div className="bg-white rounded-[20px] border border-[#e5e5e5] p-12 text-center">
                <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h2
                  className="text-[40px] leading-tight font-normal text-[#202020] mb-4"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                >
                  Booking Confirmed!
                </h2>
                <p
                  className="text-[#404040] mb-8 max-w-xl mx-auto"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                >
                  Your appointment has been confirmed. A confirmation email has
                  been sent to {bookingData.email}.
                </p>

                <div className="bg-[#fafafa] rounded-[20px] p-6 mb-8 text-left max-w-lg mx-auto border border-[#e5e5e5]">
                  <h3
                    className="font-normal text-[#202020] mb-4"
                    style={{ fontFamily: "var(--font-figtree), Figtree" }}
                  >
                    Appointment Details
                  </h3>
                  <div className="space-y-3 text-[#202020]">
                    <p>
                      <span className="font-semibold">Counselor:</span>{" "}
                      {bookingData.counselorName}
                    </p>
                    <p>
                      <span className="font-semibold">Date & Time:</span>{" "}
                      {bookingData.date?.toLocaleDateString()} at{" "}
                      {bookingData.time}
                    </p>
                    <p>
                      <span className="font-semibold">Method:</span>{" "}
                      {bookingData.preferredCommunication?.replace(/^./, (c) =>
                        c.toUpperCase()
                      )}{" "}
                      Call
                    </p>
                    <p>
                      <span className="font-semibold">Contact:</span>{" "}
                      {bookingData.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleBookAnother}
                  className="text-white bg-[#156d95] rounded-full px-[18px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                    fontWeight: "500",
                  }}
                >
                  Book Another Session
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
