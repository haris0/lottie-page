"use client";

import { useSearchParams } from "next/navigation";
import style from "./page.module.css";
import LottieAnimation from "@/components/lottie-animation/LottieAnimation";
import Header from "@/components/header/Header";

const ResultsContent = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";

  return (
    <div className={style.container}>
      <div className={style.header_container}>
        <Header showBackButton />
        <br />
        <div className={style.animation_container}>
          <LottieAnimation />
        </div>
        <p className={style.prompt}>
          Thanks, {name}! Now, it's time to get a reality check.
          <br />
          <br />
          This will take 2-3 minutes.
        </p>
      </div>
      <button className={style.continue_button}>Continue</button>
    </div>
  );
};

export default ResultsContent;
