# OOHClub

Website Câu lạc bộ Quảng cáo ngoài trời TP.HCM (HAA).

## Cấu trúc

```
oohclub/
├── frontend/                 # Next.js (App Router)
│   ├── app/                  # Routes: layout, pages
│   │   └── tim-kiem/         # /tim-kiem
│   ├── components/
│   │   ├── layout/           # Header, footer, scroll reveal
│   │   ├── sections/         # Khối nội dung trang chủ
│   │   └── ui/               # Component dùng chung
│   ├── content/              # Data / copy
│   ├── lib/                  # Helpers
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
