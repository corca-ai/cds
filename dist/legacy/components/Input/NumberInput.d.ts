import { TextInputProps } from './TextInput';
export type NumberInputProps = Omit<TextInputProps, 'onChange'> & {
    onChange: (value: number | null) => void;
};
export declare function NumberInput({ value, onChange, onBlur, ...props }: NumberInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
