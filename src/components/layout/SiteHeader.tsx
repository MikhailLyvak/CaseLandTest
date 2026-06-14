import { navLinks } from "@/config/content";
import { siteName } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-logo" href="/">
        {siteName}
      </a>
      <nav className="site-nav" aria-label="Основна навігація">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
