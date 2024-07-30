export interface AlertInfo {
    title: string;
    contents?: string;
}
export interface AlertProps extends AlertInfo {
    opened: boolean;
    close: {
        label: string;
        onClick: () => void;
    };
}
export declare function Alert({ title, contents, opened, close }: AlertProps): import("@emotion/react/jsx-runtime").JSX.Element;
