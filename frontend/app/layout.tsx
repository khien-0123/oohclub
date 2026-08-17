import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OOHClub — Câu lạc bộ Quảng cáo ngoài trời TP.HCM",
  description:
    "Cộng đồng OOHClub kết nối doanh nghiệp và chuyên gia quảng cáo ngoài trời toàn quốc. Trực thuộc Hội Quảng cáo TP.HCM (HAA).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${lora.variable} h-full`}>
      <body className="min-h-full bg-bg font-sans text-fg antialiased">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
