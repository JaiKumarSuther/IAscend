"use client";

import CustomButton from "@/app/components/CustomButton";
import { PasswordInput } from "@/app/components/PasswordField";
import Image from "next/image";
import React, { useState } from "react";
import logoIcon from "../../../../public/assets/password-encrpt.png";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ResetPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const isStrongPassword = (pwd: string) => {
    const strongPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return strongPattern.test(pwd);
  };

  const generateStrongPassword = (): string => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@$!%*#?&";
    const all = upper + lower + numbers + symbols;

    const result = [
      upper[Math.floor(Math.random() * upper.length)],
      lower[Math.floor(Math.random() * lower.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ];

    for (let i = result.length; i < 12; i++) {
      result.push(all[Math.floor(Math.random() * all.length)]);
    }

    return result.sort(() => 0.5 - Math.random()).join("");
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuggestion("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setSuggestion(generateStrongPassword());
      return;
    }

    if (!isStrongPassword(password)) {
      setError(
        "Password must include uppercase, lowercase, number, and special character."
      );
      setSuggestion(generateStrongPassword());
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    router.push("/login");
  }

  const applySuggestion = () => {
    setPassword(suggestion);
    setConfirm(suggestion);
    setSuggestion("");
    setError("");
  };

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
          Create New Password
        </h2>
        <p className="font-[400] text-[16px] leading-[24px] tracking-[0] text-[#4C484E]">
          Enter a new password. Make sure it’s secure and different from your previous one.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <PasswordInput
          label="New Password"
          value={password}
          onChange={setPassword}
          placeholder="At least 8 characters"
          required
        />
        <PasswordInput
          label="Confirm Password"
          value={confirm}
          onChange={setConfirm}
          placeholder="Re-enter password"
          required
        />

        {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

        {suggestion && (
          <p className="text-sm text-gray-700">
            Suggested Strong Password:{" "}
            <button
              type="button"
              onClick={applySuggestion}
              className="text-[#D22286] font-semibold underline"
            >
              {suggestion}
            </button>
          </p>
        )}

        <CustomButton text="Reset Password" type="submit" disabled={false} />
      </form>
    </>
  );
}
