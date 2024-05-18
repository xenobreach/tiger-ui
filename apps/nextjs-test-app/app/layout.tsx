import { Metadata } from "next";
import { Poppins } from 'next/font/google';

import ThemeRegistery from "../lib/ThemeRegistery";

const poppins = Poppins({
  display: 'swap',
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Tiger UI - Next JS Test App",
  description: "Tiger UI Next JS Test Environment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <ThemeRegistery>
          {children}
        </ThemeRegistery>
      </body>
    </html>
  );
}
