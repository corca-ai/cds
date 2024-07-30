export declare const badgeVariants: readonly ["green", "grey", "yellow", "red"];
export type BadgeVariant = (typeof badgeVariants)[number];
export declare const variantColors: {
    [v in BadgeVariant]: {
        bg: string;
        font: string;
        dot: string;
    };
};
export interface BadgeProps {
    dotted?: boolean;
    label: string;
    variant: BadgeVariant;
}
export declare function Badge({ dotted, label, variant }: BadgeProps): import("@emotion/react/jsx-runtime").JSX.Element;
