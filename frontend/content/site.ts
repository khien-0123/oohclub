/**
 * Data dùng chung cho mọi trang (header + footer), không riêng trang chủ.
 */

export const navLinks = [
  { href: "/#gioi-thieu", label: "Giới thiệu" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/#su-kien", label: "Sự kiện" },
  { href: "/#chuyen-gia", label: "Góc chuyên gia" },
  { href: "/#thanh-vien", label: "Thành viên" },
  { href: "/#lien-he", label: "Liên hệ" },
] as const;

export const footer = {
  note: "OOHClub — Câu lạc bộ Quảng cáo ngoài trời TP.HCM. Trực thuộc Hội Quảng cáo TP.HCM (HAA).",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/groups/OOHClub" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};
