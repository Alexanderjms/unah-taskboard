import { type Tarea, formatFecha, formatHora, getDiasRestantes, badgeColor } from "@/lib/types";

export default function TaskTable({ tareas }: { tareas: Tarea[] }) {
  return (
    <div className="animate-scale-in w-full overflow-hidden rounded-xs border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
      <div className="flex flex-col">
        <div className="grid grid-cols-[200px_1fr_180px] gap-x-4 border-b border-white/[0.06] px-5 py-4">
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

        <div className="overflow-y-auto" style={{ scrollbarGutter: "stable" }}>
          {tareas.map((t, i) => {
            const fecha = new Date(t.fecha);
            const dias = getDiasRestantes(fecha);

            return (
              <div
                key={i}
                className="animate-fade-slide-in grid grid-cols-[200px_1fr_180px] gap-x-4 border-b border-white/[0.03] px-5 py-3.5 text-sm transition-all duration-200 hover:bg-white/[0.04] hover:shadow-[inset_0_0_20px_rgba(99,102,241,0.06)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center">
                  <span
                    className={`inline-block rounded-xs border px-2.5 py-0.5 text-[11px] font-bold leading-5 ${badgeColor(t.clase)}`}
                  >
                    {t.clase}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="break-words text-sm font-medium leading-snug text-white/80">
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
    </div>
  );
}
