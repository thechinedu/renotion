import styles from "./Account.module.css";

import AppleLogo from "@/components/Icons/AppleLogo";
import GoogleLogo from "@/components/Icons/GoogleLogo";
import Logo from "@/components/Icons/Logo";
import db from "@/utils";
import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, FC, FormEvent, useState } from "react";

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
  const [email, setEmail] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { user, session, error } = await db.auth.signUp({
      email,
      password: "super-secure-p@ss",
    });

    console.log({ user, session, error });
  };

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

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email
            <input
              type="email"
              placeholder="Enter your email address..."
              className={styles.emailInput}
              value={email}
              onChange={handleChange}
              required
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
