import { type InputHTMLAttributes, type ReactElement, ReactNode } from 'react';
import { type TooltipProps } from '../Tooltip';
export type InputTooltipProps = Omit<TooltipProps, 'children'>;
export interface InputBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
    label?: string;
    description?: string;
    error?: string;
    children: ReactElement;
    width?: number;
    tooltip?: InputTooltipProps;
    rightSection?: ReactNode;
    leftSection?: ReactNode;
    cursorPointer?: boolean;
}
export declare function InputContainer({ label, description, required, error, children, width, tooltip, rightSection, leftSection, onClick, cursorPointer, ...props }: InputBaseProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const ErrorContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export type BaseInputType = {
    error?: string;
    isRightSection?: boolean;
    isLeftSection?: boolean;
    height?: string | number;
    cursorPointer?: boolean;
};
export declare const baseInputStyles: ({ error, isRightSection, isLeftSection, height, cursorPointer, }: BaseInputType) => import("@emotion/react").SerializedStyles;
export declare const BaseInput: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & BaseInputType, import("react").DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
