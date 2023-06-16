// import "./globals.css";

// import { Inter } from "next/font/google";
import { Metadata } from "next";
import Providers from "./provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | CPO Sport Portal",
    default: "Page",
    absolute: "CPO Sport Admin Portal",
  },
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
