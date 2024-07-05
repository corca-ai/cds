import { type DatePickerLocale } from '../../utils/types/locale.types';
import { AMPM } from './DateTime/CustomTimeInput';

export const AMPM_FORMAT: Record<DatePickerLocale, Record<AMPM, AMPM | '오전' | '오후'>> = {
  ko: {
    AM: '오전',
    PM: '오후',
  },
  en: {
    AM: AMPM.AM,
    PM: AMPM.PM,
  },
  vi: {
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
