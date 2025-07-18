"use client";

import CustomButton from "@/app/components/CustomButton";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logoIcon from "../../../../public/assets/password-encrpt.png";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  function handleChange(index: number, value: string) {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const pastedData = e.clipboardData
      .getData("Text")
      .replace(/\D/g, "")
      .slice(0, 4);
    if (pastedData.length > 0) {
      const pastedOtp = pastedData.split("");
      const updatedOtp = [...otp];
      for (let i = 0; i < otp.length; i++) {
        updatedOtp[i] = pastedOtp[i] || "";
      }
      setOtp(updatedOtp);

      const nextEmptyIndex = pastedOtp.length < 4 ? pastedOtp.length : 3;
      inputRefs.current[nextEmptyIndex]?.focus();
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const otpCode = otp.join("");
    console.log("Entered OTP:", otpCode);
    router.push("/reset-password");
  }

  function resendOtp() {
    if (timer === 0) {
      setOtp(["", "", "", ""]);
      inputRefs.current[0]?.focus();
      setTimer(60);
      console.log("OTP Resent");
    }
  }

  return (
    <>
      <button
        onClick={() => router.push("/")}
        className="rounded-full transition-colors cursor-pointer w-[34px] h-[34px] flex flex-row items-center justify-center"
      >
        <ArrowLeft size={34} className="text-[#000000] hover:text-[#D12498]" />
      </button>

      <Image src={logoIcon} alt="Logo Icon" width={62} height={62} />

      <div className="space-y-2">
        <h2 className="text-[30px] lg:text-[36px] font-semibold text-[#18151A] leading-[100%] tracking-[0%]">
          OTP Verification
        </h2>
        <p className="font-[400] text-[16px] leading-[24px] tracking-[0] text-[#4C484E]">
          Please enter the 4-digit OTP that was sent to your registered mobile
          number, +1 9819298373
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="w-full flex justify-between gap-[12px]">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-[60px] h-[64px] lg:w-[76px] lg:h-[78px] rounded-[8px] border border-[#D4D3D5] bg-white text-[#18151A]
        text-[24px] font-bold text-center font-plus-jakarta
        focus:outline-none focus:ring-2 focus:ring-[#D12498] transition-all"
            />
          ))}
        </div>

        <CustomButton
          text="Verify OTP"
          type="submit"
          disabled={otp.some((d) => d === "")}
        />
      </form>

      <p className="text-[14px] font-[400] leading-[24px] tracking-[0] text-[#27222A] text-center">
        If you don’t receive the code!
        <button
          onClick={resendOtp}
          disabled={timer > 0}
          className={`ml-2 font-[600] ${
            timer === 0
              ? "text-[#D22286] hover:text-pink-600"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          Resend code
        </button>
      </p>

      <p className="text-[14px] font-[600] leading-[100%] tracking-[0] text-[#827F83] text-center">
        {`00:${timer.toString().padStart(2, "0")}`}
      </p>
    </>
  );
}
