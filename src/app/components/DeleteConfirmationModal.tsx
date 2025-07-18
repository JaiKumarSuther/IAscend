import { FaRegCreditCard } from "react-icons/fa";

interface DeleteConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteConfirmationModal({
  open,
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-[500px] p-8 shadow-xl text-center">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-[#FDECF4] rounded-full p-4">
            <FaRegCreditCard size={36} className="text-[#D2238B]" />
          </div>
        </div>

        {/* Text */}
        <h2 className="font-semibold text-[20px] mb-3 leading-snug">
          Are you sure you want to delete this card?
        </h2>
        <p className="text-[15px] text-[#7A7A7A] mb-8 leading-relaxed">
          This will remove card details permanently from your payment methods
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onClose}
            className="w-full sm:w-[200px] h-[46px] rounded-md border border-[#D2238B] text-[#D2238B] font-semibold text-[16px] hover:bg-[#FFF5FB] transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-full sm:w-[200px] h-[46px] rounded-md bg-gradient-to-r from-[#D42066] to-[#D12498] text-white font-semibold text-[16px] hover:from-[#B01E75] hover:to-[#8C155A] transition"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}
