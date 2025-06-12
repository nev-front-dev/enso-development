"use client";
import React from "react";
import styles from "../app/oficiu-978/sale.module.scss";
import Header from "./oficiu-978/sections/header";
import Footer from "./oficiu-978/sections/footer/page";
import Form from "./oficiu-978/form-popup-oficiu";
// import useRudderStackAnalytics from "./useRudderAnalytics";

const Page = () => {
  
  // const analytics = useRudderStackAnalytics();

  const [isOpen, setIsOpen] = React.useState(false);

  const [nameValue, setNameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [userLocation, setUserLocation] = React.useState("");

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  const formSubmitTrack = () => {}

  React.useEffect(() => {
    setTimeout(() => {
      if (!isOpen) {
        setNameValue("");
        setEmailValue("");
        setPhoneValue("");
      }
    }, [3000]);
  }, [nameValue, emailValue, phoneValue, isOpen]);

  const [isItemToggle, setIsItemToggle] = React.useState(false);

  return (
    <div className={styles.wrapper_page}>
      <div className={styles.sale_head}>
        <Header />
        <div className={styles.sale_head__content}>
          <div className={styles.sale_header__wrapper}>
            <h2 className={styles.head_content__title}>
              Dezvoltator imobiliar integrat vertical în {""}
              <br />
              Republica Moldova și România
             </h2>
            <button
              type="button"
              className={styles.sale_head__btn}
              onClick={handleTogglePopup}
            >
              DESCARCĂ PREZENTAREA DEZVOLTATORULUI
            </button>
            <p className="block text-[10rem] sm:text-[15rem] text-white text-center mt-[24rem] leading-none">
              4,8 evaluare clienți
            </p>
            <svg
              className="block mt-[12rem] w-[116rem] h-[22rem] sm:w-[156rem] sm:h-[26rem] mx-auto"
              viewBox="0 0 116 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4768 2.60145L12.0279 1.68954L11.5795 2.60167L8.9063 8.03894L2.92769 8.9128L1.92863 9.05883L2.65033 9.76493L6.97875 13.9999L5.95684 19.9768L5.78586 20.9768L6.68307 20.5033L12.0283 17.6821L17.3768 20.5033L18.2738 20.9765L18.1029 19.9768L17.081 13.9999L21.4094 9.76493L22.1311 9.05883L21.132 8.9128L15.1533 8.03892L12.4768 2.60145Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M58.447 2.60145L57.9981 1.68954L57.5497 2.60167L54.8765 8.03894L48.8979 8.9128L47.8988 9.05883L48.6205 9.76493L52.949 13.9999L51.9271 19.9768L51.7561 20.9768L52.6533 20.5033L57.9985 17.6821L63.347 20.5033L64.244 20.9765L64.0731 19.9768L63.0512 13.9999L67.3796 9.76493L68.1013 9.05883L67.1022 8.9128L61.1235 8.03892L58.447 2.60145Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M35.4621 2.60145L35.0133 1.68954L34.5648 2.60167L31.8917 8.03894L25.913 8.9128L24.914 9.05883L25.6357 9.76493L29.9641 13.9999L28.9422 19.9768L28.7712 20.9768L29.6684 20.5033L35.0136 17.6821L40.3621 20.5033L41.2592 20.9765L41.0882 19.9768L40.0663 13.9999L44.3947 9.76493L45.1164 9.05883L44.1174 8.9128L38.1386 8.03892L35.4621 2.60145Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M81.4319 2.60145L80.983 1.68954L80.5346 2.60167L77.8614 8.03894L71.8828 8.9128L70.8837 9.05883L71.6054 9.76493L75.9338 13.9999L74.9119 19.9768L74.7409 20.9768L75.6382 20.5033L80.9833 17.6821L86.3318 20.5033L87.2289 20.9765L87.058 19.9768L86.036 13.9999L90.3645 9.76493L91.0862 9.05883L90.0871 8.9128L84.1083 8.03892L81.4319 2.60145Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M104.417 2.5995L103.968 1.68759L103.52 2.59971L100.847 8.03698L94.8681 8.91085L93.8691 9.05687L94.5908 9.76298L98.9192 13.9979L97.8973 19.9749L97.7263 20.9749L98.6235 20.5013L103.969 17.6801L109.317 20.5014L110.214 20.9746L110.043 19.9749L109.021 13.9979L113.35 9.76298L114.072 9.05687L113.072 8.91085L107.094 8.03696L104.417 2.5995Z"
                stroke="white"
              />
              <path
                d="M108.075 8.56717V19.6493L103.97 17.597L97.8134 20.4702L99.0447 13.903L94.5298 8.97762L100.687 8.15672L103.97 2L106.843 7.74627L108.075 8.56717Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <Footer />
      {isOpen && (
        <Form
          handleTogglePopup={handleTogglePopup}
          formSubmitTrack={formSubmitTrack}
          nameValue={nameValue}
          setNameValue={setNameValue}
          emailValue={emailValue}
          setEmailValue={setEmailValue}
          phoneValue={phoneValue}
          setPhoneValue={setPhoneValue}
          userLocation={userLocation}
        />
      )}
    </div>
  );
};

export default Page;
