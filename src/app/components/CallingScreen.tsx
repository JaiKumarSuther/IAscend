import Image from "next/image";
import { HiPhoneMissedCall } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
interface CallingScreenProps {
  contactName: string;
  avatar: string;
  onEndCall: () => void;
}

export function CallingScreen({
  contactName,
  avatar,
  onEndCall,
}: CallingScreenProps) {
  return (
    <div className="fixed inset-0 bg-[#25212E] flex flex-col justify-center items-center z-50">
      <p className="text-white text-lg mb-4">Calling...</p>
      <Image
        src={avatar}
        alt={contactName}
        width={80}
        height={80}
        className="rounded-full w-20 h-20 object-cover mb-2"
      />
      <p className="text-white text-sm mb-8">{contactName}</p>

      <div className="flex items-center gap-6">
        {/* End Call Button */}
        <button
          onClick={onEndCall}
          className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-lg hover:bg-red-600 transition"
        >
          <HiPhoneMissedCall />
        </button>

        {/* Accept Call Button */}
        <button
          onClick={onEndCall}
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg hover:bg-green-600 transition"
        >
          <IoCall />
        </button>
      </div>
    </div>
  );
}
