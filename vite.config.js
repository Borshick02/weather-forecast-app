import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/weather-forecast-app/',  // Убедись, что путь соответствует репозиторию
  server: {
    open: true,
    port: 5173,
  },
});
