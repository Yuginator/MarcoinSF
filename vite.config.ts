import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        // wired-elements imports from "lit/decorators" (without .js), but the
        // lit package only exports "lit/decorators.js". This keeps Vite's
        // pre-bundler happy.
        'lit/decorators': 'lit/decorators.js',
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
