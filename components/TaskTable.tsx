import {
  type Tarea,
  formatFecha,
  formatHora,
  getDiasRestantes,
  badgeColor,
} from "@/lib/types";

export default function TaskTable({
  tareas,
  onToggleCompletada,
}: {
  tareas: Tarea[];
  onToggleCompletada: (id: number, completada: boolean) => void;
}) {
  return (
    <div className="animate-scale-in w-full overflow-hidden rounded-xs border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm custom-scroll">
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 0; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: transparent; }
        .custom-scroll { scrollbar-width: none; scrollbar-color: transparent transparent; }
      `}</style>

      {/* --- Table (md+) --- */}
      <div className="hidden md:flex md:flex-col">
        <div className="grid grid-cols-[40px_200px_1fr_180px] gap-x-4 border-b border-white/[0.06] px-5 py-4">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
            ✓
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
            Clase
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
            Actividad
          </span>
          <span className="text-right text-[10px] font-semibold uppercase tracking-widest text-white/30">
            Entrega
          </span>
        </div>

        <div
          className="overflow-y-auto custom-scroll"
          style={{ scrollbarGutter: "stable" }}
        >
          {tareas.map((t, i) => {
            const fecha = new Date(t.fecha);
            const dias = getDiasRestantes(fecha);

            return (
              <div
                key={i}
                className={`grid grid-cols-[40px_200px_1fr_180px] gap-x-4 items-center border-b border-white/[0.03] px-5 py-3.5 text-sm transition-all duration-200 hover:bg-white/[0.04] hover:shadow-[inset_0_0_20px_rgba(99,102,241,0.06)] ${
                  t.completada ? "opacity-50" : ""
                }`}
              >
                <div className="flex items-center justify-start">
                  <input
                    type="checkbox"
                    checked={t.completada}
                    onChange={(e) => onToggleCompletada(t.id, e.target.checked)}
                    className="h-4 w-4 cursor-pointer accent-indigo-500"
                  />
                </div>
                <div className="flex items-center">
                  <span
                    className={`inline-block rounded-xs border px-2.5 py-0.5 text-[11px] font-bold leading-5 ${badgeColor(t.clase)}`}
                  >
                    {t.clase}
                  </span>
                </div>
                <div className="flex items-center">
                  <span
                    className={`break-words text-sm font-medium leading-snug ${
                      t.completada
                        ? "line-through text-white/50"
                        : "text-white/80"
                    }`}
                  >
                    {t.actividad}
                  </span>
                </div>
                <div className="flex flex-col items-end justify-center whitespace-nowrap">
                  <span className="text-[11px] font-semibold capitalize text-white/70">
                    {formatFecha(fecha)}
                  </span>
                  <span className="mt-0.5 font-mono text-xs font-bold text-indigo-400/70">
                    {formatHora(fecha)}
                  </span>
                  {dias <= 2 && dias >= 0 && (
                    <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-400/70">
                      {dias === 0 ? "Hoy" : `${dias}d`}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-3 md:hidden">
        {tareas.map((t, i) => {
          const fecha = new Date(t.fecha);
          const dias = getDiasRestantes(fecha);

          return (
            <div
              key={i}
              className={`rounded-xs border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.06] ${
                t.completada ? "opacity-50" : ""
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={t.completada}
                    onChange={(e) => onToggleCompletada(t.id, e.target.checked)}
                    className="h-4 w-4 cursor-pointer accent-indigo-500"
                  />
                  <span
                    className={`inline-block rounded-xs border px-2.5 py-0.5 text-[11px] font-bold leading-5 ${badgeColor(t.clase)}`}
                  >
                    {t.clase}
                  </span>
                </div>
                {dias <= 2 && dias >= 0 && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/70">
                    {dias === 0 ? "Hoy" : `${dias}d`}
                  </span>
                )}
              </div>

              <p
                className={`mb-3 text-sm font-medium leading-snug ${
                  t.completada ? "line-through text-white/50" : "text-white/80"
                }`}
              >
                {t.actividad}
              </p>

              <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                <span className="text-[11px] font-semibold capitalize text-white/60">
                  {formatFecha(fecha)}
                </span>
                <span className="font-mono text-xs font-bold text-indigo-400/70">
                  {formatHora(fecha)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
