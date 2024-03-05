import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  plugins: [vue()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        Home: resolve(root, "index.html"),
        About: resolve(root, "about", "index.html"),
        TestRouteCode: resolve(root, "tis.TestRouteCode", "index.html"),
        TestRouteTemplate: resolve(root, "tis.TestRouteTemplate", "index.html"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
