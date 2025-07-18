"use client";

import AccountMenu from '@/app/components/AccountMenu';
import InformationMenu from '@/app/components/InformationMenu';
import React from 'react';

const AccountSettingsPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#F5F5F5]">

      {/* Left Panel */}
      <div className="w-full md:w-[340px] bg-white border-b md:border-b-0 md:border-r border-[#E0E0E0] px-4 py-6">
        <AccountMenu menuTitle="Account Settings" />
      </div>

      {/* Center Message */}
      <div className="flex-1 bg-[#F5F5F5] flex items-center justify-center text-[#717171] text-sm font-medium font-plus-jakarta text-center px-4 py-8">
        Select an option to view its details
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[340px] bg-white border-t md:border-t-0 md:border-l border-[#E0E0E0] px-4 py-6">
        <InformationMenu />
      </div>

    </div>
  );
};

export default AccountSettingsPage;
