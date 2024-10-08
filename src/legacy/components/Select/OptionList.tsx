import { Fragment, useEffect, useRef, type ReactElement, type ReactNode } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { type IconProps } from '../Icon/type';
import { B3, B4 } from '../Text';
import { color } from '../styles';

export interface BasicOptionItem<T = string | number> {
  label: string;
  value: T;
  icon?: (props: IconProps) => ReactElement;
  disabled?: boolean;
}

export interface SectionOptionItem<T = string | number> {
  sectionTitle: ReactNode;
  sectionItems: Array<BasicOptionItem<T>>;
}

interface BasicOptionList<T> {
  type: 'basic';
  items: Array<BasicOptionItem<T>>;
}

interface SectionOptionList<T> {
  type: 'section';
  items: Array<SectionOptionItem<T>>;
}

interface OptionListProps<T = string | number> {
  width?: number;
  onChange: (value: T) => void;
  option: BasicOptionList<T> | SectionOptionList<T>;
  value: T;
  maxDropdownItemsToShow?: number;
  focusedItemIdx?: number;
}

const LIST_ITEM_HEIGHT = 36;

const MINUS_ICON_CLASS_NAME = 'minus-icon';

function OptionItems<T>({
  value,
  items,
  onChange,
  focusedItemIdx,
}: {
  value: T;
  items: Array<BasicOptionItem<T>>;
  onChange: (value: T) => void;
  focusedItemIdx: number;
}) {
  return (
    <>
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <ItemList key={i} role="option">
            <ItemButton
              focused={focusedItemIdx === i}
              disabled={item.disabled}
              aria-selected={value === item.value}
              selected={value === item.value}
              onClick={() => {
                if (!item.disabled) {
                  onChange(item.value);
                }
              }}
            >
              {Icon != null && (
                <Icon size={20} {...(item.disabled && { color: color['grey-40'] })} />
              )}
              <B3 c={item.disabled ? 'grey-40' : 'grey-80'}>{item.label}</B3>
            </ItemButton>
          </ItemList>
        );
      })}
    </>
  );
}

export function OptionList<T = string | number>({
  onChange,
  option,
  value,
  width,
  maxDropdownItemsToShow = 6,
  focusedItemIdx = -1,
}: OptionListProps<T>) {
  const scrollRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (option.items.length === 0) {
      return;
    }
    if (focusedItemIdx === -1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      scrollRef.current!.children[0]?.scrollIntoView({
        block: 'nearest',
      });
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    scrollRef.current!.children[focusedItemIdx]?.scrollIntoView({
      block: 'nearest',
    });
  }, [focusedItemIdx, option.items.length]);

  return (
    <ListContainer width={width} maxDropdownItemsToShow={maxDropdownItemsToShow} ref={scrollRef}>
      {option.type === 'section' ? (
        option.items.map((section, i) => (
          <Fragment key={i}>
            <SectionTitleWrapper>
              <B4>{section.sectionTitle}</B4>
            </SectionTitleWrapper>
            <OptionItems
              value={value}
              items={section.sectionItems}
              onChange={onChange}
              focusedItemIdx={focusedItemIdx}
            />
          </Fragment>
        ))
      ) : (
        <OptionItems
          value={value}
          items={option.items}
          onChange={onChange}
          focusedItemIdx={focusedItemIdx}
        />
      )}
    </ListContainer>
  );
}

interface MultipleOptionListProps<T = string | number>
  extends Omit<OptionListProps<T>, 'value' | 'onChange'> {
  values: T[];
  searchInput?: ReactNode;
  onChange: (value: BasicOptionItem<T>) => void;
}

