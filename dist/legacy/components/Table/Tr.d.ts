import { ReactNode } from 'react';
export interface TrProps {
    children: ReactNode;
    readOnly?: boolean;
    onClick?: () => void;
}
export declare const Tr: ({ children, readOnly, onClick }: TrProps) => import("@emotion/react/jsx-runtime").JSX.Element;
