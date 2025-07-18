"use client";

import { useState } from "react";
import AboutMeSection from "@/app/components/AboutMeSection";
import ProfileCard from "@/app/components/ProfileCard";
import { ReviewsSummary } from "@/app/components/ReviewsSummary";
import { ServiceCard } from "@/app/components/Services";
import { services } from "@/Utils/dummy";
import { ServiceDetailsModal } from "@/app/components/ServiceDetailsModal";
import { BookingSlotsModal } from "@/app/components/BookingSlotsModal";
import { PaymentModal } from "@/app/components/PaymentModal";
import { ConfirmationModal } from "@/app/components/ConfirmationModal";
import { StaticImageData } from "next/image";

interface Service {
  id: number | string;
  name: string;
  image: string | StaticImageData; // ✅ Accept both types
  price: string;
  author: string;
  rating: number;
  duration: string;
  level?: string;
  isTopExpert?: boolean;
}
export default function Booking() {
const [selectedService, setSelectedService] = useState<{
  image: string | StaticImageData;
  title: string;
  price: string;
  description: string;
  duration?: string;
  author?: string;
  level?: string;
} | null>(null);

  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService({
      image: service.image,
      title: service.name, // map name to title
      price: service.price,
      description:
        "Meditation for Inner Peace by Jane Doe offers a calming journey into mindfulness and tranquility. Perfect for all skill levels.",
      duration: service.duration,
      author: service.author,
      level: service.level || "All Levels",
    });
    setShowServiceModal(true);
    setShowBookingModal(false);
  };
  const handleAskQuestionClick = () => {
    setShowServiceModal(false);
    setShowBookingModal(true);
  };

  const handleBookingBack = () => {
    setShowBookingModal(false);
    setShowServiceModal(true);
  };

  const handleBookClick = () => {
    setShowBookingModal(false);
    setShowPaymentModal(true);
  };

  return (
    <div className="bg-[#F4F4F4] px-4 md:px-10 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row lg:gap-20">
        <div className="flex-1">
          <ProfileCard />
          <AboutMeSection />
          <h3 className="font-semibold text-2xl mb-2">Reviews</h3>
          <ReviewsSummary
            totalReviews={245}
            averageRating={4.0}
            breakdown={[
              { stars: 5, percentage: 70 },
              { stars: 4, percentage: 80 },
              { stars: 3, percentage: 60 },
              { stars: 2, percentage: 30 },
              { stars: 1, percentage: 10 },
            ]}
          />
        </div>

        <div className="flex-1">
          <section className="pt-8 lg:pt-0">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <div className="space-y-4">
              {services.map((service: Service) => (
                <ServiceCard
                  key={service.id}
                  name={service.name}
                  rating={service.rating}
                  price={service.price}
                  title={service.name}
                  image={service.image}
                  author={service.author}
                  duration={service.duration}
                  isTopExpert={service.isTopExpert}
                  onClick={() => handleServiceClick(service)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      <ServiceDetailsModal
        open={showServiceModal}
        onClose={() => setShowServiceModal(false)}
        service={
          selectedService
            ? {
                image:
                  typeof selectedService.image === "string"
                    ? selectedService.image
                    : selectedService.image.src, // ✅ Ensures a string
                title: selectedService.title,
                price: selectedService.price,
                description:
                  "Meditation for Inner Peace by Jane Doe offers a calming journey into mindfulness and tranquility. Perfect for all skill levels.",
                duration: selectedService.duration,
                author: selectedService.author,
                level: selectedService.level || "All Levels",
              }
            : null
        }
        onAskQuestion={handleAskQuestionClick}
      />

      <BookingSlotsModal
        open={showBookingModal}
        onClose={handleBookingBack}
        expertName={selectedService?.author || "Maria Miller"}
        price={selectedService?.price || "120"}
        onBook={handleBookClick}
      />

      <PaymentModal
        open={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        price={selectedService?.price || "120"}
        onProceed={() => {
          setShowPaymentModal(false);
          setShowConfirmationModal(true);
        }}
      />

      <ConfirmationModal
        open={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
      />
    </div>
  );
}
