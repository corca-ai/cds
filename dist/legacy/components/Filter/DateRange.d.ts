import { type DatePickerLocale } from '../../utils/types/locale.types';
/**
 *  dateRange - [startDate, endDate]
 */
export interface FilterDateRangeProps {
    dateRange: Array<Date | null>;
    changeValue: (dateRange: Array<Date | null>) => void;
    startDateLabel?: string;
    endDateLabel?: string;
    language: DatePickerLocale;
}
/**
 * @param dateRange - [startDate, endDate]
 */
export declare function FilterDateRange({ dateRange, changeValue, startDateLabel, endDateLabel, language, }: FilterDateRangeProps): import("@emotion/react/jsx-runtime").JSX.Element;
