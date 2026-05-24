export default function EmptyState() {
  return (
    <div className="animate-fade-in rounded-xs border border-white/[0.06] bg-white/[0.02] px-8 py-20 text-center backdrop-blur-sm">
      <p className="mb-2 text-4xl opacity-40">📭</p>
      <p className="font-medium text-white/60">No hay tareas pendientes</p>
      <p className="mt-1 text-sm text-white/30">
        Todo al día · disfrutá el silencio
      </p>
    </div>
  );
}
