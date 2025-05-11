import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/weather-forecast-app/', // Убедись, что путь совпадает с названием репозитория
  server: {
    open: true,
    port: 5173,
  },
});