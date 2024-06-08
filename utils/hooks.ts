const options: Record<string, unknown> = {
  max: 10,
};

export function useI18nHelpers() {
  const { t } = useI18n();

  return {
    myTrans(key: string) {
      return t(key, options);
    },
  };
}
