import { useEffect } from "react";

interface CompletedToastProps {
  actividad: string;
  onDismiss: () => void;
  onHide: () => void;
}

export default function CompletedToast({
  actividad,
  onDismiss,
  onHide,
}: CompletedToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="flex items-center gap-4 rounded-lg border border-blue-500 bg-blue-900 backdrop-blur-md px-6 py-4 shadow-xl">
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Tarea completada</p>
          <p className="text-xs text-white mt-1 truncate">{actividad}</p>
        </div>
        <button
          onClick={onHide}
          className="px-4 py-2 text-sm font-semibold bg-blue-600/60 hover:bg-blue-600/80 text-white rounded-md transition-colors"
        >
          Mover a Historial
        </button>
        <button
          onClick={onDismiss}
          className="text-white hover:text-blue-300 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
