"use client";

import CustomButton from "@/app/components/CustomButton";
import { TextInput } from "@/app/components/CustomInput";
import { PasswordInput } from "@/app/components/PasswordField";
import { MobileInput } from "@/app/components/PhoneField";
import Image from "next/image";
import React, { useState } from "react";
import logoIcon from "../../../../public//assets/logo.png";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({
      name,
      mobile: `${countryCode}${mobile}`,
      password,
    });
  }

  return (
    <>
      {/* Shared logo */}
      <Image src={logoIcon} alt="Logo Icon" width={64} height={64} />
      <div className="space-y-2">
        <h2 className="text-[30px] lg:text-[36px] font-semibold text-[#18151A] leading-[100%] tracking-[0%]">
          Create an account
        </h2>
        <p className="font-[400] text-[16px] leading-[24px] tracking-[0] text-[#4C484E]">
          Create your account. It takes less than a minute. Enter your name,
          Phone number and Password
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <TextInput
          label="Your Name"
          value={name}
          placeholder="James Wilson"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <MobileInput
          label="Mobile number"
          countryCode={countryCode}
          onCountryCodeChange={setCountryCode}
          number={mobile}
          onNumberChange={setMobile}
          required
        />

        <PasswordInput
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="At least 6 characters"
          required
        />

        <CustomButton
          text="Create an account"
          onClick={() => console.log("Clicked")}
          disabled={false}
        />
      </form>

      <p className="text-[14px] font-[400] leading-[24px] tracking-[0] text-[#27222A] text-center">
        Already have an account?{" "}
        <span
          onClick={() => router.push("/login")}
          className="text-[#D22286] cursor-pointer hover:text-pink-600 font-[600]"
        >
          Sign in
        </span>
      </p>
    </>
  );
}
