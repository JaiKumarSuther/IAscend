"use client";

import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import type { Contact } from "./MessagingInterface";

interface MobileHeaderProps {
  selectedContact: Contact;
  onMenuToggle: () => void;
}

export function MobileHeader({
  selectedContact,
  onMenuToggle,
}: MobileHeaderProps) {
  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    selectedContact.name
  )}&background=6366f1&color=ffffff`;

  return (
    <div className="md:hidden w-full bg-purple-50 border-b border-gray-200 p-4 flex items-center gap-3">
      <button
        onClick={onMenuToggle}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <HiMenu className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src={selectedContact.avatar || fallbackAvatar}
            alt={selectedContact.name}
            fill
            className="rounded-full object-cover"
          />
          {selectedContact.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div>
          <h2 className="font-semibold text-black">{selectedContact.name}</h2>
          <p className="text-sm text-gray-600">
            {selectedContact.isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>
    </div>
  );
}
