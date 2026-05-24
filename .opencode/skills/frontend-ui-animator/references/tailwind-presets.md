# Tailwind Animation Presets

Add to `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        "fade-slide-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "blur-in": {
          from: { opacity: "0", filter: "blur(8px)" },
          to: { opacity: "1", filter: "blur(0)" },
        },
      },
      animation: {
        "fade-slide-in": "fade-slide-in 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "blur-in": "blur-in 0.5s ease-out forwards",
      },
    },
  },
};

export default config;
```
