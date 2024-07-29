import { Meta, StoryObj } from '@storybook/react';
import { Calander } from './Calander';
import { Grid, GridItem } from 'styled-system/jsx';
import { Locale } from 'src/core/locales';
import { I18nProvider } from 'react-aria-components';
import { getLocalTimeZone, today, DateFormatter, CalendarDate } from '@internationalized/date';
import * as sbtest from '@storybook/test';
export default {
  component: Calander,
} as Meta<typeof Calander>;

type Story = StoryObj<typeof Calander>;

export const Default: Story = {};

/**
 * 다국어 테스트
 */
export const LocaleTest: Story = {
  render: () => (
    <>
      <Grid columns={3} gap={16}>
        {[Locale.ko, Locale.en, Locale.vi].map(locale => (
          <GridItem key={locale} w="274px">
            <I18nProvider locale={locale}>
              <h2>{locale}</h2>
              <Calander />
            </I18nProvider>
          </GridItem>
        ))}
        {[Locale.ko_KR, Locale.en_US, Locale.vi_VN].map(locale => (
          <GridItem key={locale} w="274px">
            <I18nProvider locale={locale}>
              <h2>{locale}</h2>
              <Calander />
            </I18nProvider>
          </GridItem>
        ))}
        {[Locale.af, Locale.ar, Locale.fr].map(locale => (
          <GridItem key={locale} w="274px">
            <I18nProvider locale={locale}>
              <h2>{locale}</h2>
              <Calander />
            </I18nProvider>
          </GridItem>
        ))}
      </Grid>
    </>
  ),
};

export const AllDateClickTest: Story = {
  play: async ({ canvas }) => {
    const tds = canvas.getAllByRole('gridcell');

    for (const td of tds) {
      const datebutton = sbtest.within(td).getByRole('button');
      await sbtest.userEvent.click(datebutton);
      if (datebutton.ariaDisabled) {
        sbtest.expect(datebutton).not.toHaveAttribute('data-selected');
        // 이전 달과 다음 달의 날짜는 data-select 속성을 가지고 있으면 안됩니다.
      } else {
        // dateButton는 data-select="true" 속성을 가지고 있어야 합니다.
        sbtest.expect(datebutton).toHaveAttribute('data-selected', 'true');
      }
      await sbtest.userEvent.unhover(datebutton);
    }
  },
  args: {
    defaultValue: new CalendarDate(2024, 7, 4),
  },
};

export const KeyboradTest: Story = {
  play: async ({ canvas }) => {
    const gridcell = canvas.getByRole('gridcell', { name: '28' });
    const button = gridcell.querySelector('[role="button"]');

    if (button) await sbtest.userEvent.click(button);
    if (button) await sbtest.userEvent.unhover(button);
    await sbtest.userEvent.keyboard('{ArrowLeft}');
    await sbtest.userEvent.keyboard('{Space}');
    await sbtest.userEvent.keyboard('{ArrowDown}');
    await sbtest.userEvent.keyboard('{Enter}');
  },
  args: {
    defaultValue: new CalendarDate(2024, 7, 30),
  },
};

export const ChangeMonthTest: Story = {
  play: async ({ canvas, canvasElement }) => {
    const timezone = getLocalTimeZone();
    let todayDate = today(timezone);
    const formatter = new DateFormatter(Locale.ko, { year: 'numeric', month: 'long' });

    const nextButton = canvas.getAllByRole('button', { name: '다음' })[0];

    const heading = canvasElement.querySelector('h2');
    sbtest.expect(heading?.textContent).toBe(formatter.format(todayDate.toDate(timezone)));
    await sbtest.userEvent.click(nextButton);
    todayDate = todayDate.add({ months: 1 });
    sbtest.expect(heading?.textContent).toBe(formatter.format(todayDate.toDate(timezone)));
    await sbtest.userEvent.click(nextButton);
    todayDate = todayDate.add({ months: 1 });
    sbtest.expect(heading?.textContent).toBe(formatter.format(todayDate.toDate(timezone)));

    const prevButton = canvas.getAllByRole('button', { name: '이전' })[0];
    sbtest.expect(heading?.textContent).toBe(formatter.format(todayDate.toDate(timezone)));
    await sbtest.userEvent.click(prevButton);
    todayDate = todayDate.subtract({ months: 1 });
    sbtest.expect(heading?.textContent).toBe(formatter.format(todayDate.toDate(timezone)));
    await sbtest.userEvent.click(prevButton);
    todayDate = todayDate.subtract({ months: 1 });
    sbtest.expect(heading?.textContent).toBe(formatter.format(todayDate.toDate(timezone)));
  },
};
