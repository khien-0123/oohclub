export const newsBanner = {
  kicker: "Cập nhật",
  title: "Tin tức OOHClub",
  support:
    "Góc nhìn ngành OOH, chiến dịch đáng chú ý và hoạt động cộng đồng Câu lạc bộ Quảng cáo ngoài trời TP.HCM.",
  image: "/images/news-cms.jpg",
  imageAlt: "Hệ thống DOOH và tin tức ngành quảng cáo ngoài trời",
};

export const newsCategories = ["Tất cả", "DOOH", "Xu hướng", "Chiến dịch", "Cộng đồng"] as const;

export type NewsCategory = Exclude<(typeof newsCategories)[number], "Tất cả">;

export type NewsArticle = {
  slug: string;
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  image: string;
  body: readonly string[];
};

export const newsArticles: readonly NewsArticle[] = [
  {
    slug: "cms-thong-minh-bo-nao-dooh",
    date: "07/08/2026",
    category: "DOOH",
    title: "CMS thông minh: “Bộ não” đứng sau hệ thống DOOH hiện đại",
    excerpt:
      "Phần mềm quản trị nội dung đang biến mạng lưới màn hình ngoài trời thành hệ thống có thể lập lịch, đo lường và tối ưu theo ngữ cảnh.",
    image: "/images/news-cms.jpg",
    body: [
      "DOOH không còn chỉ là màn hình LED lớn trên đường phố. Phía sau mỗi khung hình là một hệ thống CMS — “bộ não” điều phối nội dung, lịch phát và dữ liệu vận hành.",
      "Với CMS hiện đại, doanh nghiệp OOH có thể thay đổi chiến dịch theo khung giờ, thời tiết hoặc lưu lượng giao thông, thay vì gắn cứng một mẫu in suốt nhiều tuần.",
      "OOHClub ghi nhận xu hướng này đang thúc đẩy hội viên đầu tư vào hạ tầng số, đồng thời đặt ra yêu cầu mới về chuẩn dữ liệu, giám sát và minh bạch báo cáo cho khách hàng.",
    ],
  },
  {
    slug: "ooh-tang-truong-manh",
    date: "30/05/2026",
    category: "Xu hướng",
    title: "OOH đang bước vào giai đoạn tăng trưởng mạnh",
    excerpt:
      "Ngành quảng cáo ngoài trời đang lấy lại đà sau giai đoạn số hóa nhanh, với ngân sách dịch chuyển về các điểm chạm đô thị có thể đo được.",
    image: "/images/news-growth.jpg",
    body: [
      "Sau vài năm thị trường điều chỉnh, OOH đang tăng trưởng trở lại nhờ kết hợp giữa vị trí chiến lược và khả năng đo lường tốt hơn.",
      "Các thương hiệu tìm kiếm điểm chạm “không thể bỏ qua” trong thành phố — billboard, LED, nhà chờ, thang máy — nơi người dùng không thể vuốt qua như trên điện thoại.",
      "Với cộng đồng OOHClub, đây là thời điểm để chia sẻ case study, chuẩn hóa báo cáo và nâng chất lượng mạng lưới trên toàn quốc.",
    ],
  },
  {
    slug: "lego-metro-duong-dua-f1",
    date: "12/05/2026",
    category: "Chiến dịch",
    title: "LEGO biến tuyến metro thành “đường đua ngầm” F1",
    excerpt:
      "Một chiến dịch experiential biến không gian đi lại hằng ngày thành sân chơi thương hiệu — gợi ý cho OOH Việt Nam về sức mạnh của ngữ cảnh.",
    image: "/images/news-lego.jpg",
    body: [
      "Chiến dịch của LEGO biến nhà ga metro thành đường đua F1 thu nhỏ, biến hành trình đi làm thành trải nghiệm thương hiệu.",
      "Điểm then chốt không nằm ở kích thước biển, mà ở việc chiếm đúng “thời điểm chờ” — khi hành khách đứng yên, nhìn quanh và sẵn sàng bị thu hút.",
      "Đây là bài học Creative OOH mà cộng đồng OOHClub thường trao đổi: ngữ cảnh đô thị có thể trở thành sân khấu nếu ý tưởng đủ sắc.",
    ],
  },
  {
    slug: "thu-moi-tai-tro-oohclub-2026",
    date: "11/05/2026",
    category: "Cộng đồng",
    title: "Thư mời tài trợ OOHClub 2026",
    excerpt:
      "Kết nối thương hiệu cùng cộng đồng quảng cáo ngoài trời hàng đầu Việt Nam trong năm hoạt động mới của câu lạc bộ.",
    image: "/images/event-sponsor-2026-banner.jpg",
    body: [
      "OOHClub trân trọng kính mời các doanh nghiệp đồng hành tài trợ chương trình hoạt động năm 2026.",
      "Việc tài trợ giúp câu lạc bộ duy trì hội thảo, networking và các hoạt động kết nối hội viên trên toàn quốc, đồng thời đưa thương hiệu đến đúng cộng đồng ngành.",
      "Chi tiết quyền lợi và hạng mục tài trợ được công bố trên fanpage OOHClub & Vietnam OOH. Doanh nghiệp quan tâm vui lòng liên hệ Ban tổ chức.",
    ],
  },
  {
    slug: "billboard-chay-running-man",
    date: "08/05/2026",
    category: "Chiến dịch",
    title: "Đến billboard cũng phải “chạy” để quảng bá Running Man Thái Lan",
    excerpt:
      "Một ý tưởng chuyển động trên biển tĩnh cho thấy OOH vẫn có thể gây chú ý mạnh nếu biết chơi với vật lý đô thị.",
    image: "/images/news-running-man.jpg",
    body: [
      "Chiến dịch Running Man Thái Lan biến billboard thành “đường chạy”, khiến người đi đường phải ngoái nhìn lần nữa.",
      "OOH tĩnh vốn bị cho là “đứng yên”, nhưng khi ý tưởng bám vào chuyển động thật của thành phố, biển quảng cáo lại trở thành khoảnh khắc viral.",
      "OOHClub xem đây là minh chứng: sáng tạo ngoài trời không nhất thiết cần màn hình đắt tiền — cần hiểu ngữ cảnh và dám làm khác.",
    ],
  },
  {
    slug: "plastic-free-rameswaram",
    date: "16/04/2026",
    category: "Chiến dịch",
    title: "“Plastic Free Rameswaram” biến rác thải thành lời cảnh báo",
    excerpt:
      "Chiến dịch dùng chính vật liệu thải để kể chuyện môi trường — OOH trở thành thông điệp, không chỉ là bề mặt dán decal.",
    image: "/images/news-plastic.jpg",
    body: [
      "“Plastic Free Rameswaram” dựng thông điệp từ chính rác thải nhựa, biến không gian công cộng thành lời nhắc nhở trực quan.",
      "Khi chất liệu của biển chính là nội dung, người xem không cần đọc nhiều chữ vẫn hiểu vấn đề.",
      "Với hội viên OOHClub, case này gợi mở hướng Creative OOH gắn trách nhiệm xã hội — phù hợp các chiến dịch cộng đồng và thương hiệu bền vững.",
    ],
  },
  {
    slug: "7-xu-huong-ooh-2024",
    date: "10/12/2024",
    category: "Xu hướng",
    title: "Khám phá 7 xu hướng quảng cáo ngoài trời hot nhất năm 2024",
    excerpt:
      "Từ LED 3D, programmatic DOOH đến experiential đô thị — năm 2024 định hình lại cách thương hiệu xuất hiện ngoài trời.",
    image: "/images/hero-led-nguyen-hue.jpg",
    body: [
      "Năm 2024 chứng kiến OOH dịch chuyển mạnh sang trải nghiệm: màn hình 3D, nội dung theo dữ liệu và các kích hoạt tại chỗ.",
      "Bảy xu hướng nổi bật gồm DOOH theo ngữ cảnh, biển tương tác, mapping kiến trúc, OOH gắn retail, đo lường di chuyển, sáng tạo bền vững và cộng tác cộng đồng ngành.",
      "OOHClub tổng hợp các xu hướng này để hội viên có khung tham chiếu khi tư vấn khách hàng và đầu tư hạ tầng mới.",
    ],
  },
  {
    slug: "haa-hoi-nghi-ooh-the-gioi",
    date: "15/11/2023",
    category: "Cộng đồng",
    title: "HAA tham dự Hội nghị Hiệp hội Quảng cáo ngoài trời thế giới",
    excerpt:
      "Đoàn Hội Quảng cáo TP.HCM mang góc nhìn Việt Nam đến diễn đàn OOH quốc tế, mở rộng kết nối cho cộng đồng trong nước.",
    image: "/images/featured-haa-world.jpg",
    body: [
      "Đoàn đại biểu Hội Quảng cáo TP.HCM (HAA) tham dự hội nghị hiệp hội OOH thế giới, trao đổi về quy hoạch đô thị, công nghệ và chuẩn nghề nghiệp.",
      "Việc hiện diện quốc tế giúp cộng đồng Việt Nam cập nhật thông lệ mới, đồng thời giới thiệu năng lực sản xuất và sáng tạo trong nước.",
      "OOHClub — trực thuộc HAA — sẽ tiếp tục chia sẻ các bài học từ chuyến đi tới hội viên qua hội thảo và góc chuyên gia.",
    ],
  },
] as const;

export const latestNews = newsArticles.slice(0, 6).map(({ date, title, image }) => ({
  date,
  title,
  image,
}));

export function getNewsBySlug(slug: string) {
  return newsArticles.find((item) => item.slug === slug);
}

export function getNewsByCategory(category?: string) {
  if (!category || category === "Tất cả") return newsArticles;
  return newsArticles.filter((item) => item.category === category);
}
