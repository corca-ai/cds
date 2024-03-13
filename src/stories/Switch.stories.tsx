import { useState } from 'react';

import styled from '@emotion/styled';

import { Switch } from '../components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Switch',
  component: Switch,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-15115&mode=design&t=bhY2SksBs7AqptYx-0',
    },
  },
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = args => <Switch {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  checked: true,
};

export function Active() {
  const [active, setActive1] = useState(false);
  const [disabled1, setdDisabled1] = useState(true);
  const [disabled2, setdDisabled2] = useState(false);

  return (
    <SwitchContainer>
      <SwitchWrapper>
        <Switch checked={active} onChange={setActive1} />
      </SwitchWrapper>

      <SwitchWrapper>
        <Switch checked={disabled1} disabled onChange={setdDisabled1} />
        <Switch checked={disabled2} disabled onChange={setdDisabled2} />
      </SwitchWrapper>
    </SwitchContainer>
  );
}

const Container = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SwitchWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
