import styles from "./Home.module.css";

import Logo from "@/components/Icons/Logo";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Renotion</title>
      </Head>

      <header>
        <Link href="/">
          <a className={styles.logoWrapper}>
            <Logo className={styles.logoIcon} />
            Renotion
          </a>
        </Link>
      </header>

      <main className={styles.main}>
        <p>Homepage will go here</p>
      </main>
    </>
  );
};

export default Home;
