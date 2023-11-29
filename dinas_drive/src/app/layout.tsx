import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dina's Drive",
  description: "Dina's Drive",
  icons: [{ rel: "icon", url: "/logo.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head title="">
        <meta itemProp="title" content="some text 2" />
      </head>
      <body className={`font-sans ${inter.variable} min-h-screen`}>
        <Header />
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
