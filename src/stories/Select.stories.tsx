import { StoryFn } from '@storybook/react';
import { useState } from 'react';

import styled from '@emotion/styled';

import { Select, type BasicOptionItem } from '../components';
import Icon from '../components/Icon';
import { MultiSelect } from '../components/Select/MultiSelect';

export default {
  title: 'Components/Select',
  component: Select,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-14814&mode=design&t=8a3wutSi3o4LHHer-4',
    },
  },
};

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
  { label: 'Label6', value: '6' },
  { label: 'Label7', value: '7' },
  { label: 'Label8', value: '8' },
  { label: 'Label9', value: '9' },
  { label: 'Label10', value: '10' },
  { label: 'Label11', value: '11' },
  { label: 'Label12', value: '12' },
  { label: 'Label13', value: '13' },
];

export function Default() {
  const [defaultValue, setDefaultValue] = useState('');
  const [createValue, setCreateValue] = useState('');
  const [searchableValue, setSearchableValue] = useState('');
  const [withoutIconValue, setWithoutIcon] = useState('');
  const [selectItems, setSelectItems] = useState(BASIC);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectItemWithIcon, setSelectItemWithIcon] = useState('');

  return (
    <>
      <Select
        label="Default: 검색X / 생성X"
        width={400}
        selectedValue={defaultValue}
        onSelect={value => {
          setDefaultValue(value);
        }}
        options={BASIC}
      />

      <Select
        label="Searchable & Creatable: 검색O / 생성O"
        width={400}
        selectedValue={createValue}
        onSelect={value => {
          setCreateValue(value);
        }}
        options={selectItems}
        onCreate={v => {
          {
            setSelectItems(prev => {
              return [...prev, { label: v, value: v }] as BasicOptionItem[];
            });
          }
        }}
        searchable
      />
      <Select
        label="Searchable: 검색O / 생성X"
        width={400}
        searchable
        selectedValue={searchableValue}
        onSelect={value => {
          setSearchableValue(value);
        }}
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          { value: '7', label: '7' },
          { value: '8', label: '8' },
        ]}
      />
      <Select
        label="Searchable Without RightIcon: 검색O / 생성X"
        width={400}
        searchable
        showIcon={false}
        selectedValue={withoutIconValue}
        onSelect={value => {
          setWithoutIcon(value);
        }}
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          { value: '7', label: '7' },
          { value: '8', label: '8' },
        ]}
      />
      <Select
        label="너비가 넘치는 아이템"
        width={150}
        selectedValue={null}
        onSelect={() => {}}
        options={[{ label: '공백이없이라벨이긴예시', value: 'long' }, ...BASIC]}
      />
      <Select
        leftIcon={<Icon.Dot size={13} />}
        label="Left Icon 있는 input 창"
        width={150}
        selectedValue={selectItemWithIcon}
        onSelect={value => setSelectItemWithIcon(value)}
        options={[{ label: '공백이없이라벨이긴예시', value: 'long' }, ...BASIC]}
      />
      <MultiSelect
        label="Searchable Multi Select"
        description="Searchable and not searchable is available."
        selectedValues={selectedItems}
        onSelect={value => setSelectedItems(prev => [...prev, value])}
        onDeleteSingle={value => setSelectedItems(prev => prev.filter(v => v !== value))}
        onDeleteAll={() => setSelectedItems([])}
        options={[
          {
            label:
              '공백이없이라벨이긴예시djfldjsljflkdsjklfjkldsjfkldsjklfjdskljflkjdslfjldsjflkdjslfjlksdjlkf',
            value: 'long',
          },
          ...BASIC,
        ]}
        search={{
          searchable: true,
          placeholder: '캠페인 이름을 검색해주세요 (2자 이상)',
        }}
      />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px;
  text-align: center;
  line-height: normal;
  gap: 20px;
`;
