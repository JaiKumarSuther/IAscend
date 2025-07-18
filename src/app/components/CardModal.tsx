"use client";

import { useState } from "react";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";

interface CardModalProps {
  open: boolean;
  onClose: () => void;
  mode: "add" | "edit";
  initialData?: {
    name: string;
    cardNumber: string;
    exp: string;
    cvv: string;
    isPrimary: boolean;
  };
  onSave: (data: {
    name: string;
    cardNumber: string;
    exp: string;
    cvv: string;
    isPrimary: boolean;
  }) => void;
  onDelete?: () => void;
}

export default function CardModal({
  open,
  onClose,
  mode,
  initialData,
  onSave,
  onDelete,
}: CardModalProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    cardNumber: initialData?.cardNumber || "",
    exp: initialData?.exp || "",
    cvv: initialData?.cvv || "",
    isPrimary: initialData?.isPrimary || false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-[720px] p-6 shadow-xl relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <button
            onClick={onClose}
            className="text-black flex items-center gap-2"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span className="font-semibold text-lg">
              {mode === "add" ? "Add New Card" : "Edit Card"}
            </span>
          </button>

          {mode === "edit" && onDelete && (
            <button
              onClick={() => setShowDeleteModal(true)}
              className="text-[#D2238B]"
            >
              <FaTrashAlt size={16} />
            </button>
          )}
        </div>

        <p className="text-sm text-gray-500 mb-6">
          {mode === "add" ? "Enter card details" : "Update card details"}
        </p>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Card Holder&apos;s Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border border-[#E0E0E0] rounded-md px-4 text-sm h-[44px]"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Card Number
            </label>
            <input
              type="text"
              value={formData.cardNumber}
              onChange={(e) => handleChange("cardNumber", e.target.value)}
              className="w-full border border-[#E0E0E0] rounded-md px-4 text-sm h-[44px]"
              placeholder="Card Number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              EXP
            </label>
            <input
              type="text"
              value={formData.exp}
              onChange={(e) => handleChange("exp", e.target.value)}
              className="w-full border border-[#E0E0E0] rounded-md px-4 text-sm h-[44px]"
              placeholder="MM/YY"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              CVV
            </label>
            <input
              type="text"
              value={formData.cvv}
              onChange={(e) => handleChange("cvv", e.target.value)}
              className="w-full border border-[#E0E0E0] rounded-md px-4 text-sm h-[44px]"
              placeholder="CVV"
            />
          </div>
        </div>

        {/* Primary Toggle */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-medium text-black">
            Save as primary card
          </span>

          {/* Toggle Switch */}
          <div
            onClick={() => handleChange("isPrimary", !formData.isPrimary)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
              formData.isPrimary ? "bg-[#4ADE80]" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                formData.isPrimary ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-4">
          <button
            onClick={onClose}
            className="w-full md:w-[180px] py-2.5 rounded-lg text-[#D2238B] border border-[#D2238B] font-semibold hover:bg-[#FFF5FB]"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(formData)}
            className="w-full md:w-[180px] py-2.5 rounded-lg text-white bg-gradient-to-r from-[#D42066] to-[#D12498] font-semibold hover:from-[#B01E75] hover:to-[#8C155A]"
          >
            {mode === "add" ? "Add" : "Update"}
          </button>
        </div>
      </div>
      <DeleteConfirmationModal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          onDelete?.();
          setShowDeleteModal(false);
          onClose(); // optional: close CardModal after delete
        }}
      />
    </div>
  );
}
