export interface ThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
    url: string | null;
    alt?: string;
    size?: number;
}
export declare const Thumbnail: import("react").ForwardRefExoticComponent<ThumbnailProps & import("react").RefAttributes<HTMLDivElement>>;
