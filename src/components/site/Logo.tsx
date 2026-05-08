import logoMark from "@/assets/dextora-logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg ring-grad overflow-hidden">
        <span
          className="absolute inset-0 rounded-lg"
          style={{ background: "var(--gradient-brand)" }}
        />
        <img
          src={logoMark}
          alt="Dextora"
          className="relative h-5 w-5 object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </span>
      <span className="font-display text-xl tracking-tight">Dextora</span>
    </div>
  );
}
