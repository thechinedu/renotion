import styles from "./Account.module.css";

import AppleLogo from "@/components/Icons/AppleLogo";
import GoogleLogo from "@/components/Icons/GoogleLogo";
import Logo from "@/components/Icons/Logo";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

export enum AccountType {
  NEW,
  EXISTING,
}

type AccountProps = {
  type: AccountType;
};

const AccountTypeOptions = {
  [AccountType.NEW]: {
    title: "Sign up",
  },
  [AccountType.EXISTING]: {
    title: "Log in",
  },
};

const Account: FC<AccountProps> = ({ type }) => {
  return (
    <>
      <Head>
        <title>Renotion - {AccountTypeOptions[type].title}</title>
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
        <h1 className={styles.heading}>{AccountTypeOptions[type].title}</h1>
        <button className={`${styles.btn} ${styles.oauthBtn}`}>
          <GoogleLogo className={styles.icon} />
          Continue with Google
        </button>
        <button className={`${styles.btn} ${styles.oauthBtn}`}>
          <AppleLogo className={styles.icon} />
          Continue with Apple
        </button>

        <form className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              type="email"
              placeholder="Enter your email address..."
              className={styles.emailInput}
            />
          </label>

          <button type="submit" className={`${styles.btn} ${styles.submitBtn}`}>
            Continue with email
          </button>
        </form>

        {type === AccountType.EXISTING && (
          <p className={styles.forgotPassword}>Forgot password?</p>
        )}
      </main>
    </>
  );
};

export default Account;
