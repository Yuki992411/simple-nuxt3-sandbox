import type { ja } from "~/locale/ja";

type Lang = "en" | "ja";
type I18nMessages = Record<keyof typeof ja, string>;
