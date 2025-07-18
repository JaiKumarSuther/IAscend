"use client";

import CustomButton from "@/app/components/CustomButton";

import { MobileInput } from "@/app/components/PhoneField";
import Image from "next/image";
import React, { useState } from "react";
import logoIcon from "../../../../public/assets/password-encrpt.png";
// import arrowIcon from "../../../../public//assets/arrow-left.png";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ForgotPage() {
  const [countryCode, setCountryCode] = useState("+1");
  const [mobile, setMobile] = useState("");
  const router = useRouter();
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/otp");
    console.log({
      mobile: `${countryCode}${mobile}`,
    });
  }

  return (
    <>
      <button
        onClick={() => router.push("/")}
        className="rounded-full transition-colors cursor-pointer w-[34px] h-[34px] flex flex-row items-center justify-center"
      >
        <ArrowLeft size={34} className="text-[#000000] hover:text-[#D12498]" />
      </button>
      {/* <Image src={arrowIcon} alt="Logo Icon" width={34} height={34} className=""/> */}
      <Image src={logoIcon} alt="Logo Icon" width={62} height={62} />
      <div className="space-y-2">
        <h2 className="text-[30px] lg:text-[36px] font-semibold text-[#18151A] leading-[100%] tracking-[0%]">
          Forget Password
        </h2>
        <p className="font-[400] text-[16px] leading-[24px] tracking-[0] text-[#4C484E]">
          Please enter your registered mobile number. We&apos;ll send you a OTP
          to verify
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <MobileInput
          label="Mobile number"
          countryCode={countryCode}
          onCountryCodeChange={setCountryCode}
          number={mobile}
          onNumberChange={setMobile}
          required
        />

        <CustomButton
          text=" Send OTP"
          onClick={() => console.log("Clicked")}
          disabled={false}
        />
      </form>
    </>
  );
}
