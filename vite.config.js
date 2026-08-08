import { defineConfig } from "vite";

export default defineConfig({
  // Rutas relativas para que los recursos funcionen en GitHub Pages.
  base: "./",
  server: {
    watch: {
      // OneDrive dentro de WSL puede no emitir eventos de cambios fiables.
      usePolling: true,
      interval: 200,
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "js/app.js",
        chunkFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          const originalName = assetInfo.names?.[0] ?? assetInfo.name ?? "";
          return originalName.endsWith(".css")
            ? "css/style.css"
            : "assets/[name][extname]";
        },
      },
    },
  },
});
