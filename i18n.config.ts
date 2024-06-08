import type { I18nMessages, Lang } from "~/i18n";
import { en } from "~/locale/en";
import { ja } from "~/locale/ja";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    ja,
  } satisfies Record<Lang, I18nMessages>,
}));
