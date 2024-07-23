import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: "/src/assets",
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
    },
  },
  base: "/SLFront",
});
