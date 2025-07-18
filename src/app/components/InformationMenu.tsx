"use client";

import React from "react";
import MenuRow from "./ui/MenuRow";

interface InfoMenuSection {
  title: string;
  items: { title: string; icon: string }[];
}

const sections: InfoMenuSection[] = [
  {
    title: "INFORMATION",
    items: [
      { title: "About us", icon: "/next-page.svg" },
      { title: "Refer a friend", icon: "/next-page.svg" },
      { title: "Offers", icon: "/next-page.svg" },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      { title: "Contact Us", icon: "/next-page.svg" },
      { title: "Feedback", icon: "/next-page.svg" },
      { title: "Raise grievance", icon: "/next-page.svg" },
    ],
  },
  {
    title: "LEGAL",
    items: [
      { title: "Terms & Conditions", icon: "/next-page.svg" },
      { title: "Privacy Policy", icon: "/next-page.svg" },
    ],
  },
];

const InformationMenu = () => {
  return (
    <div className="w-full max-w-[421px] bg-white rounded-lg flex flex-col px-5 py-6">
      <div className="flex flex-col gap-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-[#D22286] font-extrabold uppercase text-xs tracking-[0.08em] font-plus-jakarta">
              {section.title}
            </div>
            {section.items.map((item, idx) => (
              <MenuRow key={idx} title={item.title} icon={item.icon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};



export default InformationMenu;
