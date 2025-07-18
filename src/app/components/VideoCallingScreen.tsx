import Image from "next/image";
import {
  FaMicrophone,
  FaVolumeUp,
  FaVideo,
} from "react-icons/fa";
import { HiPhoneMissedCall } from "react-icons/hi";

interface VideoCallingScreenProps {
  remoteVideo: string;
  localVideo: string;
  callDuration: string;
  onEndCall: () => void;
}

export function VideoCallingScreen({
  callDuration,
  onEndCall,
}: VideoCallingScreenProps) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col justify-between items-center">
      {/* Full Remote Video */}
      <Image
        src="/assets/girl-image.png"
        alt="Remote Video"
        fill
        className="object-cover object-center"
      />

      {/* Calling Text */}
      <p className="text-white font-medium text-sm mt-6 z-10">Calling...</p>

      {/* Local Video Preview */}
      <div className="absolute bottom-10 left-4 rounded-xl overflow-hidden w-[200px] h-[260px] z-10 shadow-md">
        <Image
          src="/assets/expert.png"
          alt="Your Video"
          width={100}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Call Duration */}

      {/* Controls */}
      <div className="flex flex-col items-center justify-center gap-4 pb-8 z-10">
        <div className="text-black text-[11px] bg-white/70 rounded-md px-2 py-[2px] mt-4 mb-3 z-10">
          {callDuration}
        </div>
        {/* Call Controls */}
        <div className="flex gap-2 items-center">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
            <FaMicrophone size={14} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
            <FaVolumeUp size={14} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
            <FaVideo size={14} />
          </button>

          {/* Red End Call Button */}
          <button
            onClick={onEndCall}
            className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition"
          >
            <HiPhoneMissedCall />
          </button>
        </div>
      </div>
    </div>
  );
}
