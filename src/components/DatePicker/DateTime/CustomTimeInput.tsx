import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { Button } from '../../Button';
import { B3 } from '../../Text';
import { color, typography } from '../../styles';
import { AMPM_FORMAT } from '../constant';
import { SupportLocale } from 'src/utils';

export interface Time {
  hh: string;
  mm: string;
  ss: string;
  amPm: AMPM;
}

export enum AMPM {
  AM = 'AM',
  PM = 'PM',
}

export interface CustomTimeInputProps {
  newDate: Date;
  language: SupportLocale;
  onConfirm: () => void;
  setNewDate: (date: Date) => void;
}

export const CustomTimeInput = ({
  newDate,
  language,
  onConfirm,
  setNewDate,
}: CustomTimeInputProps) => {
  const getFormattedHour = (hour: number): string => {
    return (hour > 12 ? hour - 12 : hour).toString().padStart(2, '0');
  };

  const [inputValue, setInputValue] = useState<Time>({
    hh: getFormattedHour(newDate.getHours()),
    mm: newDate.getMinutes().toString().padStart(2, '0'),
    ss: newDate.getSeconds().toString().padStart(2, '0'),
    amPm: newDate.getHours() < 12 ? AMPM.AM : AMPM.PM,
  });

  const onChangeDate = (time: Time) => {
    const dateData = new Date(newDate);
    dateData.setHours(
      Number(time.hh) + (Number(time.hh) >= 12 || time.amPm === AMPM.AM ? 0 : 12),
      Number(time.mm) || 0,
      Number(time.ss) || 0,
    );
    setNewDate(dateData);
  };

  useEffect(() => {
    if (!inputValue.hh) {
      return;
    }
    onChangeDate(inputValue);

    const formatHourTimer = setTimeout(() => {
      const NUMERIC_HOUR = Number(inputValue.hh);
      const timeData = {
        hh: inputValue.hh,
      };

      // format hour to 12 hour format only when hour is greater than 12
      if (NUMERIC_HOUR > 12) {
        Object.assign(timeData, {
          hh: getFormattedHour(NUMERIC_HOUR),
          amPm: AMPM.PM,
        });
      }

      setInputValue(prev => ({ ...prev, ...timeData }));
    }, 500);

    return () => clearTimeout(formatHourTimer);
  }, [inputValue.hh]);

  return (
    <DefaultContainer>
      <TimeContainer>
        <AmPmButton
          onClick={() => {
            const time = {
              ...inputValue,
              amPm: inputValue.amPm === AMPM.AM ? AMPM.PM : AMPM.AM,
            };
            setInputValue(time);
            onChangeDate(time);
          }}
        >
          <B3> {AMPM_FORMAT[language][inputValue.amPm]}</B3>
        </AmPmButton>
        <TimeInputWrapper>
          <TimeInput
            type={'number'}
            max={23}
            min={0}
            onChange={e => {
              if (Number(e.target['value']) > 23) {
                return;
              }
              const time = { ...inputValue, hh: e.target['value'] };
              setInputValue(time);
              onChangeDate(time);
            }}
            value={inputValue.hh}
          />
          {' : '}
          <TimeInput
            type={'number'}
            max={59}
            min={0}
            onChange={e => {
              if (Number(e.target['value']) > 59 || Number(e.target['value']) < 0) {
                return;
              }
              const time = { ...inputValue, mm: e.target['value'] };
              setInputValue(time);
              onChangeDate(time);
            }}
            value={inputValue.mm}
          />
          {' : '}
          <TimeInput
            type={'number'}
            max={59}
            min={0}
            onChange={e => {
              if (Number(e.target['value']) > 59 || Number(e.target['value']) < 0) {
                return;
              }
              const time = { ...inputValue, ss: e.target['value'] };
              setInputValue(time);
              onChangeDate(time);
            }}
            value={inputValue.ss}
          />
        </TimeInputWrapper>
      </TimeContainer>
      <Button
        disabled={!inputValue.hh || !inputValue.mm || !inputValue.ss}
        onClick={() => onConfirm()}
        variant="filled"
        color={color['main-black']}
        size={'small'}
      >
        {language === 'ko' ? '확인' : 'Confirm'}
      </Button>
    </DefaultContainer>
  );
};

// Lower Part in Container: time input and confirm button - confirm button is located here because of style customizing
export const DefaultContainer = styled.div`
  width: 242px;
  height: 104px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: space-around;
  border-top: 1px solid ${color['grey-30']};
`;

export const TimeContainer = styled.div`
  line-height: 15.51px;
  height: 34px;
  padding: 6px;
  border: 1px solid ${color['grey-50']};
  border-radius: 8px;
  font-weight: 400;
  font-size: ${typography.size.xs}px;
  color: ${color['main-black']};
  background-color: ${color['white']};
  display: flex;
  align-items: center;
  margin-top: 18px;
`;

const TimeInputWrapper = styled.div`
  width: 60px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TimeInput = styled.input`
  width: 20px;
  height: 16px;
  padding: 0 2px 0 2px;
  border: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const AmPmButton = styled.button`
  width: 37px;
  height: 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${color['white']};
  margin-right: 10px;
  &:hover {
    background-color: ${color['grey-20']};
  }
`;
