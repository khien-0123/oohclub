import Image from "next/image";
import { footer, navLinks } from "@/content/site";
import { sectionY, wrap } from "@/components/ui/styles";

export function SiteFooter() {
  return (
    <footer id="lien-he" className="scroll-mt-24 overflow-x-clip bg-ink text-on-accent">
      <div
        className={`${wrap} ${sectionY} grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 md:grid-cols-3 md:gap-12`}
        data-reveal
      >
        {/* Brand */}
        <div className="col-span-2 min-w-0 md:col-span-1">
          <Image
            src="/images/logo-oohclub.png"
            alt="OOHClub"
            width={150}
            height={44}
            className="h-9 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white">{footer.note}</p>
        </div>

        {/* Navigation */}
        <div className="min-w-0">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white">
            Điều hướng
          </p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white transition hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="min-w-0">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white">
            Mạng xã hội
          </p>
          <ul className="mt-5 space-y-3">
            {footer.socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-white transition hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://www.facebook.com/groups/OOHClub"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex max-w-full border border-white/50 px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white hover:text-ink"
          >
            Tham gia cộng đồng
          </a>
        </div>
      </div>

      <div className={`${wrap} border-t border-white/10 py-6 text-xs text-white`}>
        <p>© {new Date().getFullYear()} OOHClub · Hội Quảng cáo TP.HCM (HAA)</p>
      </div>
    </footer>
  );
}
