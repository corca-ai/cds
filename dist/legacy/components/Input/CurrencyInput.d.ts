import type { DatePickerLocale } from 'src/legacy/utils';
import type { NumberInputProps } from './NumberInput';
export interface CurrencyInputProps extends Omit<NumberInputProps, 'leftSection'> {
    language: DatePickerLocale;
}
export declare function CurrencyInput(props: CurrencyInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
