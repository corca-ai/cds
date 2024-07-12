import { useRef } from 'react';
import DatePicker from 'react-datepicker';
import { formatDateByLanguage } from '../../../utils/date';
import Icon from '../../Icon';
import { color } from '../../styles';
import { MONTHS } from '../constant';
import {
  CustomInput,
  DatepickerWrapper,
  HeaderButton,
  HeaderText,
  HeaderWrapper,
} from '../common/common';
import { DatePickerProps } from '../common/types';
import { convertLanguageToLocale } from '../../../utils/i18n';
import styled from '@emotion/styled';

export interface RangeDateProps extends Omit<DatePickerProps, 'onChange'> {
  onChange: (date: [Date | null, Date | null]) => void;
}

export const RangeDate = ({
  selected,
  onChange,
  language,
  inputProps,
  dateFormatter,
  startDate,
  endDate,
  ...props
}: RangeDateProps) => {
  const datePickerRef = useRef<DatePicker>(null);
  return (
    <RangeDateWrapper>
      <DatePicker
        {...props}
        selectsRange={true}
        ref={datePickerRef}
        locale={convertLanguageToLocale(language)}
        selected={selected}
        required={inputProps?.required}
        onChange={date => {
          if (validateRangeDate(date)) {
            onChange(date);
          }
        }}
        customInput={
          <CustomInput
            {...inputProps}
            onClick={() => datePickerRef.current?.setOpen(true)}
            date={
              dateFormatter != null && selected != null
                ? `${dateFormatter(startDate, language)} ~ ${dateFormatter(endDate, language)}`
                : selected != null
                ? `${formatDateByLanguage(startDate, language)} ~ ${formatDateByLanguage(
                    endDate,
                    language,
                  )}`
                : undefined
            }
          />
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          // https://reactdatepicker.com/#example-custom-header
        }) => (
          <HeaderWrapper>
            <HeaderButton type="button" onClick={decreaseMonth}>
              <Icon.ChevronLeftSmall color={color['main-black']} />
            </HeaderButton>
            <HeaderText>
              <span>{MONTHS[date.getMonth()]}</span>
              <span> {date.getFullYear()}</span>
            </HeaderText>
            <HeaderButton type="button" onClick={increaseMonth}>
              <Icon.ChevronRightSmall color={color['main-black']} />
            </HeaderButton>
          </HeaderWrapper>
        )}
      />
    </RangeDateWrapper>
  );
};

function validateRangeDate(date: unknown): date is [Date | null, Date | null] {
  return Array.isArray(date) && date.length === 2 && date.some(d => d instanceof Date);
}

const RangeDateWrapper = styled(DatepickerWrapper)`
  .react-datepicker-popper {
    .react-datepicker {
      .react-datepicker__week {
        gap: 0px;
        height: 35px;
      }

      .react-datepicker__day {
        width: 35px;
        height: 35px;
      }

      .react-datepicker__day.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--range-end.react-datepicker__day--in-range {
        border-radius: 8px !important;
      }

      .react-datepicker__day--selected .react-datepicker__day--in-range {
        border-radius: 8px !important;
      }

      .react-datepicker__day--range-start {
        border-radius: 8px 0px 0px 8px !important;
        background-color: ${color['main-black']} !important;
        color: ${color.white};
      }

      .react-datepicker__day--range-end {
        border-radius: 0px 8px 8px 0px;
        background-color: ${color['main-black']} !important;
        color: ${color.white};
      }

      .react-datepicker__day--selecting-range-start {
        border-radius: 8px 0px 0px 8px !important;
      }

      .react-datepicker__day--in-range {
        background: ${color['grey-20']};
      }

      .react-datepicker__day--in-selecting-range {
        background: ${color['grey-20']};
        &:hover {
          background-color: ${color['main-black']} !important;
          border-radius: 0px 8px 8px 0px;
          color: ${color.white};
        }
      }
    }
  }
`;
