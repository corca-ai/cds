import { CSSProperties, type ReactElement } from 'react';
import { ButtonAction } from '../BottomBar';
interface ModalButtonProps extends ButtonAction {
    onClick: () => void;
}
interface Props {
    title: string;
    subtitle: string;
    children: ReactElement;
    opened: boolean;
    closeOnBackdropClick?: boolean;
    width?: CSSProperties['width'];
    cancel: ModalButtonProps;
    confirm: ModalButtonProps;
}
export declare function Modal({ title, subtitle, opened, cancel, confirm, children, closeOnBackdropClick, width, }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
