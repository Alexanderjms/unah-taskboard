export default function Header() {
  return (
    <div className="animate-fade-slide-in mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <div className="mb-1 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-gradient-to-br from-indigo-500 to-cyan-500 text-sm font-bold shadow-lg shadow-indigo-500/20">
            U
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white/90">
            Tablero de Tareas
          </h1>
        </div>
        <p className="text-xs font-medium tracking-wide text-white/30">
          IA-231 · Universidad Nacional Autónoma de Honduras
        </p>
      </div>
      <div className="flex animate-fade-in items-center gap-2 rounded-xs border border-white/5 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/60">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Live
      </div>
    </div>
  );
}
