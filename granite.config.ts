import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'mindbalance',
  brand: {
    displayName: '밸런스 본능 테스트',
    primaryColor: '#3182F6',
    icon: 'https://static.toss.im/appsintoss/25557/a69c6471-13e7-4bc7-a713-28fc703ba658.png',
  },
  web: {
    host: 'localhost',
    port: 8080,
    commands: {
      dev: 'vite',
      build: 'vite build',
    },
  },
  permissions: [],
  outdir: 'dist',
});