"use client";

import { HiSearch, HiX } from "react-icons/hi";
import Image from "next/image";
import type { Contact } from "./MessagingInterface";

interface ContactListProps {
  contacts: Contact[];
  selectedContact: Contact;
  onContactSelect: (contact: Contact) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

const filterTabs = [
  { id: "all", label: "All" },
  { id: "paid", label: "Paid Questions" },
  { id: "unread", label: "Unread" },
  { id: "health", label: "Health" },
];

export function ContactList({
  contacts,
  selectedContact,
  onContactSelect,
  searchQuery,
  onSearchChange,
  activeTab,
  onTabChange,
  onClose,
  isMobile = false,
}: ContactListProps) {
  return (
    <div className="w-full h-200 bg-white flex flex-col min-h-0">
      {/* Header */}
      <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-white flex-shrink-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">All Messages</h2>
        {isMobile && onClose && (
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <HiX className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>
      
      {/* Search and Filters */}
      <div className="p-3 sm:p-4 border-b border-gray-200 bg-white space-y-3 sm:space-y-4 flex-shrink-0">
        <div className="relative">
          <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white border-0"
          />
        </div>

        <div className="flex gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-2 sm:px-3 py-1.5 text-xs rounded-full transition-colors truncate ${
                tab.id === activeTab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contact List */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {contacts.length === 0 ? (
          <div className="p-4 text-center text-gray-500 text-sm">
            No contacts found
          </div>
        ) : (
          <div className="space-y-1 p-2">
            {contacts.map((contact) => {
              const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=6366f1&color=ffffff`;
              return (
                <div
                  key={contact.id}
                  onClick={() => onContactSelect(contact)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors hover:bg-purple-50 ${
                    selectedContact.id === contact.id
                      ? "bg-purple-50 border-l-4 border-purple-500"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
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
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-800 truncate text-sm sm:text-base">
                        {contact.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 truncate">
                        {contact.lastMessage}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className="text-xs text-gray-500">
                      {contact.timestamp}
                    </span>
                    {contact.unreadCount && contact.unreadCount > 0 && (
                      <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[20px] text-center">
                        {contact.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
