import type { I18nMessages, Lang } from "~/i18n";
import { en } from "~/locales/en";
import { ja } from "~/locales/ja";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    ja,
  } satisfies Record<Lang, I18nMessages>,
}));
