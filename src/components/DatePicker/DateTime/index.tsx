import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import { formatDateTimeByLanguage } from '../../../utils/date';
import Icon from '../../Icon';
import { color } from '../../styles';
import {
  CustomInput,
  DatePickerProps,
  DatepickerWrapper,
  HeaderButton,
  HeaderText,
  HeaderWrapper,
} from '../SingleDate';
import { LOCALE, MONTHS } from '../constant';
import { CustomTimeInput } from './CustomTimeInput';

export function DateTime({
  selected,
  onChange,
  language,
  inputProps,
  dateFormatter,
  ...props
}: DatePickerProps) {
  const [newDate, setNewDate] = useState<Date | null>(selected || new Date());
  const datePickerRef = useRef<DatePicker>(null);

  return (
    <DatepickerWrapper monthContainerPadding="20px 16px 18px 16px">
      {/* @ts-ignore NOTE: need update react types without it*/}
      <DatePicker
        {...props}
        ref={datePickerRef}
        locale={LOCALE[language]}
        selected={newDate}
        onChange={date => setNewDate(date)}
        required={inputProps?.required}
        customInput={
          <CustomInput
            {...inputProps}
            onClick={() => datePickerRef.current?.setOpen(true)}
            date={
              dateFormatter
                ? dateFormatter(selected!, language)
                : formatDateTimeByLanguage(selected!, language)
            }
          />
        }
        showTimeInput
        customTimeInput={
          <CustomTimeInput
            setNewDate={(date: Date) => setNewDate(date)}
            newDate={newDate!}
            language={language}
            onConfirm={() => {
              // onConfirm Button is located here because of style customizing
              onChange(newDate!);
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
