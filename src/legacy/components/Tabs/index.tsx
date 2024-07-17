import styled from '@emotion/styled';

import { B3 } from '../Text';
import { color } from '../styles';

const Container = styled.div`
  display: inline-block;
  overflow-x: auto;
`;

const Contents = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid ${color['grey-50']};
`;

const Item = styled.div`
  display: flex;
  border-radius: 4px 4px 0px 0px;
  padding: 11px 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SelectedTab = styled(Item)`
  border-bottom: 2px solid ${color['main-black']};
  margin-bottom: -2px;
`;

const NotSelectedTab = styled(Item)`
  &:hover {
    background-color: ${color['grey-10']};
  }
  cursor: pointer;
`;

interface TabItem {
  label: string;
  value: string;
}

export interface TabsProps {
  onChange: (v: string) => void;
  selectedTab: string;
  items: TabItem[];
  tabWidth?: number;
  tabFullWidth?: boolean;
}

export function Tabs({ items, onChange, selectedTab, tabWidth = 74, tabFullWidth }: TabsProps) {
  return (
    <Container style={{ width: '100%' }}>
      <Contents style={{ minWidth: '100%' }}>
        {items.map((tab, i) => {
          const selected = tab.value === selectedTab;
          const Component = selected ? SelectedTab : NotSelectedTab;
          const color = selected ? 'main-black' : 'grey-60';
          return (
            <Component
              onClick={() => {
                onChange(tab.value);
              }}
              key={i}
              aria-selected={selected ? 'true' : 'false'}
              style={{
                width: tabFullWidth ? `${100 / items.length}%` : tabWidth,
              }}
            >
              <B3 ellipsis={true} c={color}>
                {tab.label}
              </B3>
            </Component>
          );
        })}
      </Contents>
    </Container>
  );
}
