"use client";

import React from "react";
import Image from "next/image";
import MenuRow from "./ui/MenuRow";

interface AccountMenuProps {
  menuTitle: string;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ menuTitle }) => {
  return (
    <div className="w-full max-w-[421px] bg-white rounded-lg flex flex-col px-5 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex justify-center items-center cursor-pointer w-6 h-6 rounded-sm border border-[#0000003B]">
          <Image src="/left.svg" alt="Back Icon" width={6} height={12} />
        </div>
        <span className="text-lg font-semibold text-black font-plus-jakarta">
          {menuTitle}
        </span>
      </div>

      {/* Invite Box */}
      <div className="w-full bg-[#D22286] rounded-lg flex items-center gap-3 px-4 py-3 mb-8">
        <Image src="/Gift-box.svg" alt="Invite" width={42} height={42} />
        <div className="text-white text-xs font-normal font-plus-jakarta leading-[16px]">
          <p>Share Wellness, Earn Rewards</p>
          <p>Invite friends and earn $10 each!</p>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-[#D22286] font-extrabold uppercase text-xs tracking-[0.08em] font-plus-jakarta mb-4">
        Account
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-0 w-full">
        <MenuRow title="Personal Information" icon="/next-page.svg" />
        <MenuRow title="Payment Method" icon="/next-page.svg" />
        <MenuRow title="Purchase History" icon="/next-page.svg" />
        <MenuRow title="My Bookings" icon="/next-page.svg" />
        <MenuRow title="Deactivate Account" icon="/null.svg" />
        <MenuRow title="Delete Account" icon="/delete.svg" />
        <MenuRow title="Log out" icon="/logout.svg" />
      </div>
    </div>
  );
};


export default AccountMenu;
