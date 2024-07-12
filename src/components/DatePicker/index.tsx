import { DateTime, CustomTimeInputProps } from './DateTime';
import { SingleDate } from './SingleDate';
import { type Language } from '../../utils/types/locale.types';
import { DatePickerProps } from './common/types';
import { CustomInputProps } from './common/common';
export { AMPM_FORMAT, MONTHS } from './constant';

/**
 * must import 'react-datepicker/dist/react-datepicker.css'  in app to use react-datepicker
 */
const DatePicker = { Date: SingleDate, DateTime };
export default DatePicker;

export type {
  DatePickerProps,
  CustomInputProps,
  CustomTimeInputProps,
  Language as DatePickerLocale,
};
