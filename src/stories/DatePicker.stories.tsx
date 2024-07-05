import { StoryFn } from '@storybook/react';
import { useState } from 'react';

import styled from '@emotion/styled';

import DatePicker from '../components/DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=850-5263&mode=dev',
    },
  },
};

export function SingleDate() {
  const [dateKo, setDateKo] = useState<Date | null>(null);
  const [dateEn, setDateEn] = useState<Date | null>(null);
  const [dateVi, setDateVi] = useState<Date | null>(null);
  const [dateErr, setDateErr] = useState<Date | null>(null);
  return (
    <>
      Korean
      <DatePicker.Date
        selected={dateKo}
        onChange={setDateKo}
        language={'ko'}
        inputProps={{ width: 400 }}
      />
      English
      <DatePicker.Date
        selected={dateEn}
        onChange={setDateEn}
        language={'en'}
        inputProps={{ width: 400 }}
      />
      Vietnamese
      <DatePicker.Date
        selected={dateEn}
        onChange={setDateVi}
        language={'vi'}
        inputProps={{ width: 400 }}
      />
      Disabled
      <DatePicker.Date
        selected={null}
        onChange={() => {
          console.log('disabled');
        }}
        language={'en'}
        inputProps={{ width: 400 }}
        disabled
      />
      Error (error will not disappear since it is just visual display not interactive demo.)
      <DatePicker.Date
        selected={dateErr}
        onChange={setDateErr}
        language={'en'}
        inputProps={{ error: 'Error', width: 400 }}
      />
    </>
  );
}

export function DateTime() {
  const [dateKo, setDateKo] = useState<Date | null>(null);
  const [dateEn, setDateEn] = useState<Date | null>(null);
  const [dateVi, setDateVi] = useState<Date | null>(null);
  const [dateErr, setDateErr] = useState<Date | null>(null);
  return (
    <>
      Korean
      <DatePicker.DateTime
        selected={dateKo}
        onChange={setDateKo}
        language={'ko'}
        inputProps={{ width: 400 }}
      />
      English
      <DatePicker.DateTime
        selected={dateEn}
        onChange={setDateEn}
        language={'en'}
        inputProps={{ width: 400 }}
      />
      Vietnamese
      <DatePicker.DateTime
        selected={dateEn}
        onChange={setDateVi}
        language={'vi'}
        inputProps={{ width: 400 }}
      />
      Disabled
      <DatePicker.DateTime
        selected={null}
        onChange={() => {
          console.log('disabled');
        }}
        language={'ko'}
        inputProps={{ width: 400 }}
        disabled
      />
      Error (error will not disappear since it is just visual display not interactive demo.)
      <DatePicker.DateTime
        selected={dateErr}
        onChange={setDateErr}
        language={'ko'}
        inputProps={{ error: 'Error', width: 400 }}
      />
    </>
  );
}

export function InputStyle() {
  const [singleDate, setSingleDate] = useState<Date | null>(null);
  const [dateTime, setDateTime] = useState<Date | null>(null);

  return (
    <Container>
      <DatePicker.Date
        selected={singleDate}
        onChange={setSingleDate}
        language={'ko'}
        inputProps={{
          width: 400,
          label: 'Single Date',
          required: true,
          description: '날짜만 입력할 수 있는 입력창 입니다.',
        }}
      />
      <DatePicker.DateTime
        selected={dateTime}
        onChange={setDateTime}
        language={'ko'}
        inputProps={{
          width: 400,
          label: 'Date Time',
          required: true,
          description: '날짜와 시간을 모두 입력할 수 있는 입력창 입니다.',
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  justify-content: flex-start;
  padding-top: 100px;
  gap: 20px;
`;
