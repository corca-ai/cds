import { DatePickerLocale } from 'src/legacy/utils';
export interface Time {
    hh: string;
    mm: string;
    ss: string;
    amPm: AMPM;
}
export declare enum AMPM {
    AM = "AM",
    PM = "PM"
}
export interface CustomTimeInputProps {
    newDate: Date;
    language: DatePickerLocale;
    onConfirm: () => void;
    setNewDate: (date: Date) => void;
}
export declare const CustomTimeInput: ({ newDate, language, onConfirm, setNewDate, }: CustomTimeInputProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export declare const DefaultContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const TimeContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const TimeInput: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export declare const AmPmButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
