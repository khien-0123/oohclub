export const eventBanner = {
  title: "Sự kiện OOHClub",
  support:
    "Lịch hội thảo, OOHCafe và networking của Câu lạc bộ Quảng cáo ngoài trời TP.HCM — nơi hội viên gặp nhau để hợp tác và chia sẻ nghề.",
  image: "/images/gallery-gala.jpg",
  imageAlt: "Cộng đồng OOHClub tại sự kiện Hội Quảng cáo TP.HCM",
};

export const eventFilters = [
  "Tất cả",
  "Sắp diễn ra",
  "Đã diễn ra",
  "Hội thảo",
  "OOHCafe",
  "Networking",
  "Quốc tế",
  "Gala",
] as const;

export type EventFilter = (typeof eventFilters)[number];
export type EventCategory = Exclude<EventFilter, "Tất cả" | "Sắp diễn ra" | "Đã diễn ra">;

export type EventItem = {
  slug: string;
  date: string;
  isoDate: string;
  time?: string;
  venue: string;
  city: string;
  category: EventCategory;
  title: string;
  excerpt: string;
  image: string;
  body: readonly string[];
};

export const facebookGroupHref = "https://www.facebook.com/groups/OOHClub";

export const clubEvents: readonly EventItem[] = [
  {
    slug: "oohcafe-tphcm-2026",
    date: "20/09/2026",
    isoDate: "2026-09-20",
    time: "08:30",
    venue: "Không gian cộng đồng OOHClub",
    city: "TP.HCM",
    category: "OOHCafe",
    title: "OOHCafe TP.HCM — Kết nối hội viên cuối quý 3",
    excerpt:
      "Buổi cà phê chuyên đề dành cho doanh nghiệp OOH tại TP.HCM: cập nhật thị trường, chia sẻ case và mở kết nối hợp tác mới.",
    image: "/images/event-oohcafe-hn.jpg",
    body: [
      "OOHCafe TP.HCM là buổi gặp mặt định kỳ của câu lạc bộ: ngắn, đúng nghề, và dành cho người đang vận hành mạng lưới ngoài trời.",
      "Chương trình gồm phần trao đổi xu hướng quý 3, góc nhìn từ hội viên về mặt bằng và DOOH, rồi networking mở để các doanh nghiệp tìm đối tác triển khai.",
      "Ban tổ chức khuyến khích hội viên mang theo case đang làm — OOHCafe hiệu quả nhất khi câu chuyện xuất phát từ thực địa, không phải slide chung chung.",
    ],
  },
  {
    slug: "hoi-thao-oohclub-2026",
    date: "15/11/2026",
    isoDate: "2026-11-15",
    time: "13:30",
    venue: "Hội trường Hội Quảng cáo TP.HCM (HAA)",
    city: "TP.HCM",
    category: "Hội thảo",
    title: "Hội thảo OOHClub 2026: Vận hành mạng lưới ngoài trời có thể đo được",
    excerpt:
      "Hội thảo năm của câu lạc bộ tập trung vào đo lường, mặt bằng và hợp tác chuỗi — dành cho chủ doanh nghiệp và đội ngũ phụ trách OOH.",
    image: "/images/event-hoithao-2025.jpg",
    body: [
      "Hội thảo OOHClub 2026 tiếp nối chuỗi chuyên đề của câu lạc bộ với trọng tâm: làm sao để mạng lưới ngoài trời được vận hành, báo cáo và bán được bằng dữ liệu.",
      "Nội dung gồm các phiên về mặt bằng trống, DOOH theo ngữ cảnh, và cách hội viên phối hợp khi khách hàng cần phủ đa tỉnh.",
      "Sự kiện do OOHClub — trực thuộc Hội Quảng cáo TP.HCM (HAA) — tổ chức. Chi tiết chương trình sẽ được cập nhật trên fanpage trước ngày diễn ra.",
    ],
  },
  {
    slug: "thu-moi-tai-tro-oohclub-2026",
    date: "11/05/2026",
    isoDate: "2026-05-11",
    time: "09:00",
    venue: "OOHClub & Vietnam OOH",
    city: "TP.HCM",
    category: "Networking",
    title: "Thư mời tài trợ OOHClub 2026",
    excerpt:
      "Kết nối thương hiệu cùng cộng đồng quảng cáo ngoài trời hàng đầu Việt Nam trong năm hoạt động mới của câu lạc bộ.",
    image: "/images/event-sponsor-2026-banner.jpg",
    body: [
      "OOHClub trân trọng kính mời các doanh nghiệp đồng hành tài trợ chương trình hoạt động năm 2026.",
      "Việc tài trợ giúp câu lạc bộ duy trì hội thảo, OOHCafe và các buổi kết nối hội viên trên toàn quốc, đồng thời đưa thương hiệu đến đúng cộng đồng ngành.",
      "Chi tiết quyền lợi và hạng mục tài trợ được công bố trên fanpage OOHClub & Vietnam OOH. Doanh nghiệp quan tâm vui lòng liên hệ Ban tổ chức.",
    ],
  },
  {
    slug: "hoi-thao-ooh-chau-a-tham-quyen",
    date: "05/03/2026",
    isoDate: "2026-03-05",
    time: "09:00",
    venue: "Hội thảo OOH khu vực châu Á",
    city: "Thẩm Quyến",
    category: "Quốc tế",
    title: "Đại diện OOHClub tham dự hội thảo OOH khu vực châu Á tại Thẩm Quyến",
    excerpt:
      "Ngày 5–6/3/2026 tại Thẩm Quyến, ông Nguyễn Quang Nhựt – Phó Chủ tịch OOHClub – mang góc nhìn Việt Nam đến diễn đàn OOH châu Á.",
    image: "/images/event-shenzhen.jpg",
    body: [
      "Ngày 5–6/3/2026 tại Thẩm Quyến, đại diện OOHClub tham dự hội thảo OOH khu vực châu Á — nơi các hiệp hội và doanh nghiệp trao đổi về quy hoạch đô thị, công nghệ màn hình và chuẩn đo lường.",
      "Ông Nguyễn Quang Nhựt, Phó Chủ tịch câu lạc bộ, chia sẻ thực tiễn vận hành mạng lưới ngoài trời tại Việt Nam và kết nối với đối tác khu vực.",
      "Các bài học từ chuyến đi được đưa về cộng đồng qua hội thảo trong nước và góc chuyên gia trên OOHClub.",
    ],
  },
  {
    slug: "oohcafe-ha-noi-lan-2",
    date: "28/03/2026",
    isoDate: "2026-03-28",
    time: "08:00",
    venue: "Không gian OOHCafe Hà Nội",
    city: "Hà Nội",
    category: "OOHCafe",
    title: "OOHCafe Hà Nội lần 2 – Kết nối cộng đồng OOH",
    excerpt:
      "Sáng ngày 28/03/2026, sự kiện OOHCafe Hà Nội lần 2 đã diễn ra thành công, mở rộng mạng lưới hội viên phía Bắc.",
    image: "/images/event-oohcafe-hn.jpg",
    body: [
      "Sáng 28/03/2026, OOHCafe Hà Nội lần 2 quy tụ doanh nghiệp và chuyên gia OOH phía Bắc để trao đổi thị trường, mặt bằng và cơ hội hợp tác liên vùng.",
      "Khác hội thảo lớn, OOHCafe giữ nhịp cà phê: ít diễn đàn, nhiều đối thoại — phù hợp hội viên muốn gặp đúng người đang làm cùng việc.",
      "OOHClub sẽ tiếp tục luân phiên OOHCafe giữa Hà Nội và TP.HCM để câu lạc bộ không chỉ gắn với một thành phố.",
    ],
  },
  {
    slug: "hoi-thao-oohclub-2025-mat-bang-trong",
    date: "15/07/2025",
    isoDate: "2025-07-15",
    time: "13:30",
    venue: "Hội trường Hội Quảng cáo TP.HCM (HAA)",
    city: "TP.HCM",
    category: "Hội thảo",
    title: "Hội thảo OOHClub 2025: Kiếm tiền từ mặt bằng trống dành cho chuỗi cửa hàng",
    excerpt:
      "OOHClub – trực thuộc Hội Quảng cáo TP.HCM (HAA) trân trọng giới thiệu hội thảo về khai thác mặt bằng trống cho chuỗi bán lẻ.",
    image: "/images/event-hoithao-2025.jpg",
    body: [
      "Hội thảo OOHClub 2025 tập trung vào một bài toán cụ thể: mặt bằng trống của chuỗi cửa hàng có thể trở thành điểm chạm OOH nếu được đóng gói đúng.",
      "Diễn giả và hội viên trao đổi mô hình hợp tác, cách định giá vị trí và yêu cầu kỹ thuật khi đưa quảng cáo vào không gian bán lẻ.",
      "Đây là chuyên đề điển hình của câu lạc bộ: lấy vấn đề vận hành thật, mổ xẻ cùng người trong nghề, rồi mở cửa cho hợp tác sau sự kiện.",
    ],
  },
  {
    slug: "adtalk-2025-chuyen-nghe-quang-cao",
    date: "25/04/2025",
    isoDate: "2025-04-25",
    time: "14:00",
    venue: "Trường phối hợp cùng Hội Quảng cáo TP.HCM",
    city: "TP.HCM",
    category: "Networking",
    title: "AdTalk 2025: “Chuyện nghề quảng cáo”",
    excerpt:
      "Chiều 25/4, Hội Quảng cáo TP.HCM (HAA) phối hợp tổ chức AdTalk 2025 — chuyện nghề dành cho người làm quảng cáo và sinh viên ngành.",
    image: "/images/featured-adtalk.jpg",
    body: [
      "AdTalk 2025 lấy hình thức chuyện nghề: người làm quảng cáo kể việc đang làm, phần khó, và bài học không có trong giáo trình.",
      "Hội Quảng cáo TP.HCM phối hợp nhà trường để thế hệ mới được gặp hội viên đang vận hành OOH, agency và chủ thương hiệu.",
      "OOHClub xem AdTalk là cầu nối giữa cộng đồng nghề và đào tạo — nơi networking diễn ra tự nhiên sau phần chia sẻ.",
    ],
  },
  {
    slug: "haa-hoi-nghi-ooh-the-gioi",
    date: "15/11/2023",
    isoDate: "2023-11-15",
    venue: "Hội nghị Hiệp hội Quảng cáo ngoài trời thế giới",
    city: "Quốc tế",
    category: "Quốc tế",
    title: "HAA tham dự Hội nghị Hiệp hội Quảng cáo ngoài trời thế giới",
    excerpt:
      "Đoàn Hội Quảng cáo TP.HCM mang góc nhìn Việt Nam đến diễn đàn OOH quốc tế, mở rộng kết nối cho cộng đồng trong nước.",
    image: "/images/featured-haa-world.jpg",
    body: [
      "Đoàn đại biểu Hội Quảng cáo TP.HCM (HAA) tham dự hội nghị hiệp hội OOH thế giới, trao đổi về quy hoạch đô thị, công nghệ và chuẩn nghề nghiệp.",
      "Việc hiện diện quốc tế giúp cộng đồng Việt Nam cập nhật thông lệ mới, đồng thời giới thiệu năng lực sản xuất và sáng tạo trong nước.",
      "OOHClub — trực thuộc HAA — tiếp tục chia sẻ các bài học từ chuyến đi tới hội viên qua hội thảo và góc chuyên gia.",
    ],
  },
];

