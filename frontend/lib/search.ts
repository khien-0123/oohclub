import { featured, latestEvents, latestNews } from "@/content/home";

export type SearchItem = {
  title: string;
  date: string;
  image: string;
  excerpt?: string;
  type: "Sự kiện" | "Tin tức";
};

/** Gộp tin + sự kiện, bỏ trùng title */
export function getSearchableItems(): SearchItem[] {
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

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function searchContent(query: string): SearchItem[] {
  const q = normalize(query);
  if (!q) return [];

  return getSearchableItems().filter((item) => {
    const haystack = normalize(
      [item.title, item.excerpt ?? "", item.date, item.type].join(" "),
    );
    return haystack.includes(q) || q.split(/\s+/).every((part) => haystack.includes(part));
  });
}
