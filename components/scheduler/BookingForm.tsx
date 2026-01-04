"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  concerns: string;
  preferredCommunication: "video" | "phone" | "chat";
}

interface BookingFormProps {
  counselorName: string;
  appointmentDateTime: string;
  onSubmit: (data: BookingFormData) => void;
  isLoading?: boolean;
}

export const BookingForm = ({
  counselorName,
  appointmentDateTime,
  onSubmit,
  isLoading = false,
}: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    defaultValues: {
      preferredCommunication: "video",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">
            Appointment with {counselorName}
          </span>
          <br />
          {appointmentDateTime}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#202020] mb-2">
            First Name
          </label>
          <Input
            {...register("firstName", { required: "First name is required" })}
            placeholder="John"
            className="border-[#e5e5e5]"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#202020] mb-2">
            Last Name
          </label>
          <Input
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Doe"
            className="border-[#e5e5e5]"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#202020] mb-2">
          Email
        </label>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          type="email"
          placeholder="john@example.com"
          className="border-[#e5e5e5]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#202020] mb-2">
          Phone Number
        </label>
        <Input
          {...register("phone", { required: "Phone number is required" })}
          placeholder="+1 (555) 123-4567"
          className="border-[#e5e5e5]"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#202020] mb-2">
          What concerns would you like to discuss?
        </label>
        <Textarea
          {...register("concerns", {
            required: "Please tell us what you'd like to discuss",
          })}
          placeholder="Share what's on your mind..."
          rows={4}
          className="border-[#e5e5e5]"
        />
        {errors.concerns && (
          <p className="text-red-500 text-sm mt-1">{errors.concerns.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#202020] mb-3">
          Preferred Communication Method
        </label>
        <div className="space-y-2">
          {(["video", "phone", "chat"] as const).map((method) => (
            <label
              key={method}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                {...register("preferredCommunication")}
                value={method}
                className="w-4 h-4"
              />
              <span className="capitalize text-[#202020]">{method} Call</span>
            </label>
          ))}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: !isLoading ? 1.02 : 1 }}
        whileTap={{ scale: !isLoading ? 0.98 : 1 }}
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
      >
        {isLoading ? "Booking..." : "Book Appointment"}
      </motion.button>
    </form>
  );
};
