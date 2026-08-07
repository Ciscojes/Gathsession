import { defineConfig } from "vite";

export default defineConfig({
  // Relative assets work both locally and under a GitHub Pages project URL.
  base: "./",
  server: {
    watch: {
      // OneDrive/WSL can miss native file-system events.
      usePolling: true,
      interval: 100,
    },
  },
});
