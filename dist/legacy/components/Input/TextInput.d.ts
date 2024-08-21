import { InputBaseProps } from './InputContainer';
export type TextInputProps = Omit<InputBaseProps, 'children'>;
export declare const TextInput: import("react").ForwardRefExoticComponent<TextInputProps & import("react").RefAttributes<HTMLInputElement>>;
