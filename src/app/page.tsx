import Image from "next/image";
import LottieAnimation from "./LottieAnimation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div style={{ width: 46 }} />
        <Image src="/logo.png" alt="Logo" width={123} height={29} />
        <button className={styles.refresh}>
          <Image src="/refresh.png" alt="Refresh" width={20} height={20} />
        </button>
      </header>
      <section className={styles.section}>
        <div className={styles.animation_container}>
          <LottieAnimation />
        </div>
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
        <button className={styles.footer_button}>Get a reality check</button>
      </footer>
    </div>
  );
}
