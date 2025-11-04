import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header/Header";
import LottieAnimation from "@/components/lottie-animation/LottieAnimation";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.section}>
        <LottieAnimation />
        <div className={styles.section_texts}>
          <span>WA businesses feel confident about future growth</span>
          <span>AI cant replace creativity</span>
          <span>Sales measure true success</span>
          <span>Human connection drives WA business</span>
          <span>
            The primary barrier to digital transformation is financial investment
          </span>
        </div>
      </section>
      <footer className={styles.footer}>
        <h2 className={styles.footer_text}>
          Compare your thoughts on{" "}
          <span className={styles.footer_text_highlight}>technology</span> with
          current industry opinions.
        </h2>
        <Link href="/tutorial" className={styles.footer_link}>
          <button className={styles.footer_button}>Get a reality check</button>
        </Link>
      </footer>
    </div>
  );
}
