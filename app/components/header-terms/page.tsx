import React from "react";
import LogoHeaderSVG from "../assets/logo-dark/page";
import styles from "./header.module.scss";
import TelIcon from "../assets/header-terms-tel-mobile/page"

type Props = {};

const Page = (props: Props) => {
  
  return (

    <div className={styles.header}>
      <div className={styles.container}>
      <div className={styles.header__wrapper}>
        <LogoHeaderSVG />
        <a href="tel:+37376037107" className={styles.header__phone_btn__mob}>
          <TelIcon/>
        </a>
        <a href="tel:+37376037107" className={styles.header__phone_btn}>
          {/* +373 760 371 07 */}
        </a>
      </div>
      </div>
    </div>
  );
};

export default Page;
