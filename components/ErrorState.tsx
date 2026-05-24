export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="animate-fade-in rounded-xs border border-red-500/20 bg-white/[0.02] px-8 py-14 text-center backdrop-blur-sm">
      <p className="mb-1 text-3xl">⚠️</p>
      <p className="text-sm font-medium text-red-400">{message}</p>
    </div>
  );
}
