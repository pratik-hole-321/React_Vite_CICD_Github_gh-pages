import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/React_Vite_CICD_Github_gh-pages",
  plugins: [react()],
  server: {
    open: true,
    port: 8080,
  },
});
