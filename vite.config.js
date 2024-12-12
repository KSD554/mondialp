import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Spécifiez le port pour lequel votre application écoute
    host: true,  // Permet à Vite d'écouter sur toutes les interfaces réseau
  },
});
