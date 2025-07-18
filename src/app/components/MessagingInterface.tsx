"use client";

import { useState, useEffect } from "react";
import { ContactList } from "./ContactList";
import { ChatView } from "./ChatView";
import { X } from "lucide-react";

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  isOnline: boolean;
  category: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Maria Miller",
     avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Hi, Jenny wilson. How may I help y...",
    timestamp: "01:00 PM",
    unreadCount: 5,
    isOnline: true,
    category: "health",
  },
  {
    id: "2",
    name: "Miles, Esther",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    lastMessage: "When will the contract be sent?",
    timestamp: "12:30 PM",
    unreadCount: 5,
    isOnline: false,
    category: "paid",
  },
  {
    id: "3",
    name: "Nguyen, Shane",
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    lastMessage: "It's really nice working with you",
    timestamp: "Wednesday",
    isOnline: false,
    category: "paid",
  },
  {
    id: "4",
    name: "Cooper, Kristin",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Are you there? interested in this lo...",
    timestamp: "Saturday",
    isOnline: false,
    category: "health",
  },
  {
    id: "5",
    name: "Miles, Esther",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Then make a deal",
    timestamp: "Sunday",
    unreadCount: 2,
    isOnline: false,
    category: "all",
  },
  {
    id: "6",
    name: "Black, Marvin",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Are you There? I'm busy yesterday.",
    timestamp: "Friday",
    isOnline: false,
    category: "all",
  },
  {
    id: "7",
    name: "Henry, Arthur",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Hello?",
    timestamp: "Tuesday",
    isOnline: false,
    category: "health",
  },

];

const messagesByContact: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      senderId: "1",
      content:
        "Of course! Yoga is a fantastic way to improve flexibility, strength, and mindfulness. Do you have any specific goals, like stress relief, weight loss, or improving flexibility?",
      timestamp: "10:21 PM",
      isCurrentUser: false,
    },
    {
      id: "2",
      senderId: "current",
      content:
        "I'd like to reduce stress and improve my posture. I work at a desk all day and feel a lot of tension in my back and shoulders.",
      timestamp: "10:21 PM",
      isCurrentUser: true,
    },
    {
      id: "3",
      senderId: "1",
      content:
        "Perfect! For desk workers, I recommend starting with gentle neck rolls, shoulder blade squeezes, and cat-cow stretches. These can be done right at your desk.",
      timestamp: "10:22 PM",
      isCurrentUser: false,
    },
  ],
  "2": [
    {
      id: "1",
      senderId: "2",
      content: "When will the contract be sent?",
      timestamp: "12:30 PM",
      isCurrentUser: false,
    },
    {
      id: "2",
      senderId: "current",
      content: "I'll send it by end of today.",
      timestamp: "12:35 PM",
      isCurrentUser: true,
    },
    {
      id: "3",
      senderId: "2",
      content: "Great! I'll review it as soon as I receive it.",
      timestamp: "12:36 PM",
      isCurrentUser: false,
    },
  ],
  "3": [
    {
      id: "1",
      senderId: "3",
      content: "Hello? interested in this loads?",
      timestamp: "Yesterday",
      isCurrentUser: false,
    },
    {
      id: "2",
      senderId: "current",
      content: "Yes, I'm interested. Can you provide more details?",
      timestamp: "Yesterday",
      isCurrentUser: true,
    },
  ],
  "4": [
    {
      id: "1",
      senderId: "4",
      content: "Are you there? interested in this loads?",
      timestamp: "Saturday",
      isCurrentUser: false,
    },
  ],
  "5": [
    {
      id: "1",
      senderId: "5",
      content: "Then make a deal",
      timestamp: "Sunday",
      isCurrentUser: false,
    },
  ],
  "6": [
    {
      id: "1",
      senderId: "6",
      content: "Are you There? I'm busy yesterday.",
      timestamp: "Friday",
      isCurrentUser: false,
    },
  ],
  "7": [
    {
      id: "1",
      senderId: "7",
      content: "Hello?",
      timestamp: "Tuesday",
      isCurrentUser: false,
    },
  ],
  "8": [
    {
      id: "1",
      senderId: "8",
      content: "It's really nice working with you",
      timestamp: "Wednesday",
      isCurrentUser: false,
    },
  ],
};

interface MessagingInterfaceProps {
  onClose?: () => void;
}

export function MessagingInterface({ onClose }: MessagingInterfaceProps) {
  const [selectedContact, setSelectedContact] = useState<Contact>(
    mockContacts[0]
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showSidebar, setShowSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowSidebar(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredContacts = mockContacts.filter((contact) => {
    const matchesSearch = contact.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || contact.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const currentMessages = messagesByContact[selectedContact.id] || [];

  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact);
    if (isMobile) setShowSidebar(false);
  };

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex w-full min-h-screen">
      <main className="flex-1 w-full">
        <div className="p-2 sm:p-4 lg:p-6">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
    
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>

           <div className="flex w-full h-200 border rounded-xl overflow-hidden bg-white relative shadow-lg">
      {/* Sidebar - Contact List */}
            <aside
              className={`
                ${
                  isMobile
                    ? `absolute inset-y-0 left-0 z-20 w-full bg-white transform transition-transform duration-300 ease-in-out ${
                        showSidebar ? "translate-x-0" : "-translate-x-full"
                      }`
                    : `relative w-80 lg:w-96 ${
                        showSidebar ? "block" : "hidden"
                      }`
                }
                border-r border-gray-200
              `}
            >
              <ContactList
                contacts={filteredContacts}
                selectedContact={selectedContact}
                onContactSelect={handleContactSelect}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onClose={() => setShowSidebar(false)}
                isMobile={isMobile && showSidebar}
              />
            </aside>

            {/* Chat Section */}
            <section
              className={`
                flex-1 flex flex-col min-w-0
                ${isMobile && showSidebar ? "hidden" : "flex"}
              `}
            >
              <ChatView
                contact={selectedContact}
                messages={currentMessages}
                onMenuToggle={handleSidebarToggle}
                showMenuButton={isMobile || !showSidebar}
              />
            </section>
          </div>
        </div>
      </main>
        
    </div>
  );
}
