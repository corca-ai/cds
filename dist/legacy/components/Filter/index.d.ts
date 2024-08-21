import { FilterDateRange, FilterDateRangeProps } from './DateRange';
import { FilterCategory, FilterFrame, FilterOptionType, FilterCategoryType, FilterCategoryProps, FilterFrameProps } from './Default';
export declare const Filter: {
    Frame: typeof FilterFrame;
    CategoryLabel: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme;
        as?: React.ElementType;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    CategoryItemWrapper: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme;
        as?: React.ElementType;
    } & {
        wrap?: "wrap" | "no-wrap";
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    Category: typeof FilterCategory;
    DateRange: typeof FilterDateRange;
};
export type { FilterDateRangeProps, FilterOptionType, FilterCategoryType, FilterCategoryProps, FilterFrameProps, };
