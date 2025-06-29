import type { Metadata } from "next";
import "./globals.css";
// import Nav from "@/components/Nav/Nav";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/context/ModalContext";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800", "900"],
});

const SuisseIntlCondensed = localFont({
  src: "../../public/fonts/SuisseIntlCondBold.woff2",
  variable: "--SuisseIntlCondensed",
  display: "swap",
});

const SuisseIntlMedium = localFont({
  src: "../../public/fonts/SuisseIntlMedium.woff2",
  variable: "--SuisseIntlMedium",
  display: "swap",
});

const SuisseIntlMonoRegular = localFont({
  src: "../../public/fonts/SuisseIntlMonoRegular.woff2",
  variable: "--SuisseIntlMonoRegular",
  display: "swap",
});

const DoumbarPlateMedium = localFont({
  src: "../../public/fonts/DoumbarPlateMedium.woff2",
  variable: "--DoumbarPlateMedium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fonts & Footers",
  description:
    "Fonts & Footers empowers business owners with e-commerce stores, business websites, and direct booking platforms. Elevate your online presence with our web development and design expertise!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${SuisseIntlCondensed.variable} ${SuisseIntlMedium.variable} ${SuisseIntlMonoRegular.variable} ${DoumbarPlateMedium.variable} ${inter.variable}`}
      >
        <SmoothScroll>
          <Toaster
            position='top-right'
            toastOptions={{
              className: "toastFont",
            }}
          />
          <ModalProvider>
            {/* <Nav /> */}

            {children}
          </ModalProvider>
          {/* <CustomCursor /> */}
        </SmoothScroll>
      </body>
    </html>
  );
}
