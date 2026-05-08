export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg ring-grad">
        <span className="absolute inset-0 rounded-lg" style={{ background: "var(--gradient-brand)" }} />
        <span className="relative font-display text-xl leading-none text-white">D</span>
      </span>
      <span className="font-display text-xl tracking-tight">Dextora</span>
    </div>
  );
}
