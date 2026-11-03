import DefaultTheme from 'vitepress/theme';
import ApiSignature from './ApiSignature.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({
    app,
  }: Parameters<NonNullable<typeof DefaultTheme.enhanceApp>>[0]) {
    app.component('ApiSignature', ApiSignature);
  },
};
