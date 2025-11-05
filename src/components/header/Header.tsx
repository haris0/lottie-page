
'use client';

import Image from "next/image";
import styles from "./Header.module.css";
import { useRouter } from 'next/navigation';
import Link from "next/link";

interface HeaderProps {
  showBackButton?: boolean;
}

const Header = ({ showBackButton }: HeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  }

  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <header className={styles.header}>
      {showBackButton ? (
        <button className={styles.button} onClick={handleBack}>
          <Image src="/back.png" alt="Back" width={20} height={20} />
        </button>
      ) : (<div style={{ minWidth: 46 }} />)}
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={123} height={29} />
      </Link>
      <button className={styles.button} onClick={handleRefresh}>
        <Image src="/refresh.png" alt="Refresh" width={20} height={20} />
      </button>
    </header>
  );
};

export default Header;
