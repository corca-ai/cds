import { Meta, StoryObj } from '@storybook/react';
import { Calander } from './Calander';
import { Grid, GridItem } from 'styled-system/jsx';
import { Locale } from 'src/core/locales';
import { I18nProvider } from 'react-aria-components';

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
