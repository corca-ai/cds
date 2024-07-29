import { Meta, StoryObj } from '@storybook/react/*';
import { TileField } from './TileField';
import { parseDateTime } from '@internationalized/date';
import { useState } from 'react';
import { I18nProvider, TimeValue } from 'react-aria-components';
import { Locale } from 'src/core/locales';

export default {
  component: TileField,
} as Meta<typeof TileField>;

type Story = StoryObj<typeof TileField>;

export const Default: Story = {
  args: {
    granularity: 'second',
  },
  argTypes: {
    granularity: {
      options: ['hour', 'minute', 'second'],
      type: {
        name: 'hour | minute | second' as 'string',
      },
    },
  },
};

export const LocaleTest = () => {
  const [time, setTime] = useState<TimeValue>(parseDateTime('2022-01-01T15:00:00'));
  return (
    <div>
      {[Locale.ko, Locale.en, Locale.vi].map(locale => (
        <I18nProvider key={locale} locale={locale}>
          <h2>{locale}</h2>
          <TileField value={time} onChange={value => setTime(value)} />
        </I18nProvider>
      ))}
    </div>
  );
};

export const GraunlarityTest = () => {
  const [time, setTime] = useState<TimeValue>(parseDateTime('2022-01-01T00:00:00'));
  const [time2, setTime2] = useState<TimeValue>(parseDateTime('2022-01-01T23:12:12'));

  return (
    <div>
      <h2>hour</h2>
      <TileField value={time} onChange={value => setTime(value)} granularity="hour" />
      <h2>minute</h2>
      <TileField value={time} onChange={value => setTime(value)} granularity="minute" />
      <h2>second</h2>
      <TileField value={time} onChange={value => setTime(value)} granularity="second" />
      <br />
      <label>result : {time.toString()}</label>
      <br />
      <h2>hour</h2>
      <TileField value={time2} onChange={value => setTime2(value)} granularity="hour" />
      <h2>minute</h2>
      <TileField value={time2} onChange={value => setTime2(value)} granularity="minute" />
      <h2>second</h2>
      <TileField value={time2} onChange={value => setTime2(value)} granularity="second" />
      <br />
      <label>result : {time2.toString()}</label>
    </div>
  );
};
