import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * AVIF trước, WebP dự phòng. AVIF nhỏ hơn WebP ~20%; lần optimize đầu chậm
     * hơn nhưng kết quả được cache lại nên request sau đều nhanh.
     */
    formats: ["image/avif", "image/webp"],

    /** Next 16 bắt buộc khai báo. Chỉ dùng quality mặc định 75. */
    qualities: [75],

    /**
     * Ảnh trong public/images gần như không đổi -> giữ bản đã optimize 31 ngày
     * thay vì mặc định 4 giờ. Khi thay ảnh, đổi tên file (hoặc xoá .next/cache/images).
     */
    minimumCacheTTL: 2678400,
  },

  experimental: {
    /**
     * Nhúng thẳng CSS vào <head> thay vì thẻ <link> render-blocking.
     * Hợp với Tailwind (atomic, CSS nhỏ) + khách truy cập lần đầu là chính.
     */
    inlineCss: true,
  },
};

export default nextConfig;
