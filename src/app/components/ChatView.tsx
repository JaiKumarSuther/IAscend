"use client";

import { useState } from "react";
import { HiVideoCamera, HiPhone, HiPlus, HiMenu } from "react-icons/hi";
import { HiPaperAirplane } from "react-icons/hi2";
import { FaVideo, FaPhoneAlt } from "react-icons/fa";
import { AttachmentModal } from "./AttachmentModal";
import Image from "next/image";
import { X } from "lucide-react";
import type { Contact, Message } from "./MessagingInterface";
import { CallingScreen } from "./CallingScreen";
import { VideoCallingScreen } from "./VideoCallingScreen";
import { PaymentModal } from "./PaymentModal";
import { OTPVerificationModal } from "./OTPVerificationModal";
import { ProcessingPaymentModal } from "./ProcessingPaymentModal";
import { PaymentSuccessModal } from "./PaymentSuccessModal";
interface ChatViewProps {
  contact: Contact;
  messages: Message[];
  onMenuToggle?: () => void;
  showMenuButton?: boolean;
}

export function ChatView({
  contact,
  messages,
  onMenuToggle,
  showMenuButton = false,
}: ChatViewProps) {
  const [showExpertModal, setShowExpertModal] = useState(true);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [showCallingScreen, setShowCallingScreen] = useState(false);
  const [showVideoCalling, setShowVideoCalling] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showProcessingModal, setShowProcessingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleOTPCompleted = () => {
    setShowOTPModal(false);
    setShowProcessingModal(true);

    setTimeout(() => {
      setShowProcessingModal(false);
      setShowSuccessModal(true); // ✅ Automatically open confirmation modal after 3s
    }, 3000);
  };
  return (
    <div className="flex flex-col h-full bg-white min-h-0">
      {/* Header */}
      <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-white flex-shrink-0">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {showMenuButton && onMenuToggle && (
            <button
              onClick={onMenuToggle}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            >
              <HiMenu size={20} className="text-gray-600" />
            </button>
          )}
          <div className="relative flex-shrink-0">
            <Image
              src={
                contact.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  contact.name
                )}&background=6366f1&color=ffffff`
              }
              alt={contact.name}
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
            {contact.isOnline && (
              <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-black text-sm sm:text-base truncate">
              {contact.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              {contact.isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={() => setShowVideoCalling(true)}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <HiVideoCamera className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          <button
            onClick={() => setShowCallingScreen(true)}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <HiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 sm:p-4 lg:p-6 overflow-y-auto bg-gray-50 min-h-0">
        <div className="space-y-4 lg:space-y-6">
          <div className="text-center text-gray-400 text-xs sm:text-sm">
            {new Date().toLocaleDateString()}
          </div>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 sm:gap-3 ${
                message.isCurrentUser ? "justify-end" : ""
              }`}
            >
              {!message.isCurrentUser && (
                <Image
                  src={
                    contact.avatar ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      contact.name
                    )}&background=6366f1&color=ffffff`
                  }
                  alt={contact.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
              )}

              <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[60%] space-y-1">
                <div
                  className={`
                    p-3 sm:p-4 rounded-lg shadow-sm text-sm sm:text-base leading-relaxed
                    ${
                      message.isCurrentUser
                        ? "bg-purple-500 text-white rounded-br-md"
                        : "bg-white text-black rounded-bl-md border border-gray-200"
                    }
                  `}
                >
                  {message.content}
                </div>

                <div
                  className={`text-xs text-gray-500 px-1 ${
                    message.isCurrentUser ? "text-right" : ""
                  }`}
                >
                  {message.timestamp}
                </div>
              </div>

              {message.isCurrentUser && (
                <Image
                  src={
                    contact.avatar ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      contact.name
                    )}&background=6366f1&color=ffffff&size=32`
                  }
                  alt={contact.name}
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Expert Guidance Banner */}
      {showExpertModal && (
        <div className="mx-3 sm:mx-4 mb-3 sm:mb-4 bg-[#000000e2] rounded-2xl p-4 text-white flex-shrink-0 relative">
          <button
            onClick={() => setShowExpertModal(false)}
            className="absolute top-3 right-3 p-1 hover:bg-[#4A4A4A] rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <p className="text-sm mb-3">
            Thanks for your questions! For personalized advice and faster
            solutions, book a 1-on-1 video or audio session today. 😊
          </p>

          <div className="flex gap-3 mb-2">
            <button
              onClick={() => setShowVideoCalling(true)}
              className="flex items-center gap-2 bg-[#0ABA6E] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#00A254] transition"
            >
              <FaVideo className="w-4 h-4" />
              Video
            </button>
            <button
              onClick={() => setShowCallingScreen(true)}
              className="flex items-center gap-2 bg-[#0ABA6E] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#00A254] transition"
            >
              Audio
              <FaPhoneAlt className="w-4 h-4" />
            </button>
          </div>

          <p className="text-white opacity-70">
            Or{" "}
            <span
              onClick={() => setShowPaymentModal(true)}
              className="text-[#FF5FBA] font-semibold cursor-pointer hover:underline"
            >
              Buy 10 more messages
            </span>
          </p>
        </div>
      )}

      {/* Message Input */}
      <div className="p-3 sm:p-4 border-t bg-white flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              onClick={() => setShowAttachmentModal((prev) => !prev)}
              className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
            >
              <HiPlus className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {showAttachmentModal && (
              <div className="absolute bottom-10 mb-2 left-0 z-50">
                <AttachmentModal />
              </div>
            )}
          </div>

          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-3 sm:px-4 py-2 sm:py-3">
            <input
              type="text"
              placeholder={`Hi ${contact.name.split(",")[0]},`}
              className="flex-1 bg-transparent text-sm sm:text-base placeholder-gray-500 focus:outline-none"
            />
            <button className="text-purple-400 ml-2 flex-shrink-0">
              <HiPaperAirplane className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
      {showCallingScreen && (
        <CallingScreen
          contactName={contact.name}
          avatar={contact.avatar}
          onEndCall={() => setShowCallingScreen(false)}
        />
      )}
      {showVideoCalling && (
        <VideoCallingScreen
          remoteVideo={contact.avatar}
          localVideo="/your-own-video.jpg" // Replace with real feed if needed
          callDuration="03:45"
          onEndCall={() => setShowVideoCalling(false)}
        />
      )}
      <PaymentModal
        open={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        price="49"
        onProceed={() => {
          setShowPaymentModal(false);
          setShowOTPModal(true); // ✅ Open OTP modal after payment
        }}
      />
      <OTPVerificationModal
        open={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        onCompleted={handleOTPCompleted} // ✅ Use the delayed handler
      />

      <ProcessingPaymentModal
        open={showProcessingModal}
        onClose={() => setShowProcessingModal(false)}
      />

      <PaymentSuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
}
