import logoMark from "@/assets/dextora-logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <span
          className="absolute inset-0 rounded-lg opacity-70 blur-md"
          style={{ background: "var(--gradient-brand)" }}
          aria-hidden
        />
        <img
          src={logoMark}
          alt="Dextora"
          className="relative h-9 w-9 object-contain"
        />
      </span>
      <span className="font-display text-xl tracking-tight">Dextora</span>
    </div>
  );
}
