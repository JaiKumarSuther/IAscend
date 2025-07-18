export function PaymentBannerModal({ onProceed }: { onProceed: () => void }) {
  return (
    <div className="bg-[#1B181DD9] rounded-xl p-4 text-white w-full">
      <h3 className="font-semibold text-sm sm:text-base mb-1">
        Unlock Expert Guidance!
      </h3>
      <p className="text-sm text-[#D4D3D5]">
        Get personalized answers to your questions from our experts for just $20.
      </p>
      <button
        onClick={onProceed}
        className="mt-2 text-sm font-medium text-[#FF5FBA] hover:underline"
      >
        Proceed to Pay
      </button>
    </div>
  );
}
