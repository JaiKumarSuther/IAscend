"use client";

import CustomButton from "@/app/components/CustomButton";
import { PasswordInput } from "@/app/components/PasswordField";
import { MobileInput } from "@/app/components/PhoneField";
import Image from "next/image";
import React, { useState } from "react";
import logoIcon from "../../../../public/assets/logo.png";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [countryCode, setCountryCode] = useState("+1");
  const [mobile, setMobile] = useState("234567890");
  const [password, setPassword] = useState("123456");
  const router = useRouter();

  const dummyUser = {
    mobile: "+1234567890",
    password: "123456",
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const enteredMobile = `${countryCode}${mobile}`;

    if (
      enteredMobile === dummyUser.mobile &&
      password === dummyUser.password
    ) {
      // Save in localStorage (optional, for client-side checks)
      localStorage.setItem("isAuthenticated", "true");

      // Save in cookies (required for middleware protection)
      document.cookie = "auth=authenticated; path=/";

      router.push("/dashboard");
    } else {
      alert("Invalid mobile number or password");
    }
  }

  return (
    <>
      <Image src={logoIcon} alt="Logo Icon" width={64} height={64} />

      <div className="space-y-2">
        <h2 className="text-[30px] lg:text-[36px] font-semibold text-[#18151A] leading-[100%] tracking-[0%]">
          Sign in
        </h2>
        <p className="font-[400] text-[16px] leading-[24px] tracking-[0] text-[#4C484E]">
          Enter your phone number and password to sign in.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5 w-full">
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
          placeholder="Enter Password"
          required
        />

        <p className="text-[14px] text-end cursor-pointer">
          <span
            onClick={() => router.push("/forgot-password")}
            className="text-[#D22286] hover:text-pink-600 font-[600]"
          >
            Forgot Password?
          </span>
        </p>

        <CustomButton text="Sign in" type="submit" disabled={false} />
      </form>

      <div className="flex items-center justify-center gap-[16px] w-[238px] mx-auto">
        <div className="w-[94px] h-px border-t border-[#D4D3D5]" />
        <span className="text-[14px] font-[600] text-[#18151A]">Or</span>
        <div className="w-[94px] h-px border-t border-[#D4D3D5]" />
      </div>

      <div
        onClick={() => router.push('/otp')}
        className="w-[361px] h-[44px] bg-white border border-[#F6CBE5] rounded-[8px] cursor-pointer px-[20px] py-[12px] flex items-center justify-center"
      >
        <span className="text-[16px] font-medium text-[#D22286]">
          Get an OTP on your phone
        </span>
      </div>

      <p className="text-[14px] font-[400] text-[#27222A] text-center">
        Don&apos;t have an account?
        <span
          onClick={() => router.push("/register")}
          className="text-[#D22286] hover:text-pink-600 font-[600] ml-2 cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </>
  );
}
