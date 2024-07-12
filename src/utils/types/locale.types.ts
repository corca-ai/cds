/**
 * this should follow the official country code
 */
export type Language = 'ko' | 'en' | 'vi';

export type Locale = 'ko_KR' | 'en_US' | 'vi_VN';

const localeMap: Record<Language, Locale> = {
  ko: 'ko_KR',
  en: 'en_US', // 기본값으로 en_US 설정
  vi: 'vi_VN',
};

function convertLanguageToLocale(language: Language): Locale {
  return localeMap[language] ?? 'en_US';
}
