import { clubEvents } from "@/content/events";
import { newsArticles } from "@/content/news";

export type SearchItem = {
  title: string;
  date: string;
  image: string;
  excerpt?: string;
  type: "Sự kiện" | "Tin tức";
  href: string;
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/** Gộp tin + sự kiện, bỏ trùng title — sự kiện được ưu tiên nếu trùng. */
function buildSearchableItems(): SearchItem[] {
  const map = new Map<string, SearchItem>();

  for (const item of clubEvents) {
    map.set(item.title, {
      title: item.title,
      date: item.date,
      image: item.image,
      excerpt: item.excerpt,
      type: "Sự kiện",
      href: `/su-kien/${item.slug}`,
    });
  }

  for (const item of newsArticles) {
    if (!map.has(item.title)) {
      map.set(item.title, {
        title: item.title,
        date: item.date,
        image: item.image,
        excerpt: item.excerpt,
        type: "Tin tức",
        href: `/tin-tuc/${item.slug}`,
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

  const terms = q.split(/\s+/);

  const results: SearchItem[] = [];
  for (const { item, haystack } of SEARCH_INDEX) {
    if (terms.every((term) => haystack.includes(term))) results.push(item);
  }
  return results;
}
