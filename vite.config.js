import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // ✅ FIX: must be INSIDE defineConfig
  optimizeDeps: {
    include: ["framer-motion"],
  },
});