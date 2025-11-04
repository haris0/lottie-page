import style from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header/Header";
import LottieAnimation from "@/components/lottie-animation/LottieAnimation";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <section className={style.section}>
        <LottieAnimation />
        <div className={style.section_texts}>
          <span>WA businesses feel confident about future growth</span>
          <span>AI cant replace creativity</span>
          <span>Sales measure true success</span>
          <span>Human connection drives WA business</span>
          <span>
            The primary barrier to digital transformation is financial investment
          </span>
        </div>
      </section>
      <footer className={style.footer}>
        <h2 className={style.footer_text}>
          Compare your thoughts on{" "}
          <span className={style.footer_text_highlight}>technology</span> with
          current industry opinions.
        </h2>
        <Link href="/tutorial" className={style.footer_link}>
          <button className={style.footer_button}>Get a reality check</button>
        </Link>
      </footer>
    </div>
  );
}
