"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { type Tarea } from "@/lib/types";
import FloatingOrbs from "@/components/FloatingOrbs";
import Header from "@/components/Header";
import StatsBar from "@/components/StatsBar";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import EmptyState from "@/components/EmptyState";
import TaskTable from "@/components/TaskTable";
import Footer from "@/components/Footer";

export default function Home() {
  const [tareas, setTareas] = useState<Tarea[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargar() {
      try {
        const { data, error } = await supabase
          .from("tareas")
          .select("*")
          .order("fecha", { ascending: true });

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

  const clases = tareas ? [...new Set(tareas.map((t) => t.clase))] : [];
  const fechas = tareas ? tareas.map((t) => new Date(t.fecha)) : [];
  const prox = fechas
    .filter((f) => f.getTime() > Date.now())
    .sort((a, b) => a.getTime() - b.getTime())[0];

  return (
    <div className="relative min-h-screen bg-[#07070d] text-white overflow-hidden font-sans antialiased">
      <FloatingOrbs />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
        <Header />

        {tareas && tareas.length > 0 && (
          <StatsBar
            totalTareas={tareas.length}
            totalClases={clases.length}
            proximaEntrega={prox}
          />
        )}

        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}
        {!loading && !error && tareas?.length === 0 && <EmptyState />}
        {tareas && tareas.length > 0 && <TaskTable tareas={tareas} />}

        <Footer />
      </div>
    </div>
  );
}
