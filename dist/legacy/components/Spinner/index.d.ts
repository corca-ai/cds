export type SpinnerSize = 's' | 'm' | 'l';
export interface SpinnerProps {
    color?: string;
    size?: SpinnerSize;
    speed?: number;
}
export declare const SpinnerSizeMap: {
    s: number;
    m: number;
    l: number;
};
export declare function Spinner({ color: c, size, speed }: SpinnerProps): import("@emotion/react/jsx-runtime").JSX.Element;
