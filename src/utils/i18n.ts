import { Language } from './types/locale.types';
import ko from 'date-fns/locale/ko';
import en from 'date-fns/locale/en-US';
import vi from 'date-fns/locale/vi';

const localeMap: Record<Language, Locale> = {
  ko: ko,
  en: en,
  vi: vi,
};

export function convertLanguageToLocale(language: Language): Locale {
  return localeMap[language] ?? 'en-US';
}
