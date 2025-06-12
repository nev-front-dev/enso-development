import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import Favicon from "./favicon.png";
import { CSPostHogProvider } from "./providers";

const inter = Montserrat({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Oficii spre chirie ARTIMA Business & Lifestyle",
  description:
    "ARTIMA Business & Lifestyle oferă spre închiriere birouri moderne echipate cu facilități excepționale, încadrate într-un ecosistem complet dedicat unui antreprenoriat productiv și eficient.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ro">
      <head>
        <link rel="canonical" href="https://artima.md/terms" />
        <link rel="canonical" href="https://artima.md/policy-privacy" />
        <link rel="canonical" href="https://artima.md/ru" />
        <link rel="canonical" href="https://artima.md/oficiu-978" />
        <link rel="canonical" href="https://artima.md/oficiu-978-ru" />
        <link rel="canonical" href="https://artima.md/booking" />
        <link rel="canonical" href="https://artima.md/booking-ru" />
        <link rel="canonical" href="https://artima.md/about" />
        <link rel="canonical" href="https://artima.md/thank-you" />
        <link rel="canonical" href="https://artima.md/thank-you-ru" />
        
         {/* <Script
          async
          nonce="EDqoMOkX"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');

              // Генерация уникального eventID при каждой загрузке страницы
              function generateEventId() {
                return 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                  var r = Math.random() * 16 | 0,
                      v = c === 'x' ? r : (r & 0x3 | 0x8);
                  return v.toString(16);
                });
              }

              // Получение значения куки по имени
              function getCookieValue(name) {
                var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
                return match ? match[2] : null;
              }

              // Записываем eventId в куки
              function setCookie(name, value) {
                var date = new Date();
                date.setFullYear(date.getFullYear() + 1); // cookie будет жить 1 год
                document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
              }

              // Получение FBP
            function getFBP() {
              var match = document.cookie.match(/_fbp=([^;]+)/);
              return match ? match[1] : null;
            }
              
              // Генерация нового eventId
              var eventId = generateEventId(); // Генерация нового eventId при каждом заходе

              // Записываем новый eventId в куки
              setCookie("eventId", eventId); // Каждый раз записываем в куки новый eventId
              
              var fbp = getFBP(); // получаем _fbp


            fbq('init', '1297393634749549');
            fbq('set','agent','tmgoogletagmanager', '1297393634749549');
            fbq('track', 'PageView', {
              content_name: 'PageView',
              fbp: fbp
            }, {eventID: eventId});
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1297393634749549&ev=PageView&noscript=1"/>
            `,
          }}
        /> */}
        {/* Google Tag Manager */}
        <Script
          async
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push(
                {'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                console.log("Tag was connected")
              })(window,document,'script','dataLayer','GTM-KG9D2CBQ');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-KG9D2CBQ" 
              height="0" 
              width="0" 
              style="display:none;visibility:hidden">
            </iframe>
            `,
          }}
        />
      </head>

      <body className={`${inter.className} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
