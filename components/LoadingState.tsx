export default function LoadingState() {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center rounded-xs border border-white/[0.06] bg-white/[0.02] py-32 backdrop-blur-sm">
      <div className="relative mb-5 h-10 w-10">
        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-indigo-500" />
      </div>
      <p className="text-sm font-medium text-white/30">
        Consultando al campus virtual...
      </p>
    </div>
  );
}
