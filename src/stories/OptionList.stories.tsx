import { StoryFn } from '@storybook/react';

import styled from '@emotion/styled';

import { type BasicOptionItem, OptionList, SectionOptionItem } from '../components';
import Icon from '../components/Icon';

export default {
  title: 'Components/OptionList',
  component: OptionList,
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
      // TODO: 나경
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-14814&mode=design&t=8a3wutSi3o4LHHer-4',
    },
  },
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px;
  text-align: center;
  line-height: normal;
  gap: 20px;
`;

const BASIC: BasicOptionItem[] = [
  { label: 'Label1 with Icon', value: '1', icon: Icon.QuestionCircle },
  {
    label: 'Label2 with Icon and disabled',
    value: '2',
    disabled: true,
    icon: Icon.Shop,
  },
  { label: 'Label3 with just disabled', value: '3', disabled: true },
  { label: 'Label4', value: '4' },
  { label: 'Label5', value: '5' },
];

const SECTION_EXAMPLE: SectionOptionItem[] = [
  {
    sectionTitle: 'Section 1',
    sectionItems: BASIC.slice(0, 2),
  },
  {
    sectionTitle: 'Section 2',
    sectionItems: BASIC.slice(2),
  },
];

const Template: StoryFn<typeof OptionList> = args => {
  return <OptionList {...args} />;
};

export const BasicControllable = Template.bind({});
BasicControllable.args = {
  value: '',
  onChange: () => {},
  width: 400,
  option: { type: 'basic', items: BASIC },
};

export function Basic() {
  return (
    <OptionList
      width={400}
      option={{ type: 'basic', items: BASIC }}
      onChange={() => {}}
      value={''}
    />
  );
}

export function Section() {
  return (
    <OptionList
      width={400}
      option={{ type: 'section', items: SECTION_EXAMPLE }}
      onChange={value => {}}
      value={''}
    />
  );
}
