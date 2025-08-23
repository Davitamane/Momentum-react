import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  base: process.env.NODE_ENV === "production" ? "/Momentum-react/" : "/",
  server: {
    proxy: {
      "/api": {
        target: "https://momentum.redberryinternship.ge",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
