import en from 'date-fns/locale/en-US';
import ko from 'date-fns/locale/ko';
import vi from 'date-fns/locale/vi';

import { AMPM } from './DateTime/CustomTimeInput';
import { type SupportLocale } from '../../utils/types/locale.types';
import { Locale } from 'date-fns';

export const LOCALE: Record<SupportLocale, Locale> = {
  ko,
  en,
  vn: vi,
};

export const AMPM_FORMAT: Record<SupportLocale, Record<AMPM, AMPM | '오전' | '오후'>> = {
  ko: {
    AM: '오전',
    PM: '오후',
  },
  en: {
    AM: AMPM.AM,
    PM: AMPM.PM,
  },
  vn: {
    AM: AMPM.AM,
    PM: AMPM.PM,
  },
};

export const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
