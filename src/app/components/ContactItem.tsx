"use client";

import Image from "next/image";
import type { Contact } from "./MessagingInterface";

interface ContactItemProps {
  contact: Contact;
  isSelected: boolean;
  onClick: () => void;
}

export function ContactItem({
  contact,
  isSelected,
  onClick,
}: ContactItemProps) {
  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    contact.name
  )}&background=6366f1&color=ffffff`;

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors border-l-4 ${
        isSelected ? "bg-pink-50 border-l-pink-500" : "border-l-transparent"
      }`}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0 w-10 h-10">
        <Image
          src={contact.avatar || fallbackAvatar}
          alt={contact.name}
          fill
          className="rounded-full object-cover"
        />
        {contact.isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium text-black text-sm truncate">
            {contact.name}
          </h3>
          <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
            {contact.timestamp}
          </span>
        </div>
        <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
      </div>

      {/* Unread Badge */}
      {contact.unreadCount && (
        <div className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium flex-shrink-0">
          {contact.unreadCount}
        </div>
      )}
    </div>
  );
}
