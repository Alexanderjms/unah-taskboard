export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0" aria-hidden="true">
      <div
        className="hidden motion-safe:block animate-float absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-60 blur-[120px] md:opacity-40 md:blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.5), transparent 70%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="hidden motion-safe:block animate-float-slow absolute -bottom-60 -right-40 h-[600px] w-[600px] rounded-full opacity-55 blur-[140px] md:opacity-35 md:blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.45), transparent 70%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="hidden motion-safe:block animate-drift absolute top-1/3 left-1/3 h-[400px] w-[400px] rounded-full opacity-40 blur-[100px] md:opacity-25 md:blur-[60px]"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.35), transparent 70%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="hidden motion-safe:block animate-float-slower absolute top-2/3 right-1/4 h-[350px] w-[350px] rounded-full opacity-45 blur-[100px] md:opacity-30 md:blur-[60px]"
        style={{
          background: "radial-gradient(circle, rgba(52,211,153,0.3), transparent 70%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />

      {/* Static fallback gradient for mobile / reduced motion */}
      <div
        className="motion-safe:hidden absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.3), transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.2), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(236,72,153,0.15), transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
