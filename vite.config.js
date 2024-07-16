import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/slfront",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
