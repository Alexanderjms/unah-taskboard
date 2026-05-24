# UNAH TaskBoard

Dashboard de tareas académicas sincronizado con Supabase y n8n.  
Construido con Next.js 16 + Tailwind CSS v4.

## Vista previa

![screenshot](https://img.shields.io/badge/status-activo-brightgreen)

- Gradiente animado con orbes flotantes
- Tabla de tareas con animaciones staggered
- Estadísticas en tiempo real (total, clases, próxima entrega)
- Diseño responsive con glassmorphism

## Stack

| Herramienta | Uso |
|---|---|
| Next.js 16 | Framework |
| Tailwind CSS v4 | Estilos |
| Supabase | Base de datos |
| n8n | Automatización (carga de datos) |

## Scripts

```bash
npm run dev     # desarrollo
npm run build   # build producción
npm run start   # servidor producción
```

## Estructura

```
lib/              → cliente Supabase, tipos, utilidades
components/       → componentes de UI
app/page.tsx      → página principal
```


