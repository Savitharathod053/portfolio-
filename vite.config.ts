import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, '/');
          if (normalizedId.includes('/node_modules/three/')) {
            return 'vendor-three';
          }
          if (normalizedId.includes('/node_modules/@react-three/')) {
            return 'vendor-r3f';
          }
          if (normalizedId.includes('/node_modules/motion/')) {
            return 'vendor-motion';
          }
          if (
            normalizedId.includes('/node_modules/gsap/') ||
            normalizedId.includes('/node_modules/lenis/')
          ) {
            return 'vendor-animation';
          }
          if (
            normalizedId.includes('/node_modules/react/') ||
            normalizedId.includes('/node_modules/react-dom/') ||
            normalizedId.includes('/node_modules/scheduler/')
          ) {
            return 'vendor-react';
          }
          if (normalizedId.includes('/node_modules/lucide-react/')) {
            return 'vendor-icons';
          }
        },
      },
    },
  },
});
