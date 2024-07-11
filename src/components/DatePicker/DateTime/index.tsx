import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import { formatDateTimeByLanguage } from '../../../utils/date';
import Icon from '../../Icon';
import { color } from '../../styles';
import { MONTHS } from '../constant';
import { CustomTimeInput } from './CustomTimeInput';
import { DatePickerProps } from '../common/types';
import {
  CustomInput,
  DatepickerWrapper,
  HeaderButton,
  HeaderText,
  HeaderWrapper,
} from '../common/common';
export * from './CustomTimeInput';

export function DateTime({
  selected,
  onChange,
  language,
  inputProps,
  dateFormatter,
  ...props
}: DatePickerProps) {
  const [newDate, setNewDate] = useState<Date | null>(selected ?? new Date());
  const datePickerRef = useRef<DatePicker>(null);

  return (
    <DatepickerWrapper monthContainerPadding="20px 16px 18px 16px">
      <DatePicker
        {...props}
        ref={datePickerRef}
        locale={language}
        selected={newDate}
        onChange={date => setNewDate(date)}
        required={inputProps?.required}
        customInput={
          <CustomInput
            {...inputProps}
            onClick={() => datePickerRef.current?.setOpen(true)}
            date={
              dateFormatter
                ? dateFormatter(selected || new Date(), language)
                : formatDateTimeByLanguage(selected || new Date(), language)
            }
          />
        }
        showTimeInput
        customTimeInput={
          <CustomTimeInput
            setNewDate={(date: Date) => setNewDate(date)}
            newDate={newDate ?? new Date()}
            language={language}
            onConfirm={() => {
              if (newDate === null) return;
              // onConfirm Button is located here because of style customizing
              onChange(newDate);
              datePickerRef.current?.setOpen(false);
            }}
          />
        }
        timeCaption=""
        shouldCloseOnSelect={false}
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
    </DatepickerWrapper>
  );
}
