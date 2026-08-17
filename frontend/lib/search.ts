import { featured, latestEvents, latestNews } from "@/content/home";

export type SearchItem = {
  title: string;
  date: string;
  image: string;
  excerpt?: string;
  type: "Sự kiện" | "Tin tức";
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/** Gộp tin + sự kiện, bỏ trùng title */
function buildSearchableItems(): SearchItem[] {
  const map = new Map<string, SearchItem>();

  for (const item of featured) {
    map.set(item.title, {
      title: item.title,
      date: item.date,
      image: item.image,
      excerpt: item.excerpt,
      type: "Sự kiện",
    });
  }

  for (const item of latestEvents) {
    if (!map.has(item.title)) {
      map.set(item.title, {
        title: item.title,
        date: item.date,
        image: item.image,
        type: "Sự kiện",
      });
    }
  }

  for (const item of latestNews) {
    if (!map.has(item.title)) {
      map.set(item.title, {
        title: item.title,
        date: item.date,
        image: item.image,
        type: "Tin tức",
      });
    }
  }

  return Array.from(map.values());
}

/**
 * Nguồn dữ liệu là hằng số build-time nên index chỉ dựng một lần khi module được
 * nạp, thay vì dựng lại Map + chạy normalize() cho từng item ở mỗi request.
 */
const SEARCH_INDEX: ReadonlyArray<{ item: SearchItem; haystack: string }> =
  buildSearchableItems().map((item) => ({
    item,
    haystack: normalize([item.title, item.excerpt ?? "", item.date, item.type].join(" ")),
  }));

export function getSearchableItems(): SearchItem[] {
  return SEARCH_INDEX.map((entry) => entry.item);
}

export function searchContent(query: string): SearchItem[] {
  const q = normalize(query);
  if (!q) return [];

  // Khớp khi haystack chứa đủ mọi từ khoá. Điều kiện `haystack.includes(q)`
  // trước đây là thừa: khớp nguyên cụm luôn kéo theo khớp từng từ.
  const terms = q.split(/\s+/);

  const results: SearchItem[] = [];
  for (const { item, haystack } of SEARCH_INDEX) {
    if (terms.every((term) => haystack.includes(term))) results.push(item);
  }
  return results;
}
