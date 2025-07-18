"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import avatar2 from "../../../public/assets/avatar2.png";
import avatar3 from "../../../public/assets/avatar3.png";
import avatar4 from "../../../public/assets/avatar4.png";

interface Notification {
  id: string;
  title: string;
  author: string;
  avatar?: string | StaticImageData;
  time: string;
  name?: string;
}

interface NotificationPopoverProps {
  onClose: () => void;
}

export function NotificationPopover({ onClose }: NotificationPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  const notifications: Notification[] = [
    {
      id: "1",
      title: "Meditation for inner peace",
      author: "Jane Doe",
      avatar: avatar4,
      time: "10m ago",
    },
    {
      id: "2",
      title: "Yoga for spine",
      author: "Jane Doe",
      name: "PM",
      time: "36m ago",
    },
    {
      id: "3",
      title: "Yoga for spine",
      author: "Jane Doe",
      avatar: avatar3,
      time: "1h ago",
    },
    {
      id: "4",
      title: "Yoga for Body Harmony",
      author: "Jane Doe",
      name: "HR",
      time: "2h ago",
    },
    {
      id: "5",
      title: "Fitness Journey",
      author: "Jane Doe",
      avatar: avatar2,
      time: "7d ago",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={popoverRef}
      className="fixed right-30 top-14   w-[350px] bg-white rounded-xl overflow-hidden shadow-lg z-50"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-[18px] text-black">Notification</h3>
      </div>

      {/* Notifications */}
      <div className="max-h-[500px] overflow-y-auto">
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            className={`flex items-center hover:bg-[#0000000c] cursor-pointer justify-between px-4 py-3 ${
              index !== notifications.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              {notification.avatar ? (
                <Image
                  src={notification.avatar}
                  alt={notification.author}
                  width={40}
                  height={40}
                  className="rounded-full w-10 h-10 object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#C4C4C4] flex items-center justify-center text-white font-medium text-sm uppercase">
                  {notification.name}
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-black truncate">
                  {notification.title}
                </p>
                <p className="text-xs text-gray-500">By {notification.author}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400 flex-shrink-0">
              {notification.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
