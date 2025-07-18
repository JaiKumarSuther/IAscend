"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import userAvatar from "../../../public/assets/avatar.jpg";
import Image from "next/image";
import { NotificationPopover } from "./notification-popover";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();
  return (
    <nav className="bg-[#D22282] h-[79px] px-2 lg:px-[53px] py-[14px]  w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <Image src='/logo-white.svg' alt="Logo Icon" width={37} height={45} onClick={() => router.push('/dashboard')} className="cursor-pointer"/>

          {/* Right side - Actions */}
          <div className="flex items-center gap-[12px]">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors relative cursor-pointer"
              >
                <Bell size={24} className="text-white" fill="currentColor" />
                {/* Notification badge */}
                {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">5</span>
              </div> */}
              </button>

              {/* Notification Popover */}
              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    onClick={() => setShowNotifications(false)}
                  />
                  <NotificationPopover
                    onClose={() => setShowNotifications(false)}
                  />
                </>
              )}
            </div>

            <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
              <Image
                src={userAvatar}
                alt="avatar"
                width={50}
                height={50}
                className="aspect-square object-cover rounded-full"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
