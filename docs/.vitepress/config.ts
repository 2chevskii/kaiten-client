import {defineConfig} from 'vitepress';
import {fileURLToPath} from 'node:url';
import {generateApiReference} from '../../tools/generate-api-reference.mjs';

const repository = 'https://github.com/2chevskii/kaiten-client';
const base = '/kaiten-client/';

// Generate before VitePress discovers pages; Vite's build hooks run too late.
export default async () => {
  const apiSidebar = await generateApiReference();
  return defineConfig({
    base,
    title: 'Kaiten Client',
    description: 'Typed TypeScript client for Kaiten',
    cleanUrls: true,
    lastUpdated: true,
    head: [
      ['link', {rel: 'icon', type: 'image/svg+xml', href: `${base}icon.svg`}],
    ],
    vite: {
      publicDir: fileURLToPath(new URL('../../assets', import.meta.url)),
      plugins: [
        {
          name: 'kaiten-api-reference',
          async buildStart() {
            await generateApiReference();
          },
        },
      ],
    },
    themeConfig: {
      logo: '/icon.svg',
      socialLinks: [{icon: 'github', link: repository}],
      search: {
        provider: 'local',
        options: {
          locales: {
            ru: {
              translations: {
                button: {
                  buttonText: 'Поиск',
                  buttonAriaLabel: 'Поиск по документации',
                },
                modal: {
                  noResultsText: 'Ничего не найдено',
                  resetButtonTitle: 'Сбросить поиск',
                  backButtonTitle: 'Закрыть поиск',
                  displayDetails: 'Показать подробности',
                  footer: {
                    selectText: 'выбрать',
                    selectKeyAriaLabel: 'Enter',
                    navigateText: 'перемещаться',
                    navigateUpKeyAriaLabel: 'стрелка вверх',
                    navigateDownKeyAriaLabel: 'стрелка вниз',
                    closeText: 'закрыть',
                    closeKeyAriaLabel: 'Esc',
                  },
                },
              },
            },
          },
        },
      },
    },
    locales: {
      root: {
        label: 'English',
        lang: 'en-US',
        title: 'Kaiten Client',
        description: 'Typed TypeScript client for Kaiten',
        themeConfig: {
          nav: [
            {text: 'Guide', link: '/guide/getting-started'},
            {text: 'API', link: '/reference/rest'},
          ],
          sidebar: [
            {
              text: 'Getting started',
              items: [
                {
                  text: 'Install and first request',
                  link: '/guide/getting-started',
                },
                {
                  text: 'Configuration and errors',
                  link: '/guide/configuration',
                },
              ],
            },
            {
              text: 'Integrations',
              items: [
                {text: 'REST API', link: '/guide/rest'},
                {text: 'Files', link: '/guide/files'},
                {text: 'SCIM', link: '/guide/scim'},
                {text: 'Webhooks', link: '/guide/webhooks'},
                {text: 'User metadata', link: '/guide/metadata'},
                {text: 'Imports', link: '/guide/imports'},
                {text: 'Addons', link: '/guide/addons'},
              ],
            },
            {
              text: 'Reference',
              items: [
                {
                  text: 'REST API',
                  link: '/reference/rest',
                  collapsed: true,
                  items: apiSidebar.en.rest,
                },
                {
                  text: 'SCIM API',
                  link: '/reference/scim',
                  collapsed: true,
                  items: apiSidebar.en.scim,
                },
                {
                  text: 'Integration contracts',
                  link: '/reference/integrations',
                },
              ],
            },
          ],
          outline: {label: 'On this page'},
          editLink: {
            pattern: `${repository}/edit/master/docs/:path`,
            text: 'Edit this page',
          },
        },
      },
      ru: {
        label: 'Русский',
        lang: 'ru-RU',
        title: 'Kaiten Client',
        description: 'Типизированный TypeScript-клиент Kaiten',
        themeConfig: {
          nav: [
            {text: 'Руководство', link: '/ru/guide/getting-started'},
            {text: 'API', link: '/ru/reference/rest'},
          ],
          sidebar: [
            {
              text: 'Начало работы',
              items: [
                {
                  text: 'Установка и первый запрос',
                  link: '/ru/guide/getting-started',
                },
                {text: 'Настройка и ошибки', link: '/ru/guide/configuration'},
              ],
            },
            {
              text: 'Интеграции',
              items: [
                {text: 'REST API', link: '/ru/guide/rest'},
                {text: 'Файлы', link: '/ru/guide/files'},
                {text: 'SCIM', link: '/ru/guide/scim'},
                {text: 'Вебхуки', link: '/ru/guide/webhooks'},
                {text: 'Метаданные пользователя', link: '/ru/guide/metadata'},
                {text: 'Импорт', link: '/ru/guide/imports'},
                {text: 'Аддоны', link: '/ru/guide/addons'},
              ],
            },
            {
              text: 'Справочник',
              items: [
                {
                  text: 'REST API',
                  link: '/ru/reference/rest',
                  collapsed: true,
                  items: apiSidebar.ru.rest,
                },
                {
                  text: 'SCIM API',
                  link: '/ru/reference/scim',
                  collapsed: true,
                  items: apiSidebar.ru.scim,
                },
                {
                  text: 'Контракты интеграций',
                  link: '/ru/reference/integrations',
                },
              ],
            },
          ],
          outline: {label: 'На этой странице'},
          docFooter: {prev: 'Назад', next: 'Далее'},
          lastUpdated: {text: 'Обновлено'},
          langMenuLabel: 'Язык',
          darkModeSwitchLabel: 'Тема',
          lightModeSwitchTitle: 'Светлая тема',
          darkModeSwitchTitle: 'Тёмная тема',
          sidebarMenuLabel: 'Меню',
          returnToTopLabel: 'Наверх',
          skipToContentLabel: 'Перейти к содержимому',
          editLink: {
            pattern: `${repository}/edit/master/docs/:path`,
            text: 'Изменить страницу',
          },
        },
      },
    },
  });
};
