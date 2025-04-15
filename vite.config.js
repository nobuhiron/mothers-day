import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        scroll: 'src/modules/scroll.js',
        main: 'src/main.js',
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});
