import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        blogs: resolve(__dirname, "blogs.html"),
        contact: resolve(__dirname, "contact.html"),
        services: resolve(__dirname, "services.html"),
      },
    },
  },
});
