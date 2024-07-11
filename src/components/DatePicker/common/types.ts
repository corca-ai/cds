import { ReactDatePickerProps } from 'react-datepicker';
import { DateInputProps } from 'src/components/Input/DateInput';
import { DatePickerLocale } from 'src/utils';

export interface DatePickerProps extends ReactDatePickerProps {
  selected: Date | null;
  onChange: (date: Date) => void;
  language: DatePickerLocale;
  inputProps?: Omit<DateInputProps, 'disabled'>;
  dateFormatter?: (date: Date, language: DatePickerLocale) => string;
}
