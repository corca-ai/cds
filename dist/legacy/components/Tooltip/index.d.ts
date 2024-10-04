import { PropsWithChildren, ReactElement } from 'react';
export type Placement = 'top' | 'bottom' | 'left' | 'right';
export type Position = 'start' | 'end' | 'center';
export type TooltipDirection = `${Placement}-${Position}`;
export interface TooltipProps {
    direction?: TooltipDirection;
    withArrow?: boolean;
    content: string | ReactElement;
}
export declare function Tooltip({ direction, withArrow, children, content, }: PropsWithChildren<TooltipProps>): import("@emotion/react/jsx-runtime").JSX.Element;
