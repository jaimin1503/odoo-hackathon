import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const dotenv = require("dotenv");

export default defineConfig({
  plugins: [
    react(),
    {
      ...dotenv.config(),
      // You can specify additional options for dotenv here if needed
    },
  ],
});
