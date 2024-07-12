import { DateTime, CustomTimeInputProps } from './DateTime';
import { SingleDate } from './SingleDate';

import { DatePickerProps } from './common/types';
import { CustomInputProps } from './common/common';
import { RangeDate, RangeDateProps } from './RangeDate/RangeDate';
import { type Language } from '../../utils/types/locale.types';
export { AMPM_FORMAT, MONTHS } from './constant';

/**
 * must import 'react-datepicker/dist/react-datepicker.css'  in app to use react-datepicker
 */
const DatePicker = { Date: SingleDate, DateTime, Range: RangeDate };
export default DatePicker;

export type {
  DatePickerProps,
  CustomInputProps,
  CustomTimeInputProps,
  Language as DatePickerLocale,
  RangeDateProps,
};
