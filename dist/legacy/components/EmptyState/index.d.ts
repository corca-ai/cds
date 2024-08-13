export interface EmptyStateProps {
    label: string;
    description: string;
    button?: {
        text: string;
        onClick: () => void;
    };
}
export declare function EmptyState({ label, description, button }: EmptyStateProps): import("@emotion/react/jsx-runtime").JSX.Element;
