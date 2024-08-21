export declare const ToastPrepare: () => import("@emotion/react/jsx-runtime").JSX.Element;
export interface ToastData {
    title?: string;
    message: string;
    durationMs?: number;
}
export declare const Toast: {
    success: (message: ToastData) => void;
    error: (message: ToastData) => void;
};
