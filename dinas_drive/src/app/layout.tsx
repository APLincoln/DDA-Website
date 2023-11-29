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
        <meta itemProp="title" content="Dina's Drive" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
								(function(c,l,a,r,i,t,y){
									c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
									t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
									y=l.getElementsByTagName(r)[0];
									y.parentNode.insertBefore(t,y);
								})(window, document, "clarity", "script", "jxtglefme9");`,
          }}
        />
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
