import { Logo } from "./Logo";

const links = [
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-3 py-2 glass sm:mt-4 sm:px-4 sm:py-2.5">
        <a href="#top" className="flex items-center">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-primary inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm"
        >
          Book a demo
        </a>
      </div>
    </header>
  );
}
