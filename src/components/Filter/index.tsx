import { FilterDateRange, FilterDateRangeProps } from './DateRange';
import {
  CategoryItemWrapper,
  CategoryLabel,
  FilterCategory,
  FilterFrame,
  FilterOptionType,
  FilterCategoryType,
  FilterCategoryProps,
  FilterFrameProps,
} from './Default';

export const Filter = {
  Frame: FilterFrame,
  CategoryLabel,
  CategoryItemWrapper,
  Category: FilterCategory,
  DateRange: FilterDateRange,
};

export type {
  FilterDateRangeProps,
  FilterOptionType,
  FilterCategoryType,
  FilterCategoryProps,
  FilterFrameProps,
};
