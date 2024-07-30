import { type InputBaseProps } from './InputContainer';
export type DateInputProps = Omit<InputBaseProps, 'children'>;
export declare function DateInput({ label, placeholder, description, name, value, error, disabled, onChange, defaultValue, required, width, tooltip, onClick, ...props }: DateInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
