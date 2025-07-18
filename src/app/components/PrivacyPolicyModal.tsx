"use client";

import { FaArrowLeft } from "react-icons/fa";

interface PrivacyPolicyModalProps {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export function PrivacyPolicyModal({
  open,
  onClose,
  onAccept,
}: PrivacyPolicyModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-6">
      <div className="bg-white rounded-2xl w-full max-w-[700px] max-h-[85vh] p-6 shadow-xl text-left relative flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <button onClick={onClose} className="text-black">
            <FaArrowLeft size={18} />
          </button>
          <h2 className="text-xl font-semibold text-black">Privacy Policy</h2>
        </div>

        {/* Scrollable Content */}
        <div
          className="overflow-y-scroll pr-2 custom-scrollbar flex-1"
          style={{ maxHeight: "calc(85vh - 140px)" }}
        >
          <div className="text-[15px] text-[#4B5563] space-y-6 leading-relaxed">

            <div>
              <h3 className="font-semibold text-black mb-2 text-base">
                We care about your privacy
              </h3>
              <p>
                Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our website, and we are committed to protecting your personal data.
              </p>
              <p className="mt-3">
                We collect information solely to provide and improve our services to you. Our commitment is to transparency and security. We will never sell or share your data unnecessarily.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-2 text-base">
                What information do we collect?
              </h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>Information you provide directly, such as your name, email address, and contact details.</li>
                <li>Data about your usage of our platform including pages viewed, time spent, and interaction patterns.</li>
                <li>Information from cookies and similar tracking technologies.</li>
                <li>Details required to process payments securely, where applicable.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-2 text-base">
                How do we use your information?
              </h3>
              <p>
                We use your information to personalize your experience, provide customer support, process transactions, and send periodic emails with updates and promotions (where consented).
              </p>
              <p className="mt-3">
                Protecting your data is our priority. We implement a variety of security measures to maintain the safety of your personal information.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-2 text-base">
                Your rights
              </h3>
              <p>
                You have the right to access, correct, or delete your personal data at any time. To make such a request, please contact our support team.
              </p>
              <p className="mt-3">
                For full details, please review our complete Privacy Policy on our website.
              </p>
            </div>

          </div>
        </div>

        {/* Footer Button */}
        <div className="pt-4 border-t mt-4">
          <button
            onClick={onAccept}
            className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-[#D42066] to-[#D12498] font-semibold hover:from-[#B01E75] hover:to-[#8C155A] transition"
          >
            Accept & Continue
          </button>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
