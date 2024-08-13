import { type MouseEventHandler } from 'react';
import { type ReactDatePickerProps } from 'react-datepicker';
import { type DatePickerLocale } from '../../../utils/types/locale.types';
import { type DateInputProps } from '../../Input/DateInput';
export interface DatePickerProps extends ReactDatePickerProps {
    selected: Date | null;
    onChange: (date: Date) => void;
    language: DatePickerLocale;
    inputProps?: Omit<DateInputProps, 'disabled'>;
    dateFormatter?: (date: Date, language: DatePickerLocale) => string;
}
export declare function SingleDate({ selected, onChange, language, inputProps, dateFormatter, ...props }: DatePickerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export interface CustomInputProps extends DateInputProps {
    onClick: MouseEventHandler<HTMLInputElement>;
    date?: string;
}
export declare const CustomInput: import("react").ForwardRefExoticComponent<CustomInputProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DatepickerWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & {
    monthContainerPadding?: string;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const HeaderWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const HeaderText: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const HeaderButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
