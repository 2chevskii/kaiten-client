import { defineConfig } from "vitepress";

const repository = "https://github.com/2chevskii/kaiten-client";

export default defineConfig({
  base: process.env.VITEPRESS_BASE ?? "/",
  title: "Kaiten Client",
  description: "Typed TypeScript client for Kaiten",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["architecture.md", "documentation-audit.md"],
  themeConfig: {
    socialLinks: [{ icon: "github", link: repository }],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Поиск",
                buttonAriaLabel: "Поиск по документации",
              },
              modal: {
                noResultsText: "Ничего не найдено",
                resetButtonTitle: "Сбросить поиск",
                backButtonTitle: "Закрыть поиск",
                displayDetails: "Показать подробности",
                footer: {
                  selectText: "выбрать",
                  selectKeyAriaLabel: "Enter",
                  navigateText: "перемещаться",
                  navigateUpKeyAriaLabel: "стрелка вверх",
                  navigateDownKeyAriaLabel: "стрелка вниз",
                  closeText: "закрыть",
                  closeKeyAriaLabel: "Esc",
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
      label: "Русский",
      lang: "ru-RU",
      title: "Kaiten Client",
      description: "Типизированный TypeScript-клиент Kaiten",
      themeConfig: {
        nav: [
          { text: "Руководство", link: "/guide/getting-started" },
          { text: "API", link: "/reference/rest" },
        ],
        sidebar: [
          {
            text: "Начало работы",
            items: [
              {
                text: "Установка и первый запрос",
                link: "/guide/getting-started",
              },
              { text: "Настройка и ошибки", link: "/guide/configuration" },
            ],
          },
          {
            text: "Интеграции",
            items: [
              { text: "REST API", link: "/guide/rest" },
              { text: "Файлы", link: "/guide/files" },
              { text: "SCIM", link: "/guide/scim" },
              { text: "Вебхуки", link: "/guide/webhooks" },
              { text: "Метаданные пользователя", link: "/guide/metadata" },
              { text: "Импорт", link: "/guide/imports" },
              { text: "Аддоны", link: "/guide/addons" },
            ],
          },
          {
            text: "Справочник",
            items: [
              { text: "Все REST-операции", link: "/reference/rest" },
              { text: "Все SCIM-операции", link: "/reference/scim" },
              { text: "Контракты интеграций", link: "/reference/integrations" },
            ],
          },
        ],
        outline: { label: "На этой странице" },
        docFooter: { prev: "Назад", next: "Далее" },
        lastUpdated: { text: "Обновлено" },
        langMenuLabel: "Язык",
        darkModeSwitchLabel: "Тема",
        lightModeSwitchTitle: "Светлая тема",
        darkModeSwitchTitle: "Тёмная тема",
        sidebarMenuLabel: "Меню",
        returnToTopLabel: "Наверх",
        skipToContentLabel: "Перейти к содержимому",
        editLink: {
          pattern: `${repository}/edit/develop/docs/:path`,
          text: "Изменить страницу",
        },
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      title: "Kaiten Client",
      description: "Typed TypeScript client for Kaiten",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/en/guide/getting-started" },
          { text: "API", link: "/en/reference/rest" },
        ],
        sidebar: [
          {
            text: "Getting started",
            items: [
              {
                text: "Install and first request",
                link: "/en/guide/getting-started",
              },
              {
                text: "Configuration and errors",
                link: "/en/guide/configuration",
              },
            ],
          },
          {
            text: "Integrations",
            items: [
              { text: "REST API", link: "/en/guide/rest" },
              { text: "Files", link: "/en/guide/files" },
              { text: "SCIM", link: "/en/guide/scim" },
              { text: "Webhooks", link: "/en/guide/webhooks" },
              { text: "User metadata", link: "/en/guide/metadata" },
              { text: "Imports", link: "/en/guide/imports" },
              { text: "Addons", link: "/en/guide/addons" },
            ],
          },
          {
            text: "Reference",
            items: [
              { text: "All REST operations", link: "/en/reference/rest" },
              { text: "All SCIM operations", link: "/en/reference/scim" },
              {
                text: "Integration contracts",
                link: "/en/reference/integrations",
              },
            ],
          },
        ],
        outline: { label: "On this page" },
        editLink: {
          pattern: `${repository}/edit/develop/docs/:path`,
          text: "Edit this page",
        },
      },
    },
  },
});
