export interface PaginationProps {
    current: number;
    total: number;
    onSelect: (page: number) => void;
}
export declare function Pagination({ current, total, onSelect }: PaginationProps): import("@emotion/react/jsx-runtime").JSX.Element;
