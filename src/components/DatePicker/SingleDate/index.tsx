import { type LegacyRef, type MouseEventHandler, forwardRef, useRef } from 'react';
import DatePicker, { type ReactDatePickerProps } from 'react-datepicker';

import styled from '@emotion/styled';

import { formatDateByLanguage } from '../../../utils/date';
import { type SupportLocale } from '../../../utils/types/locale.types';
import Icon from '../../Icon';
import { DateInput, type DateInputProps } from '../../Input/DateInput';
import { color } from '../../styles';
import { LOCALE, MONTHS } from '../constant';

export interface DatePickerProps extends ReactDatePickerProps {
  selected: Date | null;
  onChange: (date: Date) => void;
  language: SupportLocale;
  inputProps?: Omit<DateInputProps, 'disabled'>;
  dateFormatter?: (date: Date, language: SupportLocale) => string;
}

export function SingleDate({
  selected,
  onChange,
  language,
  inputProps,
  dateFormatter,
  ...props
}: DatePickerProps) {
  const datePickerRef = useRef<DatePicker>(null);
  return (
    <DatepickerWrapper>
      {/* @ts-ignore NOTE: need update react types without it */}
      <DatePicker
        {...props}
        ref={datePickerRef}
        locale={LOCALE[language]}
        selected={selected}
        required={inputProps?.required}
        onChange={date => {
          onChange(date!);
        }}
        customInput={
          <CustomInput
            {...inputProps}
            onClick={() => datePickerRef.current?.setOpen(true)}
            date={
              dateFormatter != null
                ? dateFormatter(selected!, language)
                : formatDateByLanguage(selected!, language)
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
            <HeaderButton onClick={decreaseMonth}>
              <Icon.ChevronLeftSmall color={color['main-black']} />
            </HeaderButton>
            <HeaderText>
              <span>{MONTHS[date.getMonth()]}</span>
              <span> {date.getFullYear()}</span>
            </HeaderText>
            <HeaderButton onClick={increaseMonth}>
              <Icon.ChevronRightSmall color={color['main-black']} />
            </HeaderButton>
          </HeaderWrapper>
        )}
      />
    </DatepickerWrapper>
  );
}

interface CustomInputProps extends DateInputProps {
  onClick: MouseEventHandler<HTMLInputElement>;
  date?: string;
}

export const CustomInput = forwardRef(
  ({ onClick, date, ...props }: CustomInputProps, ref: LegacyRef<HTMLDivElement>) => (
    <div ref={ref}>
      <DateInput {...props} onClick={onClick} value={date ?? ''} />
    </div>
  ),
);

export const DatepickerWrapper = styled.div<{ monthContainerPadding?: string }>`
  & .react-datepicker-wrapper {
    width: 100%;
  }
  & .react-datepicker-popper {
    z-index: 1000;
    margin-top: 10px;
    & .react-datepicker {
      background-color: ${color.white};
      border: none;
      border-radius: 8px;
      overflow: hidden;
      /* prettier-ignore */
      box-shadow: 0px 0px 1px 0px rgba(132, 132, 132, 0.31),
      0px 2px 5px 0px rgba(70, 70, 70, 0.2);

      //navigation button
      & .react-datepicker__navigation {
        display: none;
      }

      // calendar header
      & .react-datepicker__header {
        background-color: ${color.white};
        border-bottom: none;
        padding: 0;
      }
      & .react-datepicker__aria-live {
        display: none;
      }

      // container
      & .react-datepicker__month {
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
      }
      & .react-datepicker__month-container {
        padding: ${({ monthContainerPadding }) => monthContainerPadding ?? '20px 16px 20px 16px'};
      }

      & .react-datepicker__day-names {
        width: 242px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;
        margin: 0 0 3px 0;
      }

      & .react-datepicker__week {
        display: flex;
        gap: 3px;
        align-items: center;
        justify-content: center;
        height: 32px;
      }

      // days
      & .react-datepicker__day-name {
        display: flex;
        width: 32px;
        height: 30px;
        align-items: center;
        justify-content: center;
        color: ${color['grey-70']};

        /* B5 */
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        margin: 0;
        &:first-of-type {
          // sunday
          color: ${color['error-20']};
        }
        &:last-of-type {
          // saturday
          color: ${color['error-20']};
        }
      }

      & .react-datepicker__day {
        cursor: pointer;
        width: 32px;
        height: 32px;
        margin: 0;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${color['grey-70']};
        &:hover {
          background-color: ${color['grey-20']};
          border-radius: 6px;
        }
      }
      & .react-datepicker__day--keyboard-selected {
        background-color: ${color.white}; //essential to delete default blue background color from react-datepicker
      }
      & .react-datepicker__day--today {
        font-weight: 700;
        color: ${color['main-black']};
      }
      & .react-datepicker__day--weekend {
        color: ${color['error-20']};
      }
      & .react-datepicker__day--outside-month {
        color: ${color['grey-50']};
      }
      & .react-datepicker__day--selected {
        width: 32px;
        height: 32px;
        border-radius: 6px !important;
        background-color: ${color['main-black']} !important;
        color: ${color.white};
      }
      & .react-datepicker__day--disabled {
        cursor: default;
        color: ${color['grey-40']};
        &:hover {
          background-color: ${color.white};
        }
      }
    }

    // time
    & .react-datepicker-time__input {
      width: 100%;
      margin: 0;
    }
    & .react-datepicker-time__caption {
      display: none;
    }
    & .react-datepicker__input-time-container {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0 16px 20px 16px;
    }
  }
`;

// calendar header for showing in english whatever language is selected
export const HeaderWrapper = styled.span`
  width: 242px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  margin: 0 0 18px 0;
  color: ${color['grey-80']};
  line-height: 20px;
`;
export const HeaderText = styled.span`
  width: auto;
  display: flex;
  gap: 10px;
`;
export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;
