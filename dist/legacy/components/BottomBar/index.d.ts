import { type ButtonHTMLAttributes } from 'react';
export interface ButtonAction extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}
export interface BottomBarProps {
    dismiss: ButtonAction;
    destroy?: ButtonAction;
    confirm: ButtonAction;
}
export declare function BottomBar({ dismiss, destroy, confirm }: BottomBarProps): import("@emotion/react/jsx-runtime").JSX.Element;
