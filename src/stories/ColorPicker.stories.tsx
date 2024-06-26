import { StoryFn } from '@storybook/react';

import styled from '@emotion/styled';

import { useState } from 'react';
import { ColorPicker } from '../components';

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=8146-5295&mode=design&t=0N0xwK1u0rLH7slh-0',
    },
  },
};

export const Basic: StoryFn<typeof ColorPicker> = () => {
  const [color, setColor] = useState('#00a4ff');
  return <ColorPicker color={color} onChangeColor={setColor} />;
};

Basic.argTypes = {
  color: {
    name: 'color',
    control: { type: 'select' },
  },
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