function MultipleOptionItems<T>({
  values,
  items,
  onChange,
  focusedItemIdx,
  searchInput,
}: {
  values: T[];
  items: Array<BasicOptionItem<T>>;
  onChange: (value: BasicOptionItem<T>) => void;
  focusedItemIdx: number;
  searchInput?: ReactNode;
}) {
  return (
    <>
      {searchInput}
      {items.map((item, i) => {
        const ItemIcon = item.icon;
        const alreadySelected = values?.includes(item.value);
        return (
          <ItemList key={i} role="option">
            <ItemButtonWithMinus
              focused={focusedItemIdx === i}
              disabled={item.disabled}
              aria-selected={alreadySelected}
              selected={alreadySelected}
              onClick={() => {
                if (!item.disabled) {
                  onChange(item);
                }
              }}
            >
              <Flex>
                {ItemIcon != null && (
                  <ItemIcon size={20} {...(item.disabled && { color: color['grey-40'] })} />
                )}
                <B3 c={item.disabled ? 'grey-40' : 'grey-80'}>{item.label}</B3>
              </Flex>
              {alreadySelected && (
                <div className={MINUS_ICON_CLASS_NAME}>
                  <Icon.Minus size={24} />
                </div>
              )}
            </ItemButtonWithMinus>
          </ItemList>
        );
      })}
    </>
  );
}

export function MultipleOptionList<T = string | number>({
  searchInput,
  onChange,
  option,
  values,
  width,
  maxDropdownItemsToShow = 6,
  focusedItemIdx = -1,
}: MultipleOptionListProps<T>) {
  const scrollRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (option.items.length === 0) {
      return;
    }
    if (focusedItemIdx === -1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      scrollRef.current!.children[0]?.scrollIntoView({
        block: 'nearest',
      });
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    scrollRef.current!.children[focusedItemIdx]?.scrollIntoView({
      block: 'nearest',
    });
  }, [focusedItemIdx, option.items.length]);

  return (
    <ListContainer width={width} maxDropdownItemsToShow={maxDropdownItemsToShow} ref={scrollRef}>
      {option.type === 'section' ? (
        option.items.map((section, i) => (
          <Fragment key={i}>
            <SectionTitleWrapper>
              <B4>{section.sectionTitle}</B4>
            </SectionTitleWrapper>
            <MultipleOptionItems<T>
              values={values}
              items={section.sectionItems}
              onChange={onChange}
              focusedItemIdx={focusedItemIdx}
              searchInput={searchInput}
            />
          </Fragment>
        ))
      ) : (
        <MultipleOptionItems<T>
          values={values}
          items={option.items}
          onChange={onChange}
          focusedItemIdx={focusedItemIdx}
          searchInput={searchInput}
        />
      )}
    </ListContainer>
  );
}
const ListContainer = styled.ul<{
  width?: number;
  maxDropdownItemsToShow: number;
}>`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  max-height: ${({ maxDropdownItemsToShow }) =>
    `${maxDropdownItemsToShow * (LIST_ITEM_HEIGHT + 4) + 20 - 4}px`};
  height: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 8px;
  background: ${color.white};
  box-shadow: 0px 0px 1px 0px rgba(132, 132, 132, 0.31), 0px 2px 5px 0px rgba(70, 70, 70, 0.2);
  overflow: auto;
  list-style: none;
`;

const SectionTitleWrapper = styled.li`
  padding: 6px 8px;
`;

const ItemList = styled.li`
  width: 100%;
`;

const ItemButton = styled.div<{
  selected?: boolean;
  disabled?: boolean;
  focused: boolean;
}>`
  border: none;
  overflow: visible;
  cursor: pointer;
  display: flex;
  width: 100%;
  min-height: ${LIST_ITEM_HEIGHT}px;
  padding: 6px 8px;
  align-items: center;
  align-self: stretch;
  gap: 6px;
  border-radius: 4px;
  text-align: left;
  background-color: ${({ selected, focused }) =>
    selected ? color['grey-30'] : focused ? color['grey-20'] : color.white};
  &:hover {
    background-color: ${({ disabled, selected }) =>
      disabled ? 'none' : selected ? color['grey-40'] : color['grey-20']};
    .${MINUS_ICON_CLASS_NAME} {
      opacity: 1;
    }
  }
  svg {
    display: list-item;
    flex-shrink: 0;
  }
  span {
    word-break: break-word;
  }

  ${({ disabled }) =>
    disabled &&
    `background: none;
    cursor: not-allowed;
`}
  .${MINUS_ICON_CLASS_NAME} {
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`;

const ItemButtonWithMinus = styled(ItemButton)`
  display: flex;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
