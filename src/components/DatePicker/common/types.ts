import { ReactDatePickerProps } from 'react-datepicker';
import { DateInputProps } from 'src/components/Input/DateInput';
import { Language } from 'src/utils';

export interface DatePickerProps extends ReactDatePickerProps {
  selected: Date | null;
  onChange: (date: Date) => void;
  language: Language;
  inputProps?: Omit<DateInputProps, 'disabled'>;
  dateFormatter?: (date: Date, language: Language) => string;
}
