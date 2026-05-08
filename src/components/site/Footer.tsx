import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <Logo />
        <p>© {new Date().getFullYear()} Dextora Labs. Onyx & Frost.</p>
        <div className="flex gap-5">
          <a href="#products" className="hover:text-foreground">Products</a>
          <a href="#about" className="hover:text-foreground">Studio</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
