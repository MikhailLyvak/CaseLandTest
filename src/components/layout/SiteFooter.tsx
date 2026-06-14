import { footerNavLinks } from "@/config/content";
import { seo, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <p className="footer-logo">{siteName}</p>
        <p>{seo.description}</p>
      </div>
      <div className="footer-links">
        {footerNavLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} {siteName}. Доставка по Україні. Усі права
        захищені.
      </p>
    </footer>
  );
}
