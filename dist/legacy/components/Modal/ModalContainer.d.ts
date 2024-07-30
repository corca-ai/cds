import { type ReactElement } from 'react';
interface Props {
    opened: boolean;
    children: ReactElement | ReactElement[];
    borderRadius: number;
    onClose: () => void;
    closeOnBackdropClick?: boolean;
    drawer?: boolean;
}
export declare function ModalContainer({ opened, children, borderRadius, onClose, closeOnBackdropClick, drawer, }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
