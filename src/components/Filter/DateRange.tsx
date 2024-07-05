import styled from '@emotion/styled';

import { type DatePickerLocale } from '../../utils/types/locale.types';
import DatePicker from '../DatePicker';
import { B3 } from '../Text';

const DatePickerRange = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

const DatePickerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  div:first-of-type {
    flex-grow: 1;
  }
`;

export interface FilterDateRangeProps {
  dateRange: Array<Date>;
  changeValue: (dateRange: Array<Date>) => void;
  startDateLabel?: string;
  endDateLabel?: string;
  language: DatePickerLocale;
}

export function FilterDateRange({
  dateRange,
  changeValue,
  startDateLabel,
  endDateLabel,
  language,
}: FilterDateRangeProps) {
  return (
    <DatePickerRange>
      <DatePickerItem>
        <DatePicker.Date
          selected={dateRange[0]}
          onChange={date => {
            changeValue([date, dateRange[1]]);
          }}
          language={language}
          maxDate={dateRange[1] as Date}
          placeholderText="Start Date"
        />
        {startDateLabel && <B3>{startDateLabel}</B3>}
      </DatePickerItem>
      <DatePickerItem>
        <DatePicker.Date
          selected={dateRange[1]}
          onChange={date => {
            changeValue([dateRange[0], date]);
          }}
          language={language}
          minDate={dateRange[0]}
          placeholderText="End Date"
        />
        {endDateLabel && <B3>{endDateLabel}</B3>}
      </DatePickerItem>
    </DatePickerRange>
  );
}
