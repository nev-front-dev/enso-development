"use client";
import React from "react";
import LogoHeaderSVG from "../assets/logo/page";
import styles from "./header.module.scss";
import TelIcon from "../assets/header-tel-mobile/page";
import Link from "next/link";
// import useRudderStackAnalytics from "../../useRudderAnalytics";

const Page = () => {
  // const analytics = useRudderStackAnalytics();

  // const handlerLanguageToggleTrack = () => {
  //   analytics.track("language_changed");
  // };

  // const handlerPhoneCallTrack = () => {
  //   analytics.track("phone_clicked", {
  //     element_location: "header",
  //     element_type: "number",
  //     element_text: document.querySelector(".header_header__phone_btn__YA9QO").innerText,
  //     action_type: "click",
  //   });
  // };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <LogoHeaderSVG />
          <Link href={"/ru"} className={styles.select__lang}>
            RU
          </Link>
          <a
            href="tel:+37376037107"
            className={styles.header__phone_btn__mob}
          ></a>
          <TelIcon />
          <Link
            href="tel:+37376037107"
            className={styles.header__phone_btn}
            id="header-phone-btn"
            // onClick={handlerPhoneCallTrack}
          >
            {/* +373 760 371 07 */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
