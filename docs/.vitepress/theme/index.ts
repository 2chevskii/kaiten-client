import DefaultTheme from 'vitepress/theme';
import ApiSignature from './ApiSignature.vue';
import './custom.css';

// VitePress reuses local-search module URLs after a dev-server restart.
// Reload the document on reconnect to discard the browser's old module cache.
if (import.meta.hot) {
  let disconnected = false;
  import.meta.hot.on('vite:ws:disconnect', () => {
    disconnected = true;
  });
  import.meta.hot.on('vite:ws:connect', () => {
    if (disconnected) window.location.reload();
  });
}

export default {
  extends: DefaultTheme,
  enhanceApp({
    app,
  }: Parameters<NonNullable<typeof DefaultTheme.enhanceApp>>[0]) {
    app.component('ApiSignature', ApiSignature);
  },
};
