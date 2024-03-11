import { type SupportLocale } from './types/locale.types';

export const formatDateByLanguage = (date: Date, language: SupportLocale) => {
  if (!date) {
    return;
  }
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  switch (language) {
    case 'ko':
      return `${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일 (${week[date.getDay()]})`;
    case 'en':
      return date.toDateString();
    default:
      return date.toDateString();
  }
};

export const formatDateTimeByLanguage = (date: Date, language: SupportLocale) => {
  if (!date) {
    return;
  }
  const dateFormat = formatDateByLanguage(date, language);
  return `${dateFormat} ${date.toLocaleTimeString(language)}`;
};
