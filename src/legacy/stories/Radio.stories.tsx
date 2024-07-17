import { useState } from 'react';

import styled from '@emotion/styled';

import { B2, H2, Radio } from '../components';
import { type RadioGroupOption } from '../components/Radio/Group';
import { type RadioItemProps } from '../components/Radio/RadioItem';
import type { Meta, StoryFn } from '@storybook/react';

const MOCK_ITEMS: Array<{ title: string; items: Array<RadioItemProps<string>> }> = [
  {
    title: 'Unchecked with Lable',
    items: [
      {
        label: 'Label',
        value: 'label-unselected-disable',
        disabled: true,
        onSelect: () => {},
        selected: false,
      },
    ],
  },
  {
    title: 'Checked with Lable',
    items: [
      {
        label: 'Label',
        value: 'label-selected-able',
        disabled: false,
        onSelect: () => {},
        selected: true,
      },
      {
        label: 'Label',
        value: 'label-selected-disable',
        disabled: true,
        onSelect: () => {},
        selected: true,
      },
    ],
  },
  {
    title: 'Unchecked',
    items: [
      {
        value: 'label-unselected-able',
        disabled: false,
        onSelect: () => {},
        selected: false,
      },
      {
        value: 'label-unselected-disable',
        disabled: true,
        onSelect: () => {},
        selected: false,
      },
    ],
  },
  {
    title: 'Checked',
    items: [
      {
        value: 'label-selected-able',
        disabled: false,
        onSelect: () => {},
        selected: true,
      },
      {
        value: 'label-selected-disable',
        disabled: true,
        onSelect: () => {},
        selected: true,
      },
    ],
  },
  {
    title: 'Tooltip',
    items: [
      {
        value: 'label-selected-able-Tooltip',
        disabled: false,
        onSelect: () => {},
        selected: true,
        tooltip: '예시 툴팁입니다.',
      },
      {
        value: 'label-selected-disable-Tooltip',
        disabled: true,
        onSelect: () => {},
        selected: true,
        tooltip: '예시 툴팁입니다.',
      },
    ],
  },
];

const MOCK_GROUP: Array<RadioGroupOption<string>> = [
  {
    label: 'LabelA',
    value: 'A',
  },
  {
    label: 'LabelB',
    value: 'B',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;
const ItemWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default {
  title: 'Components/Radio',
  component: Radio.Item,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=859-2540&mode=design&t=bhY2SksBs7AqptYx-0',
    },
  },
} as Meta<typeof Radio.Item>;

const Template: StoryFn<typeof Radio.Item> = args => <Radio.Item {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'default',
  value: '',
  selected: true,
  disabled: false,
};

export function RadioItem() {
  return (
    <Container>
      {MOCK_ITEMS.map(({ title, items }, index) => (
        <ItemWrapper key={index}>
          <B2>{title}</B2>
          <Radio.Item {...items[0]} />
          <Radio.Item {...items[1]} />
        </ItemWrapper>
      ))}
    </Container>
  );
}

export const RadioGroup: StoryFn<typeof Radio.Group> = () => {
  const [rowSelected, setRowSelected] = useState('');
  const [columnSelected, setColumnSelected] = useState('');

  return (
    <Container>
      <H2>CDS 피그마 X, 개발단 컴포넌트</H2>
      <H2>Row Group</H2>
      <Radio.Group
        gap={20}
        selectedValue={rowSelected}
        onSelect={(v: string) => {
          setRowSelected(v);
        }}
        options={MOCK_GROUP}
      />
      <H2>Column Group</H2>
      <Radio.Group
        gap={12}
        direction="column"
        selectedValue={columnSelected}
        onSelect={(v: string) => {
          setColumnSelected(v);
        }}
        options={MOCK_GROUP.map(item => ({
          ...item,
          value: `${item.value}-column`,
        }))}
      />
    </Container>
  );
};

RadioGroup.bind({});
