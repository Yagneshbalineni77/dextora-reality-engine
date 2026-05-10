import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-center text-xs text-muted-foreground sm:px-6 sm:text-sm md:flex-row md:text-left">
        <Logo />
        <p>© {new Date().getFullYear()} Dextora Labs. Onyx & Frost.</p>
        <div className="flex gap-5">
          <Link to="/products" className="hover:text-foreground">
            Products
          </Link>
          <Link to="/" hash="about" className="hover:text-foreground">
            Studio
          </Link>
          <Link to="/" hash="contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
