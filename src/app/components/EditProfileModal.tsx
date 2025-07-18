"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
}

export function EditProfileModal({ open, onClose }: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "US +1",
    dob: "",
    gender: "",
    zodiac: "",
    url: "",
    state: "",
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showUrl, setShowUrl] = useState(true);
  const countryCodes = ["US +1", "UK +44", "PK +92"];
  const genders = ["Male", "Female", "Other"];
  const zodiacs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  const states = ["California", "Texas", "Florida", "New York", "Illinois"];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAFAFA] w-full max-w-[700px] rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl relative max-h-[90vh] overflow-y-auto">
        {/* Profile Image Upload */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
          <div className="relative w-[60px] h-[60px] sm:w-[71px] sm:h-[71px] rounded-full border-2 border-[#00000012] bg-white flex items-center justify-center">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                width={71}
                height={71}
                className="object-cover rounded-full w-[60px] h-[60px] sm:w-[71px] sm:h-[71px] border border-[#00000012]"
              />
            ) : (
              <Image
                src="/user.svg"
                alt="User Icon"
                width={32}
                height={32}
                className="object-contain w-6 h-6 sm:w-8 sm:h-8"
              />
            )}
            <button
              type="button"
              className="absolute -bottom-1 -right-1 rounded-full flex items-center justify-center"
              onClick={() => fileInputRef.current?.click()}
            >
              <Image
                src="/plus.svg"
                alt="Add Icon"
                width={20}
                height={20}
                className="sm:w-6 sm:h-6"
              />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6 pr-16 sm:pr-20">
          <button onClick={onClose} className="text-black">
            <FaArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-black">
            Edit Profile
          </h2>
        </div>

        <p className="text-sm text-gray-500 mb-6 sm:mb-8">
          Update your info here
        </p>

        {/* Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {/* Row 1 */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border border-[#E0E0E0] rounded-md pl-4 pr-4 text-sm h-[44px]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border border-[#E0E0E0] rounded-md pl-4 pr-4 text-sm h-[44px]"
              placeholder="Email"
            />
          </div>

          {/* Row 2 */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-black mb-1">
              Mobile number
            </label>
            <div className="flex gap-2">
              <div className="relative w-[100px] flex-shrink-0">
                <select
                  value={formData.countryCode}
                  onChange={(e) => handleChange("countryCode", e.target.value)}
                  className="appearance-none w-full border border-[#E0E0E0] rounded-md pl-2 sm:pl-4 pr-6 text-xs sm:text-sm h-[44px]"
                >
                  {countryCodes.map((code) => (
                    <option key={code}>{code}</option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
                />
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="flex-1 border border-[#E0E0E0] rounded-md pl-4 pr-4 text-sm h-[44px]"
                placeholder="Mobile Number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Date of birth
            </label>
            <input
              type="text"
              value={formData.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              placeholder="dd/mm/yy"
              className="w-full border border-[#E0E0E0] rounded-md pl-4 pr-4 text-sm h-[44px]"
            />
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Gender
            </label>
            <div className="relative">
              <select
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="appearance-none w-full border border-[#E0E0E0] rounded-md pl-4 pr-10 text-sm text-gray-600 h-[44px]"
              >
                <option value="">Select</option>
                {genders.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Zodiac
            </label>
            <div className="relative">
              <select
                value={formData.zodiac}
                onChange={(e) => handleChange("zodiac", e.target.value)}
                className="appearance-none w-full border border-[#E0E0E0] rounded-md pl-4 pr-10 text-sm text-gray-600 h-[44px]"
              >
                <option value="">Select</option>
                {zodiacs.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Public URL
            </label>
            <div className="flex items-center border border-[#E0E0E0] rounded-md pl-4 pr-4.5 text-sm h-[44px]">
              <input
                type={showUrl ? "text" : "password"} // 👈 Toggle input type
                value={formData.url}
                onChange={(e) => handleChange("url", e.target.value)}
                className="flex-1 outline-none bg-transparent text-sm"
                placeholder="ia.me/jameswilson/2312"
              />
              <button
                type="button"
                onClick={() => setShowUrl((prev) => !prev)} // 👈 Toggle on click
                className="ml-2 focus:outline-none"
              >
                {showUrl ? (
                    <FaEye className="text-black" />
                ) : (
                    <FaEyeSlash className="text-black" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              State
            </label>
            <div className="relative">
              <select
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className="appearance-none w-full border border-[#E0E0E0] rounded-md pl-4 pr-10 text-sm text-gray-600 h-[44px]"
              >
                <option value="">Select State</option>
                {states.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-4">
          <button
            onClick={onClose}
            className="w-full sm:w-[190px] py-2.5 rounded-md text-[#D2238B] border border-[#D2238B] font-semibold text-base hover:bg-[#FFF5FB] order-2 sm:order-1"
          >
            Cancel
          </button>
          <button
            onClick={() => alert("Changes Saved")}
            className="w-full sm:w-[190px] py-2.5 rounded-md text-white bg-gradient-to-r from-[#D42066] to-[#D12498] font-semibold text-base hover:from-[#B01E75] hover:to-[#8C155A] order-1 sm:order-2"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
