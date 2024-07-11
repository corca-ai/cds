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
      <DatePicker
        {...props}
        ref={datePickerRef}
        locale={language}
        selected={selected}
        required={inputProps?.required}
        onChange={date => {
          if (date === null) return;
          onChange(date);
        }}
        customInput={
          <CustomInput
            {...inputProps}
            onClick={() => datePickerRef.current?.setOpen(true)}
            date={
              dateFormatter != null
                ? dateFormatter(selected ?? new Date(), language)
                : formatDateByLanguage(selected ?? new Date(), language)
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
    </DatepickerWrapper>
  );
}
