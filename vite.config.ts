import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      /**
       * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
       * @default /app/App.tsx
       */
      entry: "/app/App.tsx",
      /**
       * If you want to store `index.html` in the specified folder, you can modify it, otherwise no configuration is required
       * @default index.html
       */
      template: "index.html",
    }),
  ],
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
      "@constants": path.resolve(__dirname, "./src/app/shared/constants"),
    },
  },
});
