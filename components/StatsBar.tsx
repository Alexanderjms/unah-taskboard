import { formatFechaCorta, getDiasRestantes } from "@/lib/types";

interface StatsBarProps {
  totalTareas: number;
  totalClases: number;
  proximaEntrega: Date | undefined;
}

export default function StatsBar({ totalTareas, totalClases, proximaEntrega }: StatsBarProps) {
  const stats: [string, string | number, string][] = [
    ["Tareas", totalTareas, "text-white"],
    ["Clases", totalClases, "text-white"],
    ["Próxima", proximaEntrega ? formatFechaCorta(proximaEntrega) : "—", "text-cyan-400 text-sm"],
    ["Quedan", proximaEntrega ? getDiasRestantes(proximaEntrega) : "—", "text-white"],
  ];

  return (
    <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
      {stats.map(([label, value, cls], i) => (
        <div
          key={label}
          className="animate-fade-in rounded-xs border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06]"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
            {label}
          </p>
          <p className={`mt-1 font-extrabold tracking-tight ${cls}`}>
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}
