import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: "/src/assets",
      },
      {
        find: "@components",
        replacement: "/src/components",
      },
      {
        find: "@config",
        replacement: "/src/config",
      },
      {
        find: "@hooks",
        replacement: "/src/hooks",
      },
      {
        find: "@layouts",
        replacement: "/src/layouts",
      },
      {
        find: "@pages",
        replacement: "/src/pages",
      },
      {
        find: "@services",
        replacement: "/src/services",
      },
      {
        find: "@static",
        replacement: "/src/static",
      },
      {
        find: "@store",
        replacement: "/src/store",
      },
      {
        find: "@utils",
        replacement: "/src/utils",
      },
    ],
  },
});
