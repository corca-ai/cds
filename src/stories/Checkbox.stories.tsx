import styled from '@emotion/styled';

import { Checkbox } from '../components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=918-6544&mode=design&t=90XgbxcTRUn2ydEs-4',
    },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: false,
  disabled: false,
  label: 'Label',
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
