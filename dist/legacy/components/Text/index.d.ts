import { ReactNode, CSSProperties } from 'react';
import { type HTMLAttributes } from 'react';
import { color, typography } from '../styles';
export interface TypographyProps {
    children: ReactNode;
    size?: keyof typeof typography.size;
    fw?: keyof typeof typography.weight;
    c?: keyof typeof color;
    style?: CSSProperties;
    ellipsis?: boolean;
}
export interface StyleProps extends HTMLAttributes<HTMLSpanElement> {
    c?: keyof typeof color;
    ellipsis?: boolean;
}
/** * fontStyle 없는 view를 위한 컴포넌트 */
export declare function Text(props: TypographyProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function H1({ children, c }: StyleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function H2({ children, c }: StyleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function B1({ children, c, ellipsis }: StyleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function B2({ children, c, ellipsis }: StyleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function B3({ children, c, ellipsis }: StyleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function B4({ children, c, ellipsis }: StyleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function B5({ children, c, ellipsis }: StyleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function B6({ children, c, ellipsis }: StyleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function B7({ children, c, ellipsis }: StyleProps): import("@emotion/react/jsx-runtime").JSX.Element;
