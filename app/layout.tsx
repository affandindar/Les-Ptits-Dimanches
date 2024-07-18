import type { Metadata } from "next";
import "./globals.css";
import { inter, popins, roboto_mono, schoolbell } from "./fonts";
import AppBar from "@/components/AppBar";


export const metadata: Metadata = {
  title: "Les P'tits Dimanches",
  description: "Kuşlar uçar, balıklar yüzer, çocuklar oyun oynar...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${schoolbell.className} tracking-widest`}>
      <AppBar ids={["hero", "goals", "schedule", "hours"]} />
      {children}
      </body>
    </html>
  );
}
