import { useCallback } from 'react';
import { useRouter } from 'next/router';

import tJa from 'translations/ja';
import tEn from 'translations/en';

const defaultLocale = 'ja' as const;
const locales = ['en', 'ja'] as const;
const strings = {
    en: tEn,
    ja: tJa,
};

export type Locale = typeof locales[number];
type LocaleKey = keyof typeof tJa;

export function isLocale(tested: string): tested is Locale {
  return locales.some(locale => locale === tested);
}

interface I18n {
  t: (key: LocaleKey) => string;
}

export function useI18n(): I18n {
  const { locale } = useRouter();

  const t = useCallback((key: LocaleKey): string => {
    if (!locale) {
      console.warn('Locale not found.');
      return '';
    }

    if (!strings[(locale as Locale)][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
      return '';
    }

    return strings[(locale as Locale)][key] || strings[defaultLocale][key] || '';
  }, [locale]);

  return {
    t,
  };
}

