import { Meta, StoryObj } from '@storybook/react/*';
import { DateField } from './DateField';

export default {
  component: DateField,
} as Meta<typeof DateField>;

type Story = StoryObj<typeof DateField>;

export const Default: Story = {
  args: {
    granularity: 'second',
  },
};
