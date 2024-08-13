import { DateTime, CustomTimeInputProps } from './DateTime';
import { SingleDate, DatePickerProps, CustomInputProps } from './SingleDate';
import { type DatePickerLocale } from '../../utils/types/locale.types';
export * from './constant';
/**
 * must import 'react-datepicker/dist/react-datepicker.css'  in app to use react-datepicker
 */
declare const DatePicker: {
    Date: typeof SingleDate;
    DateTime: typeof DateTime;
};
export default DatePicker;
export type { DatePickerProps, CustomInputProps, CustomTimeInputProps, DatePickerLocale };
