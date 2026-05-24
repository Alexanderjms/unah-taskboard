export interface Tarea {
  clase: string;
  actividad: string;
  fecha: string;
}

export function getDiasRestantes(fecha: Date) {
  return Math.ceil((fecha.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

export function formatFecha(fecha: Date) {
  return fecha.toLocaleDateString("es-HN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function formatHora(fecha: Date) {
  return fecha.toLocaleTimeString("es-HN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function formatFechaCorta(fecha: Date) {
  return fecha.toLocaleDateString("es-HN", {
    day: "numeric",
    month: "short",
  });
}

const CLASE_COLORS: Record<string, string> = {
  "IA-231": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  "Mate-301": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Fis-101": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "Prog-202": "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

export function badgeColor(clase: string) {
  return CLASE_COLORS[clase] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
}
