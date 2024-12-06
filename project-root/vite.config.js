import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    'import.meta.env.GNEWS_API_KEY': JSON.stringify(process.env.GNEWS_API_KEY)
  }
});
