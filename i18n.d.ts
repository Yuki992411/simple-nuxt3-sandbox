import type { ja } from "~/locales/ja";

type Lang = "en" | "ja";
type I18nMessages = Record<keyof typeof ja, string>;
