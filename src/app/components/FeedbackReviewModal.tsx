"use client";

import { useState } from "react";
import { Star, X, Camera } from "lucide-react";
import Image from "next/image";

export function FeedbackReviewModal({ onClose }: { onClose: () => void }) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [review, setReview] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files).slice(0, 5 - images.length);
      setImages((prev) => [...prev, ...fileArray]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (rating === 0) {
      alert("Please provide a rating before submitting");
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Review submitted successfully!");
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-2"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-[480px] max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="text-black px-4 py-5 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-transform hover:scale-110"
          >
            <X className="text-black w-4 h-4" />
          </button>
          <h2 className="text-black text-xl font-semibold">Share Your Experience</h2>
          <p className="text-black/80 text-xs">Your feedback helps us improve</p>
        </div>

        <div className="p-4 space-y-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-800 mb-2">
              What is your rating?
            </p>
            <div className="flex justify-center gap-2 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={24}
                    className={`${
                      (hoverRating || rating) >= star
                        ? "text-yellow-400 fill-yellow-400 drop-shadow-md"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-purple-600 text-xs font-medium">
                {["Poor", "Fair", "Good", "Very Good", "Excellent"][rating - 1]}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-600">
              Share your opinion about the product
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
              maxLength={300}
              className="w-full h-[80px] rounded-lg border border-gray-300 bg-gray-50 p-3 text-xs focus:ring-2 focus:ring-pink-500 resize-none"
            />
            <div className="text-right text-[10px] text-gray-400">
              {review.length}/300
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium text-gray-600">Add Photos</p>
            <div className="flex items-center gap-2 flex-wrap">
              {images.map((file, index) => (
                <div key={index} className="relative">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`Upload ${index}`}
                    width={64}
                    height={64}
                    className="rounded-lg object-cover border border-gray-200 w-16 h-16"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 text-[8px]"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
              {images.length < 5 && (
                <label className="w-16 h-16 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-[10px] text-gray-500 hover:bg-pink-50 hover:text-pink-600 cursor-pointer transition">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <Camera className="w-4 h-4 mb-0.5" />
                  Add
                </label>
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting || rating === 0}
            className={`w-full py-2 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transition ${
              isSubmitting || rating === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-[1.02]"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </div>
    </div>
  );
}
