export interface ConfirmProps {
    title: string;
    contents?: string;
    opened: boolean;
    cancel: {
        label: string;
        onClick: () => void;
    };
    confirm: {
        label: string;
        onClick: () => void;
    };
}
export declare function Confirm({ title, contents, opened, cancel, confirm }: ConfirmProps): import("@emotion/react/jsx-runtime").JSX.Element;
