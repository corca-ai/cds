import { ReactNode } from 'react';
interface Props {
    title: string;
    contents?: string;
    bottom: ReactNode;
    opened: boolean;
    onClose: () => void;
    borderRadius: number;
    closeOnBackdropClick?: boolean;
}
export declare function MessageModal({ title, contents, bottom, opened, onClose, borderRadius, closeOnBackdropClick, }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
