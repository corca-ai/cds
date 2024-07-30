import { type ReactElement, type ReactNode } from 'react';
import { IconProps } from '../Icon/type';
export interface ProfileProps {
    avatar?: string;
    name: string;
    description?: string;
}
export interface ProfileOption {
    label: string;
    onClick: () => void;
    icon: (icon: IconProps) => ReactElement;
}
export interface ProfileOptionListProps {
    title: ReactNode;
    name: string;
    email: string;
    options?: ProfileOption[];
}
export type ProfileMenuProps = ProfileProps & ProfileOptionListProps;
export declare function ProfileMenu({ avatar, name, description, ...optionListProps }: ProfileMenuProps): import("@emotion/react/jsx-runtime").JSX.Element;
