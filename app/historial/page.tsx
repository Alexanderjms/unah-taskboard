"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { type Tarea } from "@/lib/types";
import FloatingOrbs from "@/components/FloatingOrbs";
import Header from "@/components/Header";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import EmptyState from "@/components/EmptyState";
import TaskTable from "@/components/TaskTable";
import Footer from "@/components/Footer";

export default function Historial() {
  const [tareas, setTareas] = useState<Tarea[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargar() {
      try {
        const { data, error } = await supabase
          .from("tareas")
          .select("*")
          .eq("completada", true)
          .order("fecha", { ascending: false });

        if (error) throw error;
        setTareas(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }
    cargar();
  }, []);

  const handleToggleCompletada = async (id: number, completada: boolean) => {
    try {
      const { error } = await supabase
        .from("tareas")
        .update({ completada })
        .eq("id", id);

      if (error) throw error;

      if (!completada) {
        setTareas((prev) => (prev ? prev.filter((t) => t.id !== id) : null));
      } else {
        setTareas((prev) =>
          prev
            ? prev.map((t) => (t.id === id ? { ...t, completada } : t))
            : null,
        );
      }
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : "Error al actualizar";
      console.error(errMsg);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07070d] text-white overflow-hidden font-sans antialiased">
      <FloatingOrbs />

      <div className="fixed top-0 right-0 z-20 p-4 md:p-8">
        <Link
          href="/"
          className="px-4 py-2 rounded-md bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-semibold transition-colors text-sm flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Volver
        </Link>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">
            Historial de Completadas
          </h1>
          <p className="mt-1 text-white/60">
            {tareas?.length || 0} tarea{tareas?.length === 1 ? "" : "s"}{" "}
            completada{tareas?.length === 1 ? "" : "s"}
          </p>
        </div>

        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}
        {!loading && !error && tareas?.length === 0 && (
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-12 text-center">
            <p className="text-white/60">No hay tareas completadas aún</p>
          </div>
        )}
        {tareas && tareas.length > 0 && (
          <TaskTable
            tareas={tareas}
            onToggleCompletada={handleToggleCompletada}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}