function todayIso() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Ho_Chi_Minh" }).format(new Date());
}

export function isEventUpcoming(item: EventItem, today = todayIso()) {
  return item.isoDate >= today;
}

function compareUpcoming(a: EventItem, b: EventItem) {
  return a.isoDate.localeCompare(b.isoDate);
}

function comparePast(a: EventItem, b: EventItem) {
  return b.isoDate.localeCompare(a.isoDate);
}

export function sortEvents(items: readonly EventItem[]) {
  const upcoming = items.filter((item) => isEventUpcoming(item)).sort(compareUpcoming);
  const past = items.filter((item) => !isEventUpcoming(item)).sort(comparePast);
  return [...upcoming, ...past];
}

export function getEventBySlug(slug: string) {
  return clubEvents.find((item) => item.slug === slug);
}

export function getEventByTitle(title: string) {
  return clubEvents.find((item) => item.title === title);
}

export function getUpcomingEvents() {
  return clubEvents.filter((item) => isEventUpcoming(item)).sort(compareUpcoming);
}

export function getPastEvents() {
  return clubEvents.filter((item) => !isEventUpcoming(item)).sort(comparePast);
}

export function getEventsByFilter(filter?: string) {
  const active = eventFilters.includes(filter as EventFilter) ? (filter as EventFilter) : "Tất cả";

  if (active === "Sắp diễn ra") return getUpcomingEvents();
  if (active === "Đã diễn ra") return getPastEvents();
  if (active !== "Tất cả") {
    return sortEvents(clubEvents.filter((item) => item.category === active));
  }
  return sortEvents(clubEvents);
}

export function getRelatedEvents(slug: string, limit = 3) {
  const current = getEventBySlug(slug);
  if (!current) return [];

  const sameCategory = sortEvents(
    clubEvents.filter((item) => item.slug !== slug && item.category === current.category),
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const rest = sortEvents(clubEvents.filter((item) => item.slug !== slug)).filter(
    (item) => !sameCategory.some((related) => related.slug === item.slug),
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Widget “Sự kiện mới” trên trang chủ — upcoming trước, rồi sự kiện mới nhất. */
export const latestEvents = sortEvents(clubEvents)
  .slice(0, 4)
  .map(({ slug, date, title, image }) => ({ slug, date, title, image }));
