import { StoryFn } from '@storybook/react';
import React from 'react';

import styled from '@emotion/styled';

import { B1, Badge, Checkbox, Radio, Select, Switch } from '../components';
import Icon from '../components/Icon';
import Table from '../components/Table';
import { type TdSizeType } from '../components/Table/Td';
import { FIXED_TH_WIDTH, type ThSizeType } from '../components/Table/Th';

export default {
  title: 'Components/Table',
  component: Table,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-15137&mode=design&t=DYlDq6LjK89PKCPh-4',
    },
  },
};

const MOCK_DATA = [
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1: 'Label',
    Label2: 'Label',
    Label3: 'Label',
    Label4: 'Label',
    Label5: 'Label',
    Label6: 'Label',
    Label7: 'Label',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1: 'Label',
    Label2: 'Label',
    Label3: 'Label',
    Label4: 'Label',
    Label5: 'Label',
    Label6: 'Label',
    Label7: 'Label',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1: 'Label',
    Label2: 'Label',
    Label3: 'Label',
    Label4: 'Label',
    Label5: 'Label',
    Label6: 'Label',
    Label7: 'Label',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1: 'Label',
    Label2: 'Label',
    Label3: 'Label',
    Label4: 'Label',
    Label5: 'Label',
    Label6: 'Label',
    Label7: 'Label',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1: 'Label',
    Label2: 'Label',
    Label3: 'Label',
    Label4: 'Label',
    Label5: 'Label',
    Label6: 'Label',
    Label7: 'Label',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1: 'Label',
    Label2: 'Label',
    Label3: 'Label',
    Label4: 'Label',
    Label5: 'Label',
    Label6: 'Label',
    Label7: 'Label',
    Badge: 'Label',
  },
];

const MOCK_WITH_ELLIPSIS = [
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1:
      '가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사',
    Label2: '123456',
    Label3: '커버낫 반팔티',
    Label4: '₩ 2,530,000',
    Label5: '2023년 10월 10일 (금)',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1:
      '가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사',
    Label2: '123456',
    Label3: '커버낫 반팔티',
    Label4: '₩ 2,530,000',
    Label5: '2023년 10월 10일 (금)',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1:
      '가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사',
    Label2: '123456',
    Label3: '커버낫 반팔티',
    Label4: '₩ 2,530,000',
    Label5: '2023년 10월 10일 (금)',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1:
      '가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사',
    Label2: '123456',
    Label3: '커버낫 반팔티',
    Label4: '₩ 2,530,000',
    Label5: '2023년 10월 10일 (금)',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1:
      '가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사',
    Label2: '123456',
    Label3: '커버낫 반팔티',
    Label4: '₩ 2,530,000',
    Label5: '2023년 10월 10일 (금)',
    Badge: 'Label',
  },
  {
    img: 'https://picsum.photos/seed/picsum/50/50',
    Label1:
      '가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사',
    Label2: '123456',
    Label3: '커버낫 반팔티',
    Label4: '₩ 2,530,000',
    Label5: '2023년 10월 10일 (금)',
    Badge: 'Label',
  },
];

