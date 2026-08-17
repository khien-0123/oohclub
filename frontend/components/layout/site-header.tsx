"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/home";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  function goHome(e: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
      setSearchOpen(false);
    }
  }

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setSearchOpen(false);
    setOpen(false);
    router.push(`/tim-kiem?s=${encodeURIComponent(q)}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
        <a href="/" aria-label="OOHClub trang chủ" className="shrink-0" onClick={goHome}>
          <Image
            src="/images/logo-oohclub.png"
            alt="OOHClub"
            width={200}
            height={58}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Chính">
          {navLinks
            .filter((l) => l.href !== "#lien-he")
            .map((link) => (
              <a
                key={link.href}
                href={pathname === "/" ? link.href : `/${link.href}`}
                className="text-[0.95rem] font-medium text-fg transition hover:text-gold"
              >
                {link.label}
              </a>
            ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {searchOpen ? (
            <form
              onSubmit={onSearch}
              className="flex items-center border border-line bg-bg"
            >
              <input
                ref={inputRef}
                type="search"
                name="s"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm…"
                className="w-[9.5rem] bg-transparent px-3 py-2 text-sm outline-none sm:w-52"
                aria-label="Từ khóa tìm kiếm"
              />
              <button
                type="submit"
                className="px-3 py-2 text-fg transition hover:text-gold"
                aria-label="Tìm kiếm"
              >
                <SearchIcon />
              </button>
              <button
                type="button"
                className="border-l border-line px-3 py-2 text-muted transition hover:text-fg"
                aria-label="Đóng tìm kiếm"
                onClick={() => setSearchOpen(false)}
              >
                ×
              </button>
            </form>
          ) : (
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-fg transition hover:text-gold"
              aria-label="Mở tìm kiếm"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon />
            </button>
          )}

          <a
            href={pathname === "/" ? "#lien-he" : "/#lien-he"}
            className="hidden border border-fg px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-fg transition hover:bg-fg hover:text-on-accent sm:inline-flex"
          >
            Liên hệ
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px bg-fg transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`block h-px bg-fg transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-px bg-fg transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line bg-bg px-5 py-6 lg:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  className="text-xl font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  );
}
