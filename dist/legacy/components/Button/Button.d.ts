import { ButtonHTMLAttributes, ReactElement } from 'react';
import { color } from '../styles';
export type ButtonVariant = 'filled' | 'outline' | 'text';
export type ButtonSize = 'small' | 'large';
interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    size: ButtonSize;
    icon?: ReactElement;
}
interface OutlineButtonProps extends CommonButtonProps {
    variant: 'outline';
    focused?: boolean;
}
export type ButtonProps = CommonButtonProps | OutlineButtonProps;
export type DefaultStyleSheet = {
    bg: keyof typeof color | null;
    border: keyof typeof color | null;
};
export declare function Button({ variant, size, children, disabled, onClick, icon, ...props }: ButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
