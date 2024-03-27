import React from 'react';

import styled from '@emotion/styled';

import { Tabs } from '../components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=933-7028&mode=design&t=ML3YPcDZJzLhfFhw-0',
    },
    docs: {
      description: {
        component: 'Tab item의 width는 74px로, 해당 width보다 글자가 길어지면 ...으로 표시됩니다.',
      },
    },
  },
} as Meta<typeof Tabs>;

export function Default() {
  const [selected, setSelected] = React.useState('1');

  return (
    <Tabs
      items={[
        {
          label: 'Label 1',
          value: '1',
        },
        {
          label: 'Label 2',
          value: '2',
        },
        {
          label: 'Very long Label',
          value: '3',
        },
      ]}
      selectedTab={selected}
      onChange={value => {
        setSelected(value);
      }}
    />
  );
}

export function Scroll() {
  const [selected, setSelected] = React.useState('1');

  return (
    <Tabs
      items={[
        {
          label: 'Label 1',
          value: '1',
        },
        {
          label: 'Label 2',
          value: '2',
        },
        {
          label: 'Label 3',
          value: '3',
        },
        {
          label: 'Label 4',
          value: '4',
        },
        {
          label: 'Label 5',
          value: '5',
        },
        {
          label: 'Label 6',
          value: '6',
        },
        {
          label: 'Label 7',
          value: '7',
        },
        {
          label: 'Label 8',
          value: '8',
        },
        {
          label: 'Label 9',
          value: '9',
        },
      ]}
      selectedTab={selected}
      onChange={value => {
        setSelected(value);
      }}
    />
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
