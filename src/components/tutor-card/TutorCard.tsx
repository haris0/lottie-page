import { useState, useEffect } from "react";
import LottieAnimation from "../lottie-animation/LottieAnimation";
import styles from "./TutorCard.module.css";

interface TutorCardProps {
  text: string;
}

const TutorCard = ({ text }: TutorCardProps) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightedIndex((prevIndex) => {
        if (prevIndex < text.length) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 100); // Adjust animation speed here

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className={styles.container}>
      <div className={styles.animation_container}>
        <LottieAnimation />
      </div>
      <p className={styles.text}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ color: index < highlightedIndex ? "white" : "gray" }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TutorCard;
