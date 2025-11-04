"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "@/components/header/Header";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import LottieAnimation from "@/components/lottie-animation/LottieAnimation";

const Forms = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (step === 1 && name) {
      setStep(2);
    } else if (step === 2 && email) {
      const params = new URLSearchParams({
        name: name,
        email: email,
      });
      router.push(`/results?${params.toString()}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (step === 1) {
      setName(e.target.value);
    } else if (step === 2) {
      setEmail(e.target.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header_container}>
        <Header showBackButton={true} />
        <br />
        <div className={style.animation_container}>
          <LottieAnimation />
        </div>
        <div className={style.content}>
          <p className={style.prompt}>
            {step === 1 ? "Let's start with the basics. Type in your first name." : "How should we contact you? Type in your email address."}
          </p>
        </div>
      </div>

      <div className={style.input_container} style={{ position: "relative" }}>
        <input
          type="text"
          placeholder={step === 1 ? "First name" : "Email address"}
          value={step === 1 ? name : email}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={style.input}
          style={{ paddingRight: "50px" }}
        />
        <button
          type="button"
          onClick={handleNext}
          className={style.next_button}
          style={{ opacity: (step === 1 && name || step === 2 && email) ? 1 : 0.5 }}
        >
          <Image className={style.next_icon} src="/back.png" alt="Next" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default Forms;
