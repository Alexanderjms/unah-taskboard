export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
      <div
        className="animate-float absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-60 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.5), transparent 70%)",
        }}
      />
      <div
        className="animate-float-slow absolute -bottom-60 -right-40 h-[600px] w-[600px] rounded-full opacity-55 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.45), transparent 70%)",
        }}
      />
      <div
        className="animate-drift absolute top-1/3 left-1/3 h-[400px] w-[400px] rounded-full opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.35), transparent 70%)",
        }}
      />
      <div
        className="animate-float-slower absolute top-2/3 right-1/4 h-[350px] w-[350px] rounded-full opacity-45 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(52,211,153,0.3), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-0 opacity-[0.03]"
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
