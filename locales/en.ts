import type { I18nMessages } from "~/i18n";

export const en = {
  welcome: "Welcome",
  titleMax: "Title is maximum {max} characters",
} as const satisfies I18nMessages;