export const Basic = () => {
  const size = 'm';

  return (
    <Table.Container>
      <Table.Thead>
        <Table.Tr>
          <Table.Th.Default width={FIXED_TH_WIDTH.IMAGE[size]} text="" size={size} />
          <Table.Th.Default width="100px" text="Label" size={size} />
          <Table.Th.Default width="100px" text="Label" size={size} />
          <Table.Th.Default width="100px" text="Label" size={size} />
          <Table.Th.Default width="100px" text="Label" size={size} />
          <Table.Th.Default width="100px" text="Label" size={size} />
          <Table.Th.Default width="100px" text="Badge" size={size} />
          <Table.Th.Default width="120px" text="Select" size={size} />
          <Table.Th.Default width="50px" text="Switch" size={size} />
          <Table.Th.Default width="50px" text=" " size={size} />
          <Table.Th.Default width="50px" text=" " size={size} />
          <Table.Th.Checkbox
            checkboxType={{
              selected: true,
              onSelect: () => {},
            }}
            size={size}
          />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {MOCK_DATA.map((d, index) => (
          <Table.Tr cursorPointer key={index.toString() + 'Items'} onClick={() => {}}>
            <Table.Td.Img src={d.img} size={size} />
            <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
            <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
            <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
            <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
            <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
            <Table.Td.Badge size={size}>
              <Badge dotted variant="green" label={d.Label1} />
            </Table.Td.Badge>
            <Table.Td.Select size={size}>
              <Select
                selectedValue="1"
                onSelect={() => {}}
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
              />
            </Table.Td.Select>
            <Table.Td.Switch size={size}>
              <Switch checked onChange={() => {}} />
            </Table.Td.Switch>
            <Table.Td.Radio size={size}>
              <Radio.Item value={index} selected onSelect={() => {}} />
            </Table.Td.Radio>
            <Table.Td.Kebob size={size}>
              <Icon.DotsHori />
            </Table.Td.Kebob>
            <Table.Td.Checkbox size={size}>
              <Checkbox selected onSelect={() => {}} />
            </Table.Td.Checkbox>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table.Container>
  );
};

export const ThWithIcon = () => {
  const thSizeList: ThSizeType[] = ['l', 'm', 's'];

  return (
    <Wrapper>
      {thSizeList.map(size => (
        <Contents key={size}>
          <B1>Th Size - {size.toLocaleUpperCase()}</B1>
          <Table.Container>
            <Table.Thead>
              <Table.Tr>
                <Table.Th.Default width={FIXED_TH_WIDTH.IMAGE[size]} text="" size={size} />
                <Table.Th.Default width="100px" text="Label" size={size} icon={<Icon.Sort />} />
                <Table.Th.Default
                  width="100px"
                  text="Label"
                  size={size}
                  icon={<Icon.SortAscending />}
                />
                <Table.Th.Default
                  width="100px"
                  text="Label"
                  size={size}
                  icon={<Icon.SortDescending />}
                />
                <Table.Th.Default
                  width="100px"
                  text="Label"
                  size={size}
                  icon={<Icon.QuestionCircle />}
                />
                <Table.Th.Default width="100px" text="Label" size={size} />
                <Table.Th.Default width="100px" text="Badge" size={size} />
                <Table.Th.Default width="120px" text="Select" size={size} />
                <Table.Th.Default width="50px" text="Switch" size={size} />
                <Table.Th.Default width="50px" text=" " size={size} />
                <Table.Th.Default width="50px" text=" " size={size} />
                <Table.Th.Checkbox
                  checkboxType={{
                    selected: true,
                    onSelect: () => {},
                  }}
                  size={size}
                />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {MOCK_DATA.map((d, index) => (
                <Table.Tr cursorPointer key={index.toString() + 'Items'} onClick={() => {}}>
                  <Table.Td.Img src={d.img} size={size} />
                  <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Text size={size}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Badge size={size}>
                    <Badge dotted variant="green" label={d.Label1} />
                  </Table.Td.Badge>
                  <Table.Td.Select size={size}>
                    <Select
                      selectedValue="1"
                      onSelect={() => {}}
                      options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                      ]}
                    />
                  </Table.Td.Select>
                  <Table.Td.Switch size={size}>
                    <Switch checked onChange={() => {}} />
                  </Table.Td.Switch>
                  <Table.Td.Radio size={size}>
                    <Radio.Item value={index} selected onSelect={() => {}} />
                  </Table.Td.Radio>
                  <Table.Td.Kebob size={size}>
                    <Icon.DotsHori />
                  </Table.Td.Kebob>
                  <Table.Td.Checkbox size={size}>
                    <Checkbox selected onSelect={() => {}} />
                  </Table.Td.Checkbox>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table.Container>
        </Contents>
      ))}
    </Wrapper>
  );
};

export function Size() {
  const sizeList: Array<{
    th: ThSizeType;
    td: TdSizeType;
  }> = [
    {
      th: 'l',
      td: 'l',
    },
    {
      th: 'm',
      td: 'm',
    },
    {
      th: 's',
      td: 's',
    },
    {
      th: 's',
      td: 'xs',
    },
  ];

  return (
    <Wrapper>
      {sizeList.map(({ th, td }, index) => (
        <Contents key={index}>
          <B1>
            Head({th.toLocaleUpperCase()}) & Td(
            {td.toLocaleUpperCase()})
          </B1>
          <Table.Container>
            <Table.Thead>
              <Table.Tr>
                <Table.Th.Default width={FIXED_TH_WIDTH.IMAGE[th]} text="" size={th} />
                <Table.Th.Default width="100px" text="Label" size={th} />
                <Table.Th.Default width="100px" text="Label" size={th} />
                <Table.Th.Default width="100px" text="Label" size={th} />
                <Table.Th.Default width="100px" text="Label" size={th} />
                <Table.Th.Default width="100px" text="Label" size={th} />
                <Table.Th.Default width="100px" text="Badge" size={th} />
                <Table.Th.Default width="50px" text="Switch" size={th} />
                <Table.Th.Default width="50px" text=" " size={th} />
                <Table.Th.Default width="50px" text=" " size={th} />
                <Table.Th.Checkbox
                  checkboxType={{
                    selected: true,
                    onSelect: () => {},
                  }}
                  size={th}
                />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {MOCK_DATA.map((d, index) => (
                <Table.Tr cursorPointer key={index.toString() + 'Items'} onClick={() => {}}>
                  <Table.Td.Img src={d.img} size={td} />
                  <Table.Td.Text size={td}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Text size={td}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Text size={td}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Text size={td}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Text size={td}>{d.Label1}</Table.Td.Text>
                  <Table.Td.Badge size={td}>
                    <Badge dotted variant="green" label={d.Label1} />
                  </Table.Td.Badge>
                  <Table.Td.Switch size={td}>
                    <Switch checked onChange={() => {}} />
                  </Table.Td.Switch>
                  <Table.Td.Radio size={td}>
                    <Radio.Item value={index} selected onSelect={() => {}} />
                  </Table.Td.Radio>
                  <Table.Td.Kebob size={td}>
                    <Icon.DotsHori />
                  </Table.Td.Kebob>
                  <Table.Td.Checkbox size={td}>
                    <Checkbox selected onSelect={() => {}} />
                  </Table.Td.Checkbox>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table.Container>
        </Contents>
      ))}
    </Wrapper>
  );
}

export function WithEllipsis() {
  const thSize = 'm';
  const [checkedCheckboxList, setCheckedCheckboxList] = React.useState<number[]>([]);

  return (
    <Table.Container>
      <Table.Thead>
        <Table.Tr>
          <Table.Th.Default width={FIXED_TH_WIDTH.IMAGE[thSize]} text=" " size={thSize} />
          <Table.Th.Default width="100px" text="Label" size={thSize} />
          <Table.Th.Default width="100px" text="Label" size={thSize} />
          <Table.Th.Default width="100px" text="Label" size={thSize} />
          <Table.Th.Default width="100px" text="Label" size={thSize} />
          <Table.Th.Default width="100px" text="Label" size={thSize} />
          <Table.Th.Default width="100px" text="Badge" size={thSize} />
          <Table.Th.Default width="120px" text="Select" size={thSize} />
          <Table.Th.Default width="50px" text="Switch" size={thSize} />
          <Table.Th.Default width="50px" text=" " size={thSize} />
          <Table.Th.Default width="50px" text=" " size={thSize} />
          <Table.Th.Checkbox
            checkboxType={{
              selected: checkedCheckboxList.length === MOCK_DATA.length,
              onSelect: () => {
                if (checkedCheckboxList.length === MOCK_DATA.length) {
                  setCheckedCheckboxList([]);
                } else {
                  setCheckedCheckboxList(MOCK_DATA.map((_, i) => i));
                }
              },
            }}
            size={thSize}
          />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {MOCK_WITH_ELLIPSIS.map((d, index) => (
          <Table.Tr
            cursorPointer
            key={index.toString() + 'Items'}
            onClick={() => {
              alert(`clicked - ${index} st row`);
            }}
          >
            <Table.Td.Img src={d.img} size={thSize} />
            <Table.Td.Text ellipsis width={300} size={thSize}>
              {d.Label1}
            </Table.Td.Text>
            <Table.Td.Text size={thSize}>{d.Label2}</Table.Td.Text>
            <Table.Td.Text size={thSize}>{d.Label3}</Table.Td.Text>
            <Table.Td.Text size={thSize}>{d.Label4}</Table.Td.Text>
            <Table.Td.Text size={thSize}>{d.Label5}</Table.Td.Text>
            <Table.Td.Badge size={thSize}>
              <Badge dotted variant="green" label={d.Badge} />
            </Table.Td.Badge>
            <Table.Td.Select size={thSize}>
              <Select
                selectedValue="1"
                onSelect={() => {}}
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
              />
            </Table.Td.Select>
            <Table.Td.Switch size={thSize}>
              <Switch checked onChange={() => {}} />
            </Table.Td.Switch>
            <Table.Td.Radio size={thSize}>
              <Radio.Item value={index} selected onSelect={() => {}} />
            </Table.Td.Radio>
            <Table.Td.Kebob size={thSize}>
              <Icon.DotsHori />
            </Table.Td.Kebob>
            <Table.Td.Checkbox size={thSize}>
              <Checkbox
                selected={checkedCheckboxList.includes(index)}
                onSelect={() => {
                  if (checkedCheckboxList.includes(index)) {
                    setCheckedCheckboxList(checkedCheckboxList.filter(i => i !== index));
                  } else {
                    setCheckedCheckboxList([...checkedCheckboxList, index]);
                  }
                }}
              />
            </Table.Td.Checkbox>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table.Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1278px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 30px 0;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
