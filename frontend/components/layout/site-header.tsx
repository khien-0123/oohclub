"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/site";
import { wrap } from "@/components/ui/styles";

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

  function onNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);
    setSearchOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      document.getElementById(href.slice(2))?.scrollIntoView({ behavior: "smooth" });
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
      <div className={`${wrap} flex h-16 min-w-0 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-6`}>
        <Link href="/" aria-label="OOHClub trang chủ" className="min-w-0 shrink-0" onClick={goHome}>
          <Image
            src="/images/logo-oohclub.png"
            alt="OOHClub"
            width={200}
            height={58}
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Chính">
          {navLinks
            .filter((l) => l.href !== "/#lien-he")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className={`text-[0.95rem] font-medium transition hover:text-gold ${
                  isNavActive(pathname, link.href) ? "text-gold" : "text-fg"
                }`}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-3">
          {searchOpen ? (
            <form
              onSubmit={onSearch}
              className="flex max-w-[min(100%,14rem)] items-center border border-line bg-bg sm:max-w-none"
            >
              <input
                ref={inputRef}
                type="search"
                name="s"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm…"
                className="w-[7.5rem] min-w-0 bg-transparent px-2 py-2 text-sm outline-none sm:w-52 sm:px-3"
                aria-label="Từ khóa tìm kiếm"
              />
              <button
                type="submit"
                className="px-2 py-2 text-fg transition hover:text-gold sm:px-3"
                aria-label="Tìm kiếm"
              >
                <SearchIcon />
              </button>
              <button
                type="button"
                className="border-l border-line px-2 py-2 text-muted transition hover:text-fg sm:px-3"
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

          <Link
            href="/#lien-he"
            className="hidden border border-fg px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-fg transition hover:bg-fg hover:text-on-accent sm:inline-flex"
          >
            Liên hệ
          </Link>

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
                <Link
                  href={link.href}
                  className="text-xl font-medium"
                  onClick={(e) => onNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function isNavActive(pathname: string, href: string) {
  if (href === "/tin-tuc") return pathname.startsWith("/tin-tuc");
  return false;
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  );
}
