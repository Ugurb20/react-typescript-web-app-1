import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
      '@styles': '/src/styles',
      '@services': '/src/services',
      '@store': '/src/store',
      '@types': '/src/types',
      '@config': '/src/config',
      '@constants': '/src/constants',
      '@test': '/test',
    },
  },
});
