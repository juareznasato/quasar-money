import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.js"),
      name: "QuasarMoney",
      fileName: (format) => `quasar-money.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue", "quasar"], // Excluir do bundle
      output: {
        globals: {
          vue: "Vue",
          quasar: "Quasar",
        },
      },
    },
  },
});
