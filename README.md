# OOHClub

Website Câu lạc bộ Quảng cáo ngoài trời TP.HCM (HAA).

## Cấu trúc

```
oohclub/
├── frontend/                 # Next.js (App Router)
│   ├── app/                  # Routes: layout, pages
│   │   └── tim-kiem/         # /tim-kiem
│   ├── components/
│   │   ├── behavior/         # Client side-effect, không render UI
│   │   ├── layout/           # Header, footer (dùng ở mọi trang)
│   │   ├── sections/         # Mỗi file = 1 section trang chủ
│   │   └── ui/               # Component + style token dùng chung
│   ├── content/              # site.ts (toàn site) · home.ts (trang chủ)
│   ├── lib/                  # Logic (search)
│   └── public/images/        # Static assets
└── README.md
```

## Chạy local

```bash
cd frontend
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).
