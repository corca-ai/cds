import { type ReactElement, type ReactNode } from 'react';
import { type IconProps } from '../Icon/type';
export interface NavItemType {
    icon: (icon: IconProps) => ReactElement;
    label: string;
    href: string;
    selected?: boolean;
}
export interface NavbarGroup {
    title: string;
    navItems: NavItemType[];
}
export interface NavigationProps {
    logoImage: {
        src: string;
        width: number;
        height: number;
    };
    logoHref: string;
    bottom?: ReactNode;
    navbarGroup: NavbarGroup[];
    selectedColor?: string;
    LinkElement?: ReactElement;
}
export declare function Navigation({ logoImage, logoHref, bottom, navbarGroup, selectedColor, LinkElement, }: NavigationProps): import("@emotion/react/jsx-runtime").JSX.Element;
