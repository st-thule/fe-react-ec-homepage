import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/app"),
      "@core": path.resolve(__dirname, "./src/app/core"),
      "@lib": path.resolve(__dirname, "./src/app/lib"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
      "@home": path.resolve(__dirname, "./src/app/pages/home"),
      "@cart": path.resolve(__dirname, "./src/app/pages/cart"),
      "@components": path.resolve(__dirname, "./src/app/shared/components"),
      "@layout": path.resolve(__dirname, "./src/app/shared/components/layout"),
      "@contexts": path.resolve(__dirname, "./src/app/contexts"),
      "@services": path.resolve(__dirname, "./src/app/services"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@styles": path.resolve(__dirname, "./src/stylesheet"),
    },
  },
  plugins: [react()],
});
