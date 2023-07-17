import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [react(), VitePWA()],
  resolve: {
    alias: {
      '@data': '/src/data',
      '@utils': '/src/utils',
      '@domain': '/src/domain',
      '@features': '/src/features',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@quicker': '/src',
      '@style': '/src/style',
      '@services': '/src/services',
      '@store': '/src/store',
      '@types': '/src/types',
      '@config': '/src/config',
      '@constants': '/src/constants',
      '@test': '/test',
      '@common': '/src/common',
    },
  },
  build: {
    rollupOptions: {
      external: ['core-js-pure/stable/instance/filter.js'],
    },
  },
});
