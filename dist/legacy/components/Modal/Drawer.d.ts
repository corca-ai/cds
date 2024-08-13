import { type ReactElement } from 'react';
interface Props {
    title: string;
    opened: boolean;
    onClose: () => void;
    children: ReactElement | ReactElement[];
    closeOnBackdropClick?: boolean;
}
export declare function Drawer({ title, opened, onClose, children, closeOnBackdropClick }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
