import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { ScrollReveal } from "@/components/behavior/scroll-reveal";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  // "latin" + "vietnamese" đã phủ đủ nội dung site (Ă Đ Ơ Ư và block U+1EA0–1EF9
  // nằm trong subset "vietnamese"). "latin-ext" chỉ phục vụ tiếng Đông Âu -> bỏ.
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
    <html lang="vi" className={`${lora.variable} h-full overflow-x-clip scroll-smooth`}>
      <body className="min-h-full overflow-x-clip bg-bg font-sans text-fg antialiased">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
